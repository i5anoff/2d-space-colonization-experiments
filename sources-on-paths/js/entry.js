import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import VeinNode from '../../core/VeinNode';
import Path from '../../core/Path';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import AuxinSource from '../../core/AuxinSource';
import SVGLoader from '../../core/SVGLoader';

let canvas, ctx;
let network;

const leaf = require('../svg/leaf.svg');
const grassBlade = require('../svg/grass-blade.svg');

let currentPath;

let yPosition = 0;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx);

  // Add the bounds, sources, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  setupPath();
  addRootVeins();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    yPosition = cy;

    // currentPath = getHorizontalLine();
    currentPath = getSquareBounds();
    // currentPath = getDiamondBounds();
    // currentPath = getCircleBounds();
    // currentPath = getLeafBounds();
    // currentPath = getGrassBladeBounds();

    currentPath.isCentered = true;
    currentPath.setScale(.01);
  }

    let getHorizontalLine = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      return new Path(
        [
          [cx - 400, cy + 400],
          [cx + 400, cy + 400]
        ],
        'Bounds',
        ctx
      );
    }

    let getSquareBounds = () => {
      const sideLength = 200;

      return new Path(
        [
          [0, 0],  // top left corner
          [sideLength, 0],  // top right corner
          [sideLength, sideLength],  // bottom right corner
          [0, sideLength],  // bottom left corner
          [0, 0],  // top left corner
        ],
        'Bounds',
        ctx
      );
    }

    let getDiamondBounds = () => {
      const sideLength = 200;

      return new Path(
        [
          [sideLength/2, 0],
          [sideLength, sideLength/2],
          [sideLength/2, sideLength],
          [0, sideLength/2],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      );
    }

    let getCircleBounds = () => {
      const radius = 100;
      const resolution = 50;
      let points = [];

      for(let i = 0; i < resolution; i++) {
        let angle = 2 * Math.PI * i / resolution;
        let x = radius + Math.floor(radius * Math.cos(angle));
        let y = radius + Math.floor(radius * Math.sin(angle));

        points.push([x, y]);
      }

      points.push([points[0][0], points[0][1]]);

      return new Path(points, 'Bounds', ctx);
    }

    let getLeafBounds = () => {
      return new Path(SVGLoader.load(leaf)[0], 'Bounds', ctx);
    }

    let getGrassBladeBounds = () => {
      return new Path(SVGLoader.load(grassBlade)[0], 'Bounds', ctx);
    }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;

    network.addVeinNode(
      new VeinNode(
        null,
        new Vec2(
          cx,
          cy
        ),
        true,
        ctx
      )
    )
  }

  let movePath = () => {
    if(!network.settings.IsPaused && yPosition > -800) {
      currentPath.moveBy(0,-2);
      yPosition = currentPath.origin.y;
    }
  }

  let scalePath = () => {
    if(!network.settings.IsPaused) {
      currentPath.setScale(1.01);
    }
  }

  let rotatePath = () => {
    if(!network.settings.IsPaused) {
      // TODO: rotate path
    }
  }

  let generateSourcesOnPath = () => {
    // network.sources = createEvenlySpacedSources();
    network.sources = createSubdividedSources();
  }

    let createEvenlySpacedSources = () => {
      let sources = [];
      const sourceSpacing = 10;
      let previousSegmentRemainder = 0;

      // For each path segment ...
      for(let i=1; i<currentPath.transformedPolygon.length; i++) {
        const point0 = Vec2(currentPath.transformedPolygon[i-1][0], currentPath.transformedPolygon[i-1][1]);
        const point1 = Vec2(currentPath.transformedPolygon[i][0], currentPath.transformedPolygon[i][1]);
        const currentSegmentLength = point1.distance(point0);
        const startingOffset = sourceSpacing - previousSegmentRemainder;
        const availableLength = currentSegmentLength - startingOffset;

        // We can fit at least one source onto this segment
        if(availableLength >= sourceSpacing) {
          let segmentDirection = point1.subtract(point0, true).normalize();

          // How many sources can we fit onto this segment?
          const numSources = Math.floor(availableLength / sourceSpacing);

          // Create as many auxin sources as we can
          for(let sourceIndex=0; sourceIndex<=numSources; sourceIndex++) {
            sources.push(
              new AuxinSource(
                point0.add(segmentDirection.multiply(sourceSpacing * sourceIndex + startingOffset, true), true),
                ctx
              )
            );
          }

          // Store remainder of segment length to offset next segment's source placement
          previousSegmentRemainder = availableLength - (numSources * sourceSpacing);

        // Can't fit any sources onto this segment, so accumulate the length (previous segments might've also been too short)
        } else {
          previousSegmentRemainder += currentSegmentLength;
        }
      }

      return sources;
    }

    let createSubdividedSources = () => {
      let sources = [];

      // Create sources at each vertex
      for(let i=0; i<currentPath.transformedPolygon.length; i++) {
        sources.push(
          new AuxinSource(
            new Vec2(
              currentPath.transformedPolygon[i][0],
              currentPath.transformedPolygon[i][1]
            ),
            ctx
          )
        );
      }

      let newSources = [];

      // Recursively subdivide segments
      for(let i=1; i<sources.length; i++) {
        const point0 = sources[i-1].position;
        const point1 = sources[i].position;
        subdivideSegment(point0, point1, i, newSources);
      }

      // Reverse the new sources list so that indices don't shift as they are inserted
      newSources.sort((a,b) => {
        return b.index - a.index;
      });

      // Inject all the new sources
      for(let newSource of newSources) {
        sources.splice(newSource.index, 0, newSource.source);
      }

      return sources;
    }

      // Split a segment (defined by two input points) by placing a source at it's midpoint
      let subdivideSegment = (point0, point1, originalIndex, newSources) => {
        const segmentLength = point1.distance(point0);

        // Only subdivide the segment if its long enough (terminates recursion in short segments)
        if(segmentLength > 20) {
          let midpointSource = getMidpointSource(point0, point1, segmentLength);
          newSources.push({
            index: originalIndex,
            source: midpointSource
          });

          // Recursively subdivide the new segments
          subdivideSegment(point0, midpointSource.position, originalIndex, newSources); // subdivide the left segment
          subdivideSegment(midpointSource.position, point1, originalIndex, newSources); // subdivide the right segment
        }
      }

      // Generate a new source exactly halfway between two others
      let getMidpointSource = (point0, point1, segmentLength) => {
        const segmentDirection = point1.subtract(point0, true).normalize();

        return new AuxinSource(
          point0.add(segmentDirection.multiply(segmentLength/2, true), true),
          ctx
        );
      }

// Main program loop
let update = (timestamp) => {
  if(!network.settings.IsPaused) {
    // movePath();
    scalePath();
    generateSourcesOnPath();

    network.update();
  }

  currentPath.draw();
  network.draw();
  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();