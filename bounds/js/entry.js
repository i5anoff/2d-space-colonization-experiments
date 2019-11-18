import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import SourcePatterns from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import Path from '../../core/Path';
import SVGLoader from '../../core/SVGLoader';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';

const leaf = require('../svg/leaf.svg');

let canvas, ctx;
let network;

const SQUARE = 0;
const CIRCLE = 1;
const LEAF = 2;
let currentBoundsShape = LEAF;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx);

  // Add bounding shape
  addBounds();

  // Add auxin sources for veins to move towards
  addSources();

  // Add root veins
  addRootVeins();

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let addBounds = () => {
  switch(currentBoundsShape) {
    case SQUARE:
      network.bounds = getSquareBounds();
      break;

    case CIRCLE:
      network.bounds = getCircleBounds();
      break;

    case LEAF:
      network.bounds = getLeafBounds();
      break;
  }
}

  let getSquareBounds = () => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const sideLength = 800;

    return new Path(
      [
        [cx - sideLength/2, cy - sideLength/2],  // top left corner
        [cx + sideLength/2, cy - sideLength/2],  // top right corner
        [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
        [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
      ],
      'Bounds',
      ctx
    );
  }

  let getCircleBounds = () => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const radius = 350;
    const resolution = 100;
    let points = [];

    for(let i = 0; i < resolution; i++) {
      let angle = 2 * Math.PI * i / resolution;
      let x = cx + Math.floor(radius * Math.cos(angle));
      let y = cy + Math.floor(radius * Math.sin(angle));

      points.push([x, y]);
    }

    return new Path(points, 'Bounds', ctx);
  }

  let getLeafBounds = () => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const shapeWidth = 900;
    const shapeHeight = 900;

    let polygon = SVGLoader.load(leaf)[0];

    // Translate the design to the screen center
    for(let point of polygon) {
      point[0] = cx - shapeWidth/2 + point[0];
      point[1] = cy - shapeHeight/2 + point[1];
    }

    return new Path(polygon, 'Bounds', ctx);
  }

let addSources = () => {
  // Set up the auxin sources using pre-made patterns
  let randomSources = SourcePatterns.getRandomSources(500, ctx, network.bounds);
  let gridSources = SourcePatterns.getGridOfSources(80, 80, ctx, network.bounds);

  network.sources = gridSources;
}

// Create the network with initial conditions
let addRootVeins = () => {
  switch(currentBoundsShape) {
    case SQUARE:
    case CIRCLE:
      // Add a set of random root veins throughout scene
      for(let i=0; i<10; i++) {
        network.addVeinNode(
          new VeinNode(
            null,
            new Vec2(
              random(window.innerWidth),
              random(window.innerHeight)
            ),
            true,
            ctx
          )
        );
      }

      break;

    case LEAF:
      // Put a single root note at the base of the leaf
      network.addVeinNode(
        new VeinNode(
          null,
          new Vec2(
            window.innerWidth / 2 - 5,
            window.innerHeight / 2 + 220
          ),
          true,
          ctx
        )
      );

      break;
  }
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.draw();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    // b = toggle visibility of bounds
    case 'b':
      network.settings.ShowBounds = !network.settings.ShowBounds;
      break;

    case '1':
      currentBoundsShape = SQUARE;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    case '2':
      currentBoundsShape = CIRCLE;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    case '3':
      currentBoundsShape = LEAF;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;
  }
});


// Kick off the application
setup();