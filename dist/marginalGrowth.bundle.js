/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./marginal-growth/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/AuxinSource.js":
/*!*****************************!*\
  !*** ./core/AuxinSource.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuxinSource; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class AuxinSource {
  constructor(position, ctx, settings = {}) {
    this.position = position;     // vec2 of this source's position
    this.ctx = ctx;               // global canvas context
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencingNodes = [];   // references to nodes this source is influencing each frame
    this.fresh = true;            // flag used to prevent sources from being removed during first frame of Closed venation mode
  }

  draw() {
    // Draw the attraction zone
    if(this.settings.ShowAttractionZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AttractionDistance, this.settings.AttractionDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.AttractionZoneColor;
      this.ctx.fill();
    }

    // Draw the kill zone
    if(this.settings.ShowKillZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.KillDistance, this.settings.KillDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.KillZoneColor;
      this.ctx.fill();
    }

    // Draw the auxin source
    if(this.settings.ShowSources) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, 1, 1, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.SourceColor;
      this.ctx.fill();
    }
  }
}

/***/ }),

/***/ "./core/ColorPresets.js":
/*!******************************!*\
  !*** ./core/ColorPresets.js ***!
  \******************************/
/*! exports provided: Light, Dark, Realistic, Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dark", function() { return Dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Realistic", function() { return Realistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return Custom; });
const Light = {
  BackgroundColor: 'rgba(255,255,255,1)',
  SourceColor: 'rgba(0,0,0,.5)',
  VeinColor: 'rgba(0,0,0,1)',
  VeinTipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(0,0,0,.1)',
  BoundsBorderColor: 'rgba(0,0,0,.1)',
  ObstacleFillColor: 'rgba(0,0,0,.7)'
}

const Dark = {
  BackgroundColor: 'rgba(0,0,0,.9)',
  SourceColor: 'rgba(255,255,255,.5)',
  VeinColor: 'rgba(255,255,255,1)',
  VeinTipColor: 'rgba(0,255,255,1)',
  AttractionZoneColor: 'rgba(255,255,255,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(255,255,255,.2)',
  BoundsFillColor: 'rgba(255,255,255,0)',
  BoundsBorderColor: 'rgba(255,255,255,.05)',
  ObstacleFillColor: 'rgba(255,255,255,.2)'
}

const Realistic = {
  BackgroundColor: 'rgba(255,255,255,1)',
  SourceColor: 'rgba(255,255,255,1)',
  VeinColor: 'rgba(255,255,255,.6)',
  // VeinColor: 'rgba(0,0,0,.2)',
  VeinTipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(61,166,12,1)',
  BoundsBorderColor: 'rgba(255,255,255,1)',
  ObstacleFillColor: 'rgba(255,255,255,1)'
}

const Custom = {
  BackgroundColor: 'rgb(242,242,242)',
  SourceColor: 'rgba(255,255,255,.6)',
  VeinColor: 'rgba(255,255,255,1)',
  InfluenceLinesColor: 'rgba(255,255,255,.3)',
  // BoundsFillColor: 'rgb(61,85,136)',
  // BoundsBorderColor: 'rgb(61,85,136)'
  BoundsFillColor: 'rgb(210, 81, 94)',
  BoundsBorderColor: 'rgb(210, 81, 94)'
}

/***/ }),

/***/ "./core/Defaults.js":
/*!**************************!*\
  !*** ./core/Defaults.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Simulation configurations
  */

  VenationType: 'Open',         // venation can be "Open" or "Closed"
  SegmentLength: 5,             // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 30,       // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,              // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,              // initial pause/unpause state
  EnableCanalization: true,     // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: true,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,          // toggled with 's'
  ShowVeins: true,             // toggled with 'v'
  ShowVeinTips: false,         // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'a'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: false,   // toggled with 'i'
  ShowBounds: false,           // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Dark"],

  // Line thicknesses
  VeinThickness: 1.5,
  VeinTipThickness: 2,
  BoundsBorderThickness: 1
});

/***/ }),

/***/ "./core/KeyboardInteractions.js":
/*!**************************************!*\
  !*** ./core/KeyboardInteractions.js ***!
  \**************************************/
/*! exports provided: setupKeyListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupKeyListeners", function() { return setupKeyListeners; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");


function setupKeyListeners(network) {
  document.addEventListener('keypress', (e) => {
    switch(e.key) {
      // Space = pause/unpause
      case ' ':
        network.togglePause();
        break;

      // v = toggle vein visibility
      case 'v':
        network.toggleVeins();
        break;

      // s = toggle auxin source visibility
      case 's':
        network.toggleSources();
        break;

      // a = toggle attraction zone visibility
      case 'a':
        network.toggleAttractionZones();
        break;

      // t = toggle vein tip visibility
      case 't':
        network.toggleVeinTips();
        break;

      // k = toggle kill zone visibility
      case 'k':
        network.toggleKillZones();
        break;

      // i = toggle influence lines visibility
      case 'i':
        network.toggleInfluenceLines();
        break;

      // b = toggle bounds visibility
      case 'b':
        network.toggleBounds();
        break;

      // o = toggle obstacles visibility
      case 'o':
        network.toggleObstacles();
        break;

      // e = export an SVG file of all visible geometry
      case 'e':
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["exportSVG"])(network);
        break;

      // c = toggle auxin flux canalization
      case 'c':
        network.toggleCanalization();
        break;

      // p = toggle opacity blending
      case 'p':
        network.toggleOpacityBlending();
        break;
    }
  });
}

/***/ }),

/***/ "./core/Network.js":
/*!*************************!*\
  !*** ./core/Network.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Network; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var kdbush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kdbush */ "./node_modules/kdbush/src/index.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./core/Path.js");






class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

    this.nodesIndex;    // kd-bush spatial index for all nodes

    this.bounds = [];     // array of Path objects that veins cannot grow outside of
    this.obstacles = [];  // array of Path objects that veins must avoid

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // Associate auxin sources with nearby vein nodes to figure out where growth should occur
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, only associate this source with its closest vein node
        case 'Open':
          let closestNode = this.getClosestNode(source, this.getNodesInAttractionZone(source));

          if(closestNode != null) {
            closestNode.influencedBy.push(sourceID);
            source.influencingNodes = [closestNode];
          }

          break;

        // For closed venation, associate this source with all nodes in its relative neighborhood
        case 'Closed':
          let neighborhoodNodes = this.getRelativeNeighborNodes(source);
          let nodesInKillZone = this.getNodesInKillZone(source);

          // Exclude nodes that are in the source's kill zone (these should stop growing)
          let nodesToGrow = neighborhoodNodes.filter((neighborNode) => {
            return !nodesInKillZone.includes(neighborNode);
          });

          source.influencingNodes = neighborhoodNodes;

          if(nodesToGrow.length > 0) {
            source.fresh = false;

            for(let node of nodesToGrow) {
              node.influencedBy.push(sourceID);
            }
          }


          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes being influenced by sources
    for(let node of this.nodes) {
      if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.sources[id]));
        let nextNode = node.getNextNode(averageDirection);
        let isInsideAnyBounds = false;
        let isInsideAnyObstacle = false;

        // Only allow root veins inside of defined bounds
        if(this.bounds != undefined && this.bounds.length > 0) {
          for(let bound of this.bounds) {
            if(bound.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyBounds = true;
            }
          }
        }

        // Don't allow any root veins that are inside of an obstacle
        if(this.obstacles != undefined && this.obstacles.length > 0) {
          for(let obstacle of this.obstacles) {
            if(obstacle.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyObstacle = true;
            }
          }
        }

        // NOTE: disabling this check lets veins grow across gaps in bounds - cool effect!
        if(
          (isInsideAnyBounds || this.bounds.length === 0) &&
          (!isInsideAnyObstacle || this.obstacles.length === 0)
        ) {
          this.nodes.push(nextNode);
        }
      }

      node.influencedBy = [];

      // Perform auxin flux canalization (line segment thickening)
      if(node.isTip && this.settings.EnableCanalization) {
        let currentNode = node;

        while(currentNode.parent != null) {
          // When there are multiple child veins, use the thickest of them all
          if(currentNode.parent.thickness < currentNode.thickness + .07) {
            currentNode.parent.thickness = currentNode.thickness + .03;
          }

          currentNode = currentNode.parent;
        }
      }
    }

    // Remove any auxin sources that have been reached by their associated vein nodes
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein node reaches it
        case 'Open':
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein nodes have reached it
        case 'Closed':
          if(source.influencingNodes.length > 0 && !source.fresh) {
            let allNodesReached = true;

            for(let node of source.influencingNodes) {
              if(node.position.distance(source.position) > this.settings.KillDistance) {
                allNodesReached = false;
              }
            }

            if(allNodesReached) {
              this.sources.splice(sourceID, 1);
            }
          }

          break;
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    this.drawBackground();
    this.drawBounds();
    this.drawObstacles();
    this.drawSources();
    this.drawVeins();
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.ctx.beginPath();
    this.ctx.fillStyle = this.settings.Colors.BackgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  drawBounds() {
    if(this.settings.ShowBounds && this.bounds != undefined) {
      for(let bound of this.bounds) {
        bound.draw();
      }
    }
  }

  drawObstacles() {
    if(this.settings.ShowObstacles && this.obstacles != undefined) {
      for(let obstacle of this.obstacles) {
        obstacle.draw();
      }
    }
  }

  drawVeins() {
    if(this.settings.ShowVeins) {
      for(let node of this.nodes) {
        node.draw();
      }
    }
  }

  drawSources() {
    for(let source of this.sources) {
      source.draw();

      // Draw lines between each source and the nodes they are influencing
      if(this.settings.ShowInfluenceLines && source.influencingNodes.length > 0) {
        for(let node of source.influencingNodes) {
          this.ctx.beginPath();
          this.ctx.moveTo(source.position.x, source.position.y);
          this.ctx.lineTo(node.position.x, node.position.y);
          this.ctx.strokeStyle = this.settings.Colors.InfluenceLinesColor;
          this.ctx.stroke();
        }
      }
    }
  }

  getRelativeNeighborNodes(source) {
    let fail;

    let nearbyNodes = this.getNodesInAttractionZone(source);
    let relativeNeighbors = [];
    let sourceToP0, sourceToP1, p0ToP1;

    // p0 is a relative neighbor of auxinPos iff
    // for any point p1 that is closer to auxinPos than is p0,
    // p0 is closer to auxinPos than to p1
    for(let p0 of nearbyNodes) {
      fail = false;
      sourceToP0 = p0.position.subtract(source.position, true);

      for(let p1 of nearbyNodes) {
        if(p0 === p1) {
          continue;
        }

        sourceToP1 = p1.position.subtract(source.position, true);

        if(sourceToP1.length() > sourceToP0.length()) {
          continue;
        }

        p0ToP1 = p1.position.subtract(p0.position, true);

        if(sourceToP0.length() > p0ToP1.length()) {
          fail = true;
          break;
        }
      }

      if(!fail) {
        relativeNeighbors.push(p0);
      }
    }

    return relativeNeighbors;
  }

  getNodesInAttractionZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.AttractionDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getNodesInKillZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.KillDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getClosestNode(source, nearbyNodes) {
    let closestNode = null,
      record = this.settings.AttractionDistance;

    for(let node of nearbyNodes) {
      let distance = node.position.distance(source.position);

      if(distance < this.settings.KillDistance) {
        source.reached = true;
        closestNode = null;
      } else if(distance < record) {
        closestNode = node;
        record = distance;
      }
    }

    return closestNode;
  }

  getAverageDirection(node, nearbySources) {
    // Add up normalized vectors pointing to each auxin source
    let averageDirection = new vec2__WEBPACK_IMPORTED_MODULE_2__(0,0);

    for(let source of nearbySources) {
      averageDirection.add(
        source.position.subtract(node.position, true).normalize()
      );
    }

    // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating nodes in the same place
    // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
    averageDirection.add(new vec2__WEBPACK_IMPORTED_MODULE_2__(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1))).normalize();

    averageDirection.divide(node.influencedBy.length).normalize();

    return averageDirection;
  }

  addVeinNode(node) {
    let isInsideAnyBounds = false;
    let isInsideAnyObstacle = false;

    // Only allow root veins inside of defined bounds
    if(this.bounds != undefined && this.bounds.length > 0) {
      for(let bound of this.bounds) {
        if(bound.contains(node.position.x, node.position.y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root veins that are inside of an obstacle
    if(this.obstacles != undefined && this.obstacles.length > 0) {
      for(let obstacle of this.obstacles) {
        if(obstacle.contains(node.position.x, node.position.y)) {
          isInsideAnyObstacle = true;
        }
      }
    }

    if(
      (isInsideAnyBounds || this.bounds.length === 0) &&
      (!isInsideAnyObstacle || this.obstacles.length === 0)
    ) {
      this.nodes.push(node);
      this.buildSpatialIndices();
    }
  }

  reset() {
    this.nodes = [];
    this.sources = [];

    this.buildSpatialIndices();
  }

  buildSpatialIndices() {
    this.nodesIndex = new kdbush__WEBPACK_IMPORTED_MODULE_1__["default"](this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleVeinTips() {
    this.settings.ShowVeinTips = !this.settings.ShowVeinTips;

    for(let node of this.nodes) {
      node.settings.ShowVeinTips = !node.settings.ShowVeinTips;
    }
  }

  toggleSources() {
    this.settings.ShowSources = !this.settings.ShowSources;

    for(let source of this.sources) {
      source.settings.ShowSources = !source.settings.ShowSources;
    }
  }

  toggleAttractionZones() {
    this.settings.ShowAttractionZones = !this.settings.ShowAttractionZones;

    for(let source of this.sources) {
      source.settings.ShowAttractionZones = !source.settings.ShowAttractionZones;
    }
  }

  toggleKillZones() {
    this.settings.ShowKillZones = !this.settings.ShowKillZones;

    for(let source of this.sources) {
      source.settings.ShowKillZones = !source.settings.ShowKillZones;
    }
  }

  toggleInfluenceLines() {
    this.settings.ShowInfluenceLines = !this.settings.ShowInfluenceLines;
  }

  toggleBounds() {
    this.settings.ShowBounds = !this.settings.ShowBounds;
  }

  toggleObstacles() {
    this.settings.ShowObstacles = !this.settings.ShowObstacles;
  }

  toggleCanalization() {
    this.settings.EnableCanalization = !this.settings.EnableCanalization;

    if(!this.settings.EnableCanalization) {
      for(let node of this.nodes) {
        node.thickness = 0;
      }
    }
  }

  toggleOpacityBlending() {
    this.settings.EnableOpacityBlending = !this.settings.EnableOpacityBlending;

    for(let node of this.nodes) {
      node.settings.EnableOpacityBlending = this.settings.EnableOpacityBlending;
    }
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/Path.js":
/*!**********************!*\
  !*** ./core/Path.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);



let inside = __webpack_require__(/*! point-in-polygon */ "./node_modules/point-in-polygon/index.js");

class Path {
  constructor(polygon, type, ctx, settings) {
    this.polygon = polygon;     // array of arrays containing coordinates defining a polygon ([[x0,y0],[x1,y1],...])
    this.ctx = ctx;             // global canvas context
    this.type = type;           // string either 'Bounds' or 'Obstacle'

    this.transformedPolygon = polygon;  // Paths are initialized without any transformations by default
    this.origin = {x:0, y:0};           // origin point used for translation
    this.scale = 1;                     // multiplication factor for polygon coordinates
    this.width = -1;                    // width of transformed polygon - will be calculated using this.calculateDimensions()
    this.height = -1;                   // height of transformed polygon - will be calculated using this.calculateDimensions()
    this.isCentered = false;            // whether or not to automatically translate to screen center

    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.calculateDimensions();
  }

  // Check if provided coordinates are inside polygon defined by this Path
  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  // Relative translation
  moveBy(x, y) {
    this.origin.x += x;
    this.origin.y += y;

    this.createTransformedPolygon();
  }

  // Absolute translation
  moveTo(x, y) {
    if(this.isCentered) {
      this.origin.x = x - this.width/2;
      this.origin.y = y - this.height/2;
    } else {
      this.origin.x = x;
      this.origin.y = y;
    }

    this.createTransformedPolygon();
  }

  setScale(factor) {
    this.scale *= factor;
    this.createTransformedPolygon();
    this.calculateDimensions();

    if(this.isCentered) {
      this.moveTo(window.innerWidth/2, window.innerHeight/2);
    }
  }

  // Calculate total path length by adding up all line segment lengths (distances between polygon points)
  getTotalLength() {
    let totalLength = 0;

    for(let i=1; i<this.polygon.length; i++) {
      totalLength += vec2__WEBPACK_IMPORTED_MODULE_1__(
        this.polygon[i][0] * this.scale,
        this.polygon[i][1] * this.scale
      ).distance(
        vec2__WEBPACK_IMPORTED_MODULE_1__(
          this.polygon[i-1][0] * this.scale,
          this.polygon[i-1][1] * this.scale
        )
      );
    }

    return totalLength;
  }

  // Calculates the real width and height of the transformed polygon
  calculateDimensions() {
    let leftMostCoordinate = this.transformedPolygon[0][0],
      rightMostCoordinate = this.transformedPolygon[0][0],
      topMostCoordinate = this.transformedPolygon[0][1],
      bottomMostCoordinate = this.transformedPolygon[0][1];

    for(let i=0; i<this.transformedPolygon.length; i++) {
      if(this.transformedPolygon[i][0] < leftMostCoordinate) {
        leftMostCoordinate = this.transformedPolygon[i][0];
      } else if(this.transformedPolygon[i][0] > rightMostCoordinate) {
        rightMostCoordinate = this.transformedPolygon[i][0];
      }

      if(this.transformedPolygon[i][1] < topMostCoordinate) {
        topMostCoordinate = this.transformedPolygon[i][1];
      } else if(this.transformedPolygon[i][1] > bottomMostCoordinate) {
        bottomMostCoordinate = this.transformedPolygon[i][1];
      }
    }

    this.width = Math.abs(rightMostCoordinate - leftMostCoordinate);
    this.height = Math.abs(bottomMostCoordinate - topMostCoordinate);
  }

  // Create coordinates for the "transformed" version of this path, taking into consideration translation and scaling
  createTransformedPolygon() {
    this.transformedPolygon = [];

    for(let i=0; i<this.polygon.length; i++) {
      this.transformedPolygon.push(
        [
          this.polygon[i][0] * this.scale + this.origin.x,
          this.polygon[i][1] * this.scale + this.origin.y
        ]
      );
    }
  }

  draw() {
    if(
      this.settings.ShowBounds && this.type == 'Bounds' ||
      this.settings.ShowObstacles && this.type == 'Obstacles'
    ) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.transformedPolygon[0][0], this.transformedPolygon[0][1]);

      // Draw sequential lines to all points of the polygon
      for(let i = 0; i < this.transformedPolygon.length; i++) {
        this.ctx.lineTo(this.transformedPolygon[i][0], this.transformedPolygon[i][1]);
      }

      // Draw line back to first point to close the polygon
      // this.ctx.lineTo(this.transformedPolygon[0][0], this.transformedPolygon[0][1]);

      switch(this.type) {
        case 'Bounds':
          this.ctx.strokeStyle = this.settings.Colors.BoundsBorderColor;
          this.ctx.lineWidth = this.settings.BoundsBorderThickness;
          this.ctx.fillStyle = this.settings.Colors.BoundsFillColor;

          this.ctx.stroke();
          this.ctx.lineWidth = 1;

          break;

        case 'Obstacle':
          this.ctx.fillStyle = this.settings.Colors.ObstacleFillColor;
          break;
      }

      this.ctx.fill();

      // Draw bounding box
      // this.ctx.beginPath();
      // this.ctx.moveTo(this.origin.x, this.origin.y);
      // this.ctx.lineTo(this.origin.x + this.width, this.origin.y);
      // this.ctx.lineTo(this.origin.x + this.width, this.origin.y + this.height);
      // this.ctx.lineTo(this.origin.x, this.origin.y + this.height);
      // this.ctx.lineTo(this.origin.x, this.origin.y);
      // this.ctx.strokeStyle = 'rgba(255,255,255,1)';
      // this.ctx.stroke();
    }
  }
}

/***/ }),

/***/ "./core/SVGLoader.js":
/*!***************************!*\
  !*** ./core/SVGLoader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGLoader; });
/* harmony import */ var _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/svg-pathdata */ "./node_modules/svg-pathdata/lib/SVGPathData.module.js");


class SVGLoader {
  constructor() {}

  static load(svgString) {
    let parser = new DOMParser();
    let svgNode = parser.parseFromString(svgString, 'image/svg+xml');

    let inputPaths = svgNode.querySelectorAll('path'),
      paths = [];

    // Scrape all points from all paths, and record breakpoints
    for(let inputPath of inputPaths) {
      let pathData = new _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"](inputPath.getAttribute('d')),
        points = [];

      let previousCoords = {
        x: 0,
        y: 0
      };

      for(let [index, command] of pathData.commands.entries()) {
        switch(command.type) {
          // Move ('M') and line ('L') commands have both X and Y
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].MOVE_TO:
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].LINE_TO:
            points.push([command.x, command.y]);
            break;

          // Horizontal line ('H') commands only have X, using previous command's Y
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].HORIZ_LINE_TO:
            points.push([command.x, previousCoords.y]);
            break;

          // Vertical line ('V') commands only have Y, using previous command's X
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].VERT_LINE_TO:
            points.push([previousCoords.x, command.y]);
            break;

          // ClosePath ('Z') commands are a naive indication that the current path can be processed and added to the world
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].CLOSE_PATH:
            // Capture path in return object
            paths.push(points);
            points = [];
            break;
        }

        // Unclosed paths never have CLOSE_PATH commands, so wrap up the current path when we're at the end of the path and have not found the command
        if(index == pathData.commands.length - 1 && command.type != _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].CLOSE_PATH) {
          paths.push(points);
          points = [];
        }

        // Capture X coordinate, if there was one
        if(command.hasOwnProperty('x')) {
          previousCoords.x = command.x;
        }

        // Capture Y coordinate, if there was one
        if(command.hasOwnProperty('y')) {
          previousCoords.y = command.y;
        }
      }
    }

    return paths;
  }
}


/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random, map, getCircleOfPoints, exportSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircleOfPoints", function() { return getCircleOfPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSVG", function() { return exportSVG; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-points */ "./node_modules/svg-points/modules/index.js");



// random(), similar to Processing's
// If two parameters are passed, they are interpreted as the minimum and maximum of the desired range
// If only one parameter is passed, it is interpreted as the maximum, while zero is used as the minimum
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.random() * (max - min) + min;
}

// Converts a number from one range to another
function map(value, originalLower, originalUpper, newLower, newUpper) {
  return newLower + (newUpper - newLower) * ((value - originalLower) / (originalUpper - originalLower));
}

// Returns an array of point coordinates (also arrays, with two entries) for points arranged in a circle
function getCircleOfPoints(cx, cy, radius, resolution) {
  let angle, x, y;
  let points = [];

  for(let i = 0; i < resolution; i++) {
    angle = 2 * Math.PI * i / resolution;
    x = cx + Math.floor(radius * Math.cos(angle));
    y = cy + Math.floor(radius * Math.sin(angle));

    points.push([x, y]);
  }

  return points;
}

// Creates an SVG document containing all of the visible geometry, then pushes it to the client
// - Triggered by pressing `e` in any sketch. See KeyboardInteractions.js for definition
function exportSVG(network) {
  // Set up <svg> element
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svg.setAttribute('width', window.innerWidth);
  svg.setAttribute('height', window.innerHeight);
  svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

  // Create <line>s for each vein segment
  if(network.settings.ShowVeins) {
    let nodeLinesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    for(let node of network.nodes) {
      if(node.parent != null) {
        let lineNode = `
          <line
            x1="${node.parent.position.x}"
            y1="${node.parent.position.y}"
            x2="${node.position.x}"
            y2="${node.position.y}"
            stroke="black"
          />
        `;

        nodeLinesGroup.innerHTML += lineNode;
      }
    }

    svg.appendChild(nodeLinesGroup);
  }

  // Create <path>s for bounds
  if(network.settings.ShowBounds) {
    if(network.bounds.length > 0) {
      let boundsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      for(let bound of network.bounds) {
        boundsGroup.appendChild(
          getPathElFromPoints(bound.polygon)
        );
      }

      svg.appendChild(boundsGroup);
    }
  }

  // Create <path>s for obstacles
  if(network.settings.ShowObstacles) {
    if(network.obstacles.length > 0) {
      let obstaclesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      for(let obstacle of network.obstacles) {
        obstaclesGroup.appendChild(
          getPathElFromPoints(obstacle.polygon)
        );
      }

      svg.appendChild(obstaclesGroup);
    }
  }

  // Generate the document as a Blob and force a download as a timestamped .svg file
  const svgDoctype = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>';
  const serializedSvg = (new XMLSerializer()).serializeToString(svg);
  const blob = new Blob([svgDoctype, serializedSvg], { type: 'image/svg+xml;' })
  Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, 'venation-' + Date.now() + '.svg');
}

  // Create a <path> element with a properly-formatted `d` attribute containing all the coordinates of the passed points
  function getPathElFromPoints(points) {
    let pointsString = '';

    for(let [index, point] of points.entries()) {
      pointsString += point[0] + ',' + point[1];

      if(index < points.length - 1) {
        pointsString += ' ';
      }
    }

    // Add closepath command to automatically draw line back to initial point
    pointsString += ' ' + points[0][0] + ',' + points[0][1];

    let d = Object(svg_points__WEBPACK_IMPORTED_MODULE_1__["toPath"])({
      type: 'polyline',
      points: pointsString
    });

    let pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', d);
    pathEl.setAttribute('style', 'fill: none; stroke: black; stroke-width: 1');

    return pathEl;
  }

/***/ }),

/***/ "./core/VeinNode.js":
/*!**************************!*\
  !*** ./core/VeinNode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VeinNode; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class VeinNode {
  constructor(parent, position, isTip, ctx, settings, color = undefined) {
    this.parent = parent;       // reference to parent node, necessary for vein thickening later
    this.position = position;   // {vec2} of this node's position
    this.isTip = isTip;         // {boolean}
    this.ctx = ctx;             // global canvas context for drawing
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
    this.color = color;         // color, usually passed down from parent

    this.influencedBy = [];     // references to all AuxinSources influencing this node each frame
    this.thickness = 0;         // thickness - this is increased during vein thickening process
  }

  draw() {
    if(this.parent != null) {
      // Smoothly ramp up opacity based on vein thickness
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = this.thickness / 3 + .2;
      }

      // "Lines" render mode
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = this.settings.Colors.VeinTipColor;
          this.ctx.lineWidth = this.settings.VeinTipThickness;
        } else {
          if(this.color != undefined) {
            this.ctx.strokeStyle = this.color;
          } else {
            this.ctx.strokeStyle = this.settings.Colors.VeinColor;
          }

          this.ctx.lineWidth = this.settings.VeinThickness + this.thickness;
        }

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

      // "Dots" render mode
      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.position.x,
          this.position.y,
          1 + this.thickness / 2,
          1 + this.thickness / 2,
          0,
          0,
          Math.PI * 2
        );

        // Change color or "tip" nodes
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = this.settings.Colors.VeinTipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.VeinColor;
        }

        this.ctx.fill();
      }

      // Reset global opacity if it was changed due to opacity gradient flag
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = 1;
      }
    }
  }

  // Create a new node in the provided direction and a pre-defined distance (SegmentLength)
  getNextNode(averageSourceDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageSourceDirection.multiply(this.settings.SegmentLength), true);

    return new VeinNode(
      this,
      this.nextPosition,
      true,
      this.ctx,
      this.settings,
      this.color
    );
  }
}

/***/ }),

/***/ "./marginal-growth/js/entry.js":
/*!*************************************!*\
  !*** ./marginal-growth/js/entry.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");
/* harmony import */ var _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var _core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/SVGLoader */ "./core/SVGLoader.js");








let canvas, ctx;
let network;

const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./marginal-growth/svg/leaf.svg");
const grassBlade = __webpack_require__(/*! ../svg/grass-blade.svg */ "./marginal-growth/svg/grass-blade.svg");

let currentPath;

const LINE = 0;
const TRIANGLE = 1;
const SQUARE = 2;
const DIAMOND = 3;
const CIRCLE = 4;
const LEAF = 5;
let currentPathShape = SQUARE;

let yPosition = 0;

let showHelp = true;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Load the defined path
  setupPath();

  // Add the bounds, sources, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addRootVeins();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    yPosition = cy;

    switch(currentPathShape) {
      case LINE:
        currentPath = getHorizontalLine();
        break;

      case TRIANGLE:
        currentPath = getTriangleBounds();
        break;

      case SQUARE:
        currentPath = getSquareBounds();
        break;

      case DIAMOND:
        currentPath = getDiamondBounds();
        break;

      case CIRCLE:
        currentPath = getCircleBounds();
        break;

      case LEAF:
        currentPath = getLeafBounds();
        break;
    }

    if(currentPathShape != LINE) {
      currentPath.isCentered = true;
      currentPath.setScale(.01);
    }
  }

    let getHorizontalLine = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [cx - 400, cy + 400],
          [cx + 400, cy + 400]
        ],
        'Bounds',
        ctx
      );
    }

    let getTriangleBounds = () => {
      const sideLength = 200;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [sideLength/2, 0],
          [sideLength, 3*sideLength/4],
          [0, 3*sideLength/4],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      )
    }

    let getSquareBounds = () => {
      const sideLength = 200;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
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

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
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

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](points, 'Bounds', ctx);
    }

    let getLeafBounds = () => {
      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](_core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__["default"].load(leaf)[0], 'Bounds', ctx);
    }

    let getGrassBladeBounds = () => {
      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](_core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__["default"].load(grassBlade)[0], 'Bounds', ctx);
    }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    let cy = window.innerHeight/2;

    if(currentPathShape == LINE) {
      cy = window.innerHeight - 100;
    }

    network.addVeinNode(
      new _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
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
        const point0 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i-1][0], currentPath.transformedPolygon[i-1][1]);
        const point1 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i][0], currentPath.transformedPolygon[i][1]);
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
              new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
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
          new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
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

        return new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
          point0.add(segmentDirection.multiply(segmentLength/2, true), true),
          ctx
        );
      }

let drawText = () => {
  let text = [
    'Auxin sources can be placed on the edges of paths,',
    'creating growth as they are scaled.',
    '',
    '1 = horizontal line moving upwards',
    '2 = triangle',
    '3 = square',
    '4 = diamond',
    '5 = circle',
    '6 = a leaf',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'v = toggle vein visibility',
    's = toggle source visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle vein tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Marginal Growth', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  for(let i=0; i<text.length; i++) {
    ctx.fillText(text[i], 20, 22*i + 80);
  }
}

// Main program loop
let update = (timestamp) => {
  if(!network.settings.IsPaused) {
    if(currentPathShape == LINE) {
      movePath();
    }

    if(currentPathShape != LINE) {
      scalePath();
    }

    generateSourcesOnPath();

    network.update();
  }

  network.draw();
  currentPath.draw();

  if(showHelp) {
    drawText();
  }

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
      break;

    case '1':
      currentPathShape = LINE;
      setupPath();
      resetNetwork();
      break;

    case '2':
      currentPathShape = TRIANGLE;
      setupPath();
      resetNetwork();
      break;

    case '3':
      currentPathShape = SQUARE;
      setupPath();
      resetNetwork();
      break;

    case '4':
      currentPathShape = DIAMOND;
      setupPath();
      resetNetwork();
      break;

    case '5':
      currentPathShape = CIRCLE;
      setupPath();
      resetNetwork();
      break;

    case '6':
      currentPathShape = LEAF;
      setupPath();
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();

/***/ }),

/***/ "./marginal-growth/svg/grass-blade.svg":
/*!*********************************************!*\
  !*** ./marginal-growth/svg/grass-blade.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" id=\"svg36\" sodipodi:docname=\"grass-blade.svg\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g inkscape:groupmode=\"layer\" inkscape:label=\"0\" id=\"g34\"><path id=\"path32\" style=\"fill:none;stroke:#000000;stroke-width:0.96219009;stroke-miterlimit:4;stroke-dasharray:none\" d=\"M 441.95752,61.457361 441.71727,61.112414 441.39983,60.866028 441.03092,60.718195 440.63628,60.668914 440.24165,60.718195 439.87274,60.866028 439.5553,61.112414 439.31505,61.457361 M 467.8534,172.38615 467.4407,158.06364 466.2072,143.81219 464.15984,129.66146 461.30555,115.64115 457.65124,101.7809 453.20385,88.11042 447.9703,74.659344 441.95752,61.457361 M 439.31505,61.457361 433.30227,74.659344 428.06872,88.11042 423.62133,101.7809 419.96702,115.64115 417.11273,129.66146 415.06537,143.81219 413.83187,158.06364 413.41917,172.38615 M 467.8534,854.6005 H 461.04912 454.24484 447.44056 440.63629 433.83201 427.02773 420.22345 413.41917 M 467.8534,172.38615 V 257.66294 342.93974 428.21653 513.49333 598.77012 684.04691 769.3237 854.6005 M 413.41917,854.6005 V 769.3237 684.04691 598.77012 513.49333 428.21653 342.93974 257.66294 172.38615\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./marginal-growth/svg/leaf.svg":
/*!**************************************!*\
  !*** ./marginal-growth/svg/leaf.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" viewBox=\"0 0 772.82472 769.57439\" id=\"svg2\" sodipodi:docname=\"leaf.svg\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g id=\"layer1\"><path id=\"path3183\" d=\"M 376.41485,766.92192 376.64701,766.06216 377.27912,764.30024 378.21463,761.89291 379.35699,759.09689 380.78192,754.40525 381.14532,748.13754 380.39488,738.08823 378.47832,722.05178 376.82226,707.65234 375.13759,690.62562 373.62144,673.09956 372.47093,657.20211 371.51314,643.49585 370.52166,631.9364 369.61345,623.74075 368.90551,620.12591 367.06193,619.22857 362.90648,618.77337 356.42811,618.75984 347.61576,619.18749 299.7607,622.50034 270.05541,625.51534 249.01975,629.54953 227.17356,635.91997 217.26693,638.68731 207.38936,640.58168 195.93042,641.84111 181.27966,642.70363 170.01113,643.07856 160.23064,643.17356 152.98661,642.99384 149.32742,642.54465 147.58199,641.5844 147.35414,640.24606 148.81851,638.02739 152.14975,634.42611 157.3913,627.93953 160.77294,621.44345 162.08281,615.49961 161.10902,610.66973 155.01858,604.9416 143.05749,598.74485 126.06442,592.44137 104.87806,586.39308 93.056783,583.30183 83.087993,580.4865 76.020493,578.25768 72.903033,576.92597 72.941993,575.2739 74.703123,572.19779 78.025663,567.92988 82.748833,562.70241 89.489713,555.24779 93.244523,549.69387 94.704493,544.63361 94.560903,538.65998 92.047263,532.09843 85.375473,524.38931 73.926813,514.94705 57.082583,503.18606 46.666473,496.14633 38.136583,490.14938 32.373133,485.83047 30.256383,483.82485 31.322413,482.77204 34.224973,481.04731 38.520763,478.88971 43.766483,476.53833 58.657833,469.21975 66.115583,461.80661 67.358283,451.86896 63.604443,436.97683 58.793153,421.07621 53.859143,403.26033 49.599943,386.5266 46.813093,373.87246 42.604693,355.30417 36.390633,332.03273 29.891763,310.16832 24.828959,295.82112 22.24613,290.82362 18.696416,285.11596 14.647754,279.40165 10.568079,274.38421 6.9226994,270.02004 4.0565054,266.08573 2.2568054,263.01278 1.8109094,261.2327 20.663131,258.2496 61.088163,261.81741 105.84882,269.63282 137.70792,279.39251 143.04316,281.95585 149.84397,285.02011 157.23614,288.20075 164.34549,291.11317 171.60429,294.27165 179.40196,298.12221 186.80235,302.17795 192.86931,305.95194 210.97141,317.08415 222.66739,320.80139 229.32102,317.10519 232.29607,305.99713 234.10077,294.06428 236.91437,281.67166 240.51725,269.65479 244.68977,258.84919 246.85511,252.96279 249.35976,244.60925 251.89345,234.90103 254.14589,224.95059 256.5838,212.43033 257.71253,203.98799 257.66283,197.85803 256.56547,192.27495 254.23291,181.85392 255.2979,177.54782 260.90146,178.84113 272.18465,185.21831 281.88526,190.44331 290.60957,194.00657 297.37105,195.58087 301.18314,194.83901 301.4754,193.67233 301.33095,191.43593 300.79187,188.45133 299.90022,185.04005 298.71118,179.69665 299.05236,173.8884 301.40514,164.987 306.25087,150.36415 310.23752,139.45633 314.49484,129.13052 318.51886,120.53802 321.80559,114.83011 328.34816,105.12163 336.24807,92.484558 345.92011,76.237048 357.77906,55.697228 371.54333,32.735737 383.27351,15.451453 392.44065,4.5577461 398.51583,0.76798411 399.72521,1.4548291 400.52483,3.6152621 400.94547,7.3991251 401.01791,12.956264 401.22861,18.642676 401.92908,25.115345 403.00967,31.577637 404.36071,37.232914 410.94368,54.758248 421.23845,76.434078 433.6076,99.060118 446.41371,119.43609 454.91861,131.56864 460.36584,138.26707 464.31957,141.12067 468.34395,141.7187 471.30884,141.44728 474.47462,140.70825 477.46233,139.6145 479.89298,138.27889 482.66301,136.47342 484.46384,135.89027 485.86518,136.54159 487.43673,138.43953 488.60673,141.72899 489.74613,148.00284 490.75945,156.60163 491.55124,166.86593 492.47752,179.60586 493.6042,188.18928 495.18728,193.97367 497.48277,198.31655 504.56291,209.48819 510.02112,219.62427 514.14948,229.32903 517.24009,239.2067 518.90843,245.06662 520.63627,250.30114 522.2197,254.3392 523.45477,256.60973 524.7876,259.01766 526.63709,263.4297 528.75866,269.21769 530.90773,275.7535 533.39327,284.78643 534.98423,293.53933 535.86742,303.41924 536.22965,315.83319 537.08717,339.31412 540.09051,350.6332 546.93928,351.97446 559.33309,345.52193 564.98945,342.16153 570.81196,338.86971 576.11538,336.02442 580.2145,334.00358 584.21994,332.0511 589.26777,329.39195 594.71187,326.37563 599.90611,323.35166 610.99068,317.61356 624.8167,312.03922 641.30696,306.65667 660.38424,301.49397 707.11485,289.70254 737.36728,281.39974 756.72237,274.92332 770.76093,268.61104 771.36454,268.90349 771.85885,270.28876 772.19286,272.54274 772.31553,275.44134 771.64397,280.08774 769.67288,286.53769 766.46767,294.60773 762.09373,304.1144 757.61551,313.84035 752.97876,324.76334 748.73061,335.54657 745.41823,344.85324 739.89482,361.08684 733.7065,377.99475 726.42549,396.70832 717.62403,418.35893 713.11082,428.584 708.80317,436.71716 704.31232,443.41363 699.24948,449.32865 695.42653,453.44283 692.29587,457.01569 690.18057,459.66411 689.40367,461.00495 689.70277,461.80222 690.51715,462.97046 691.72242,464.35263 693.1942,465.79168 695.64479,467.34522 699.11208,468.41139 703.76602,469.02533 709.77661,469.22217 714.74345,469.31207 718.81087,469.55685 721.55913,469.91912 722.56849,470.3615 721.30109,474.11597 717.99895,479.8888 713.41217,486.50232 708.29083,492.77885 696.78593,506.42726 684.95407,521.74687 675.3412,535.30948 670.49329,543.68686 669.66985,546.67118 669.41713,549.32348 669.73628,551.73163 670.62844,553.9835 674.70635,558.68104 681.66372,564.1082 689.98153,569.21729 698.14073,572.96062 701.21152,574.24105 703.8797,575.68954 705.85904,577.12824 706.86329,578.37934 706.2704,580.86293 703.72644,583.83477 700.29023,586.32736 697.02059,587.37322 694.40728,588.19443 688.64043,590.4304 680.57216,593.73966 671.05461,597.78076 642.65603,610.52875 625.49159,619.82213 617.04107,627.31205 614.78427,634.64968 616.59733,641.04392 621.36544,649.139 628.08196,657.49295 635.74029,664.66384 638.20935,666.8612 639.98222,668.97755 640.91134,670.79791 640.84912,672.10727 628.20017,674.06287 600.78941,673.79929 568.49654,671.70647 541.20126,668.17434 516.79794,663.34061 499.57863,659.49128 487.33288,656.08174 477.85023,652.56739 470.761,649.83853 461.32218,646.59161 450.76537,643.23337 440.32216,640.17058 429.99865,637.12728 419.76891,633.82211 410.81413,630.65374 404.31553,628.02086 399.33681,625.91964 394.51879,624.1989 390.41116,623.03622 387.56356,622.60919 384.83735,622.90314 383.3594,624.41115 382.75063,628.07245 382.63195,634.82628 383.28043,650.97474 385.0821,671.02429 387.82136,692.98047 391.28258,714.84886 395.07053,737.43821 396.67901,751.37291 396.24848,759.25438 393.91939,763.68406 389.89336,766.01204 384.01907,767.62627 378.71842,768.07882 376.41334,766.92177 376.41372,766.92181 376.4141,766.92184 376.41447,766.92188 376.41485,766.92192\" style=\"fill:none;stroke:#000000;stroke-width:2.93138409;stroke-opacity:1\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/kdbush/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KDBush; });
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ "./node_modules/kdbush/src/sort.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "./node_modules/kdbush/src/range.js");
/* harmony import */ var _within__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./within */ "./node_modules/kdbush/src/within.js");





const defaultGetX = p => p[0];
const defaultGetY = p => p[1];

class KDBush {
    constructor(points, getX = defaultGetX, getY = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
        this.nodeSize = nodeSize;
        this.points = points;

        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;

        const ids = this.ids = new IndexArrayType(points.length);
        const coords = this.coords = new ArrayType(points.length * 2);

        for (let i = 0; i < points.length; i++) {
            ids[i] = i;
            coords[2 * i] = getX(points[i]);
            coords[2 * i + 1] = getY(points[i]);
        }

        Object(_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(ids, coords, nodeSize, 0, ids.length - 1, 0);
    }

    range(minX, minY, maxX, maxY) {
        return Object(_range__WEBPACK_IMPORTED_MODULE_1__["default"])(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    }

    within(x, y, r) {
        return Object(_within__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ids, this.coords, x, y, r, this.nodeSize);
    }
}


/***/ }),

/***/ "./node_modules/kdbush/src/range.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/range.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    let x, y;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}


/***/ }),

/***/ "./node_modules/kdbush/src/sort.js":
/*!*****************************************!*\
  !*** ./node_modules/kdbush/src/sort.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortKD; });

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1;

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        const t = coords[2 * k + inc];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


/***/ }),

/***/ "./node_modules/kdbush/src/within.js":
/*!*******************************************!*\
  !*** ./node_modules/kdbush/src/within.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });

function within(ids, coords, qx, qy, r, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r2 = r * r;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        const x = coords[2 * m];
        const y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/point-in-polygon/index.js":
/*!************************************************!*\
  !*** ./node_modules/point-in-polygon/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


/***/ }),

/***/ "./node_modules/svg-pathdata/lib/SVGPathData.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/svg-pathdata/lib/SVGPathData.module.js ***!
  \*************************************************************/
/*! exports provided: SVGPathData, COMMAND_ARG_COUNTS, encodeSVGPath, SVGPathDataParser, SVGPathDataTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathData", function() { return SVGPathData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_ARG_COUNTS", function() { return COMMAND_ARG_COUNTS$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSVGPath", function() { return encodeSVGPath$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataParser", function() { return SVGPathDataParser$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataTransformer", function() { return SVGPathDataTransformer; });
var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var r in a)a.hasOwnProperty(r)&&(t[r]=a[r])};function __extends(t,a){function r(){this.constructor=t}extendStatics(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}function rotate(t,a){var r=t[0],e=t[1];return[r*Math.cos(a)-e*Math.sin(a),r*Math.sin(a)+e*Math.cos(a)]}function assertNumbers(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];for(var r=0;r<t.length;r++)if("number"!=typeof t[r])throw new Error("assertNumbers arguments["+r+"] is not a number. "+typeof t[r]+" == typeof "+t[r]);return!0}var PI=Math.PI;function annotateArcCommand(t,a,r){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var e=t.rX,n=t.rY,i=t.x,o=t.y;e=Math.abs(t.rX),n=Math.abs(t.rY);var s=rotate([(a-i)/2,(r-o)/2],-t.xRot/180*PI),h=s[0],u=s[1],c=Math.pow(h,2)/Math.pow(e,2)+Math.pow(u,2)/Math.pow(n,2);1<c&&(e*=Math.sqrt(c),n*=Math.sqrt(c)),t.rX=e,t.rY=n;var m=Math.pow(e,2)*Math.pow(u,2)+Math.pow(n,2)*Math.pow(h,2),_=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(e,2)*Math.pow(n,2)-m)/m)),T=e*u/n*_,O=-n*h/e*_,p=rotate([T,O],t.xRot/180*PI);t.cX=p[0]+(a+i)/2,t.cY=p[1]+(r+o)/2,t.phi1=Math.atan2((u-O)/n,(h-T)/e),t.phi2=Math.atan2((-u-O)/n,(-h-T)/e),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*PI),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*PI),t.phi1*=180/PI,t.phi2*=180/PI}function intersectionUnitCircleLine(t,a,r){assertNumbers(t,a,r);var e=t*t+a*a-r*r;if(0>e)return[];if(0===e)return[[t*r/(t*t+a*a),a*r/(t*t+a*a)]];var n=Math.sqrt(e);return[[(t*r+a*n)/(t*t+a*a),(a*r-t*n)/(t*t+a*a)],[(t*r-a*n)/(t*t+a*a),(a*r+t*n)/(t*t+a*a)]]}var SVGPathDataTransformer,DEG=Math.PI/180;function lerp(t,a,r){return(1-r)*t+r*a}function arcAt(t,a,r,e){return t+Math.cos(e/180*PI)*a+Math.sin(e/180*PI)*r}function bezierRoot(t,a,r,e){var n=a-t,i=r-a,o=3*n+3*(e-r)-6*i,s=6*(i-n),h=3*n;return Math.abs(o)<1e-6?[-h/s]:pqFormula(s/o,h/o,1e-6)}function bezierAt(t,a,r,e,n){var i=1-n;return t*(i*i*i)+a*(3*i*i*n)+r*(3*i*n*n)+e*(n*n*n)}function pqFormula(t,a,r){void 0===r&&(r=1e-6);var e=t*t/4-a;if(e<-r)return[];if(e<=r)return[-t/2];var n=Math.sqrt(e);return[-t/2-n,-t/2+n]}function a2c(t,a,r){var e,n,i,o;t.cX||annotateArcCommand(t,a,r);for(var s=Math.min(t.phi1,t.phi2),h=Math.max(t.phi1,t.phi2)-s,u=Math.ceil(h/90),c=new Array(u),m=a,_=r,T=0;T<u;T++){var O=lerp(t.phi1,t.phi2,T/u),p=lerp(t.phi1,t.phi2,(T+1)/u),y=p-O,S=4/3*Math.tan(y*DEG/4),f=[Math.cos(O*DEG)-S*Math.sin(O*DEG),Math.sin(O*DEG)+S*Math.cos(O*DEG)],V=f[0],N=f[1],D=[Math.cos(p*DEG),Math.sin(p*DEG)],P=D[0],l=D[1],v=[P+S*Math.sin(p*DEG),l-S*Math.cos(p*DEG)],E=v[0],A=v[1];c[T]={relative:t.relative,type:SVGPathData.CURVE_TO};var d=function(a,r){var e=rotate([a*t.rX,r*t.rY],t.xRot),n=e[0],i=e[1];return[t.cX+n,t.cY+i]};e=d(V,N),c[T].x1=e[0],c[T].y1=e[1],n=d(E,A),c[T].x2=n[0],c[T].y2=n[1],i=d(P,l),c[T].x=i[0],c[T].y=i[1],t.relative&&(c[T].x1-=m,c[T].y1-=_,c[T].x2-=m,c[T].y2-=_,c[T].x-=m,c[T].y-=_),m=(o=[c[T].x,c[T].y])[0],_=o[1]}return c}!function(t){function a(){return n(function(t,a,r){return t.relative&&(void 0!==t.x1&&(t.x1+=a),void 0!==t.y1&&(t.y1+=r),void 0!==t.x2&&(t.x2+=a),void 0!==t.y2&&(t.y2+=r),void 0!==t.x&&(t.x+=a),void 0!==t.y&&(t.y+=r),t.relative=!1),t})}function r(){var t=NaN,a=NaN,r=NaN,e=NaN;return n(function(n,i,o){return n.type&SVGPathData.SMOOTH_CURVE_TO&&(n.type=SVGPathData.CURVE_TO,t=isNaN(t)?i:t,a=isNaN(a)?o:a,n.x1=n.relative?i-t:2*i-t,n.y1=n.relative?o-a:2*o-a),n.type&SVGPathData.CURVE_TO?(t=n.relative?i+n.x2:n.x2,a=n.relative?o+n.y2:n.y2):(t=NaN,a=NaN),n.type&SVGPathData.SMOOTH_QUAD_TO&&(n.type=SVGPathData.QUAD_TO,r=isNaN(r)?i:r,e=isNaN(e)?o:e,n.x1=n.relative?i-r:2*i-r,n.y1=n.relative?o-e:2*o-e),n.type&SVGPathData.QUAD_TO?(r=n.relative?i+n.x1:n.x1,e=n.relative?o+n.y1:n.y1):(r=NaN,e=NaN),n})}function e(){var t=NaN,a=NaN;return n(function(r,e,n){if(r.type&SVGPathData.SMOOTH_QUAD_TO&&(r.type=SVGPathData.QUAD_TO,t=isNaN(t)?e:t,a=isNaN(a)?n:a,r.x1=r.relative?e-t:2*e-t,r.y1=r.relative?n-a:2*n-a),r.type&SVGPathData.QUAD_TO){t=r.relative?e+r.x1:r.x1,a=r.relative?n+r.y1:r.y1;var i=r.x1,o=r.y1;r.type=SVGPathData.CURVE_TO,r.x1=((r.relative?0:e)+2*i)/3,r.y1=((r.relative?0:n)+2*o)/3,r.x2=(r.x+2*i)/3,r.y2=(r.y+2*o)/3}else t=NaN,a=NaN;return r})}function n(t){var a=0,r=0,e=NaN,n=NaN;return function(i){if(isNaN(e)&&!(i.type&SVGPathData.MOVE_TO))throw new Error("path must start with moveto");var o=t(i,a,r,e,n);return i.type&SVGPathData.CLOSE_PATH&&(a=e,r=n),void 0!==i.x&&(a=i.relative?a+i.x:i.x),void 0!==i.y&&(r=i.relative?r+i.y:i.y),i.type&SVGPathData.MOVE_TO&&(e=a,n=r),o}}function i(t,a,r,e,i,o){return assertNumbers(t,a,r,e,i,o),n(function(n,s,h,u){var c=n.x1,m=n.x2,_=n.relative&&!isNaN(u),T=void 0!==n.x?n.x:_?0:s,O=void 0!==n.y?n.y:_?0:h;function p(t){return t*t}n.type&SVGPathData.HORIZ_LINE_TO&&0!==a&&(n.type=SVGPathData.LINE_TO,n.y=n.relative?0:h),n.type&SVGPathData.VERT_LINE_TO&&0!==r&&(n.type=SVGPathData.LINE_TO,n.x=n.relative?0:s),void 0!==n.x&&(n.x=n.x*t+O*r+(_?0:i)),void 0!==n.y&&(n.y=T*a+n.y*e+(_?0:o)),void 0!==n.x1&&(n.x1=n.x1*t+n.y1*r+(_?0:i)),void 0!==n.y1&&(n.y1=c*a+n.y1*e+(_?0:o)),void 0!==n.x2&&(n.x2=n.x2*t+n.y2*r+(_?0:i)),void 0!==n.y2&&(n.y2=m*a+n.y2*e+(_?0:o));var y=t*e-a*r;if(void 0!==n.xRot&&(1!==t||0!==a||0!==r||1!==e))if(0===y)delete n.rX,delete n.rY,delete n.xRot,delete n.lArcFlag,delete n.sweepFlag,n.type=SVGPathData.LINE_TO;else{var S=n.xRot*Math.PI/180,f=Math.sin(S),V=Math.cos(S),N=1/p(n.rX),D=1/p(n.rY),P=p(V)*N+p(f)*D,l=2*f*V*(N-D),v=p(f)*N+p(V)*D,E=P*e*e-l*a*e+v*a*a,A=l*(t*e+a*r)-2*(P*r*e+v*t*a),d=P*r*r-l*t*r+v*t*t,G=(Math.atan2(A,E-d)+Math.PI)%Math.PI/2,C=Math.sin(G),x=Math.cos(G);n.rX=Math.abs(y)/Math.sqrt(E*p(x)+A*C*x+d*p(C)),n.rY=Math.abs(y)/Math.sqrt(E*p(C)-A*C*x+d*p(x)),n.xRot=180*G/Math.PI}return void 0!==n.sweepFlag&&0>y&&(n.sweepFlag=+!n.sweepFlag),n})}function o(){return function(t){var a={};for(var r in t)a[r]=t[r];return a}}t.ROUND=function(t){function a(a){return Math.round(a*t)/t}return void 0===t&&(t=1e13),assertNumbers(t),function(t){return void 0!==t.x1&&(t.x1=a(t.x1)),void 0!==t.y1&&(t.y1=a(t.y1)),void 0!==t.x2&&(t.x2=a(t.x2)),void 0!==t.y2&&(t.y2=a(t.y2)),void 0!==t.x&&(t.x=a(t.x)),void 0!==t.y&&(t.y=a(t.y)),t}},t.TO_ABS=a,t.TO_REL=function(){return n(function(t,a,r){return t.relative||(void 0!==t.x1&&(t.x1-=a),void 0!==t.y1&&(t.y1-=r),void 0!==t.x2&&(t.x2-=a),void 0!==t.y2&&(t.y2-=r),void 0!==t.x&&(t.x-=a),void 0!==t.y&&(t.y-=r),t.relative=!0),t})},t.NORMALIZE_HVZ=function(t,a,r){return void 0===t&&(t=!0),void 0===a&&(a=!0),void 0===r&&(r=!0),n(function(e,n,i,o,s){if(isNaN(o)&&!(e.type&SVGPathData.MOVE_TO))throw new Error("path must start with moveto");return a&&e.type&SVGPathData.HORIZ_LINE_TO&&(e.type=SVGPathData.LINE_TO,e.y=e.relative?0:i),r&&e.type&SVGPathData.VERT_LINE_TO&&(e.type=SVGPathData.LINE_TO,e.x=e.relative?0:n),t&&e.type&SVGPathData.CLOSE_PATH&&(e.type=SVGPathData.LINE_TO,e.x=e.relative?o-n:o,e.y=e.relative?s-i:s),e.type&SVGPathData.ARC&&(0===e.rX||0===e.rY)&&(e.type=SVGPathData.LINE_TO,delete e.rX,delete e.rY,delete e.xRot,delete e.lArcFlag,delete e.sweepFlag),e})},t.NORMALIZE_ST=r,t.QT_TO_C=e,t.INFO=n,t.SANITIZE=function(t){void 0===t&&(t=0),assertNumbers(t);var a=NaN,r=NaN,e=NaN,i=NaN;return n(function(n,o,s,h,u){var c=Math.abs,m=!1,_=0,T=0;if(n.type&SVGPathData.SMOOTH_CURVE_TO&&(_=isNaN(a)?0:o-a,T=isNaN(r)?0:s-r),n.type&(SVGPathData.CURVE_TO|SVGPathData.SMOOTH_CURVE_TO)?(a=n.relative?o+n.x2:n.x2,r=n.relative?s+n.y2:n.y2):(a=NaN,r=NaN),n.type&SVGPathData.SMOOTH_QUAD_TO?(e=isNaN(e)?o:2*o-e,i=isNaN(i)?s:2*s-i):n.type&SVGPathData.QUAD_TO?(e=n.relative?o+n.x1:n.x1,i=n.relative?s+n.y1:n.y2):(e=NaN,i=NaN),n.type&SVGPathData.LINE_COMMANDS||n.type&SVGPathData.ARC&&(0===n.rX||0===n.rY||!n.lArcFlag)||n.type&SVGPathData.CURVE_TO||n.type&SVGPathData.SMOOTH_CURVE_TO||n.type&SVGPathData.QUAD_TO||n.type&SVGPathData.SMOOTH_QUAD_TO){var O=void 0===n.x?0:n.relative?n.x:n.x-o,p=void 0===n.y?0:n.relative?n.y:n.y-s;_=isNaN(e)?void 0===n.x1?_:n.relative?n.x:n.x1-o:e-o,T=isNaN(i)?void 0===n.y1?T:n.relative?n.y:n.y1-s:i-s;var y=void 0===n.x2?0:n.relative?n.x:n.x2-o,S=void 0===n.y2?0:n.relative?n.y:n.y2-s;c(O)<=t&&c(p)<=t&&c(_)<=t&&c(T)<=t&&c(y)<=t&&c(S)<=t&&(m=!0)}return n.type&SVGPathData.CLOSE_PATH&&c(o-h)<=t&&c(s-u)<=t&&(m=!0),m?[]:n})},t.MATRIX=i,t.ROTATE=function(t,a,r){void 0===a&&(a=0),void 0===r&&(r=0),assertNumbers(t,a,r);var e=Math.sin(t),n=Math.cos(t);return i(n,e,-e,n,a-a*n+r*e,r-a*e-r*n)},t.TRANSLATE=function(t,a){return void 0===a&&(a=0),assertNumbers(t,a),i(1,0,0,1,t,a)},t.SCALE=function(t,a){return void 0===a&&(a=t),assertNumbers(t,a),i(t,0,0,a,0,0)},t.SKEW_X=function(t){return assertNumbers(t),i(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return assertNumbers(t),i(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),assertNumbers(t),i(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),assertNumbers(t),i(1,0,0,-1,0,t)},t.A_TO_C=function(){return n(function(t,a,r){return SVGPathData.ARC===t.type?a2c(t,t.relative?0:a,t.relative?0:r):t})},t.ANNOTATE_ARCS=function(){return n(function(t,a,r){return t.relative&&(a=0,r=0),SVGPathData.ARC===t.type&&annotateArcCommand(t,a,r),t})},t.CLONE=o,t.CALCULATE_BOUNDS=function(){var t=function(t){var a={};for(var r in t)a[r]=t[r];return a},i=a(),o=e(),s=r(),h=n(function(a,r,e){var n=s(o(i(t(a))));function u(t){t>h.maxX&&(h.maxX=t),t<h.minX&&(h.minX=t)}function c(t){t>h.maxY&&(h.maxY=t),t<h.minY&&(h.minY=t)}if(n.type&SVGPathData.DRAWING_COMMANDS&&(u(r),c(e)),n.type&SVGPathData.HORIZ_LINE_TO&&u(n.x),n.type&SVGPathData.VERT_LINE_TO&&c(n.y),n.type&SVGPathData.LINE_TO&&(u(n.x),c(n.y)),n.type&SVGPathData.CURVE_TO){u(n.x),c(n.y);for(var m=0,_=bezierRoot(r,n.x1,n.x2,n.x);m<_.length;m++)0<(G=_[m])&&1>G&&u(bezierAt(r,n.x1,n.x2,n.x,G));for(var T=0,O=bezierRoot(e,n.y1,n.y2,n.y);T<O.length;T++)0<(G=O[T])&&1>G&&c(bezierAt(e,n.y1,n.y2,n.y,G))}if(n.type&SVGPathData.ARC){u(n.x),c(n.y),annotateArcCommand(n,r,e);for(var p=n.xRot/180*Math.PI,y=Math.cos(p)*n.rX,S=Math.sin(p)*n.rX,f=-Math.sin(p)*n.rY,V=Math.cos(p)*n.rY,N=n.phi1<n.phi2?[n.phi1,n.phi2]:-180>n.phi2?[n.phi2+360,n.phi1+360]:[n.phi2,n.phi1],D=N[0],P=N[1],l=function(t){var a=t[0],r=t[1],e=180*Math.atan2(r,a)/Math.PI;return e<D?e+360:e},v=0,E=intersectionUnitCircleLine(f,-y,0).map(l);v<E.length;v++)(G=E[v])>D&&G<P&&u(arcAt(n.cX,y,f,G));for(var A=0,d=intersectionUnitCircleLine(V,-S,0).map(l);A<d.length;A++){var G;(G=d[A])>D&&G<P&&c(arcAt(n.cY,S,V,G))}}return a});return h.minX=1/0,h.maxX=-1/0,h.minY=1/0,h.maxY=-1/0,h}}(SVGPathDataTransformer||(SVGPathDataTransformer={}));var _a,_a$1,TransformableSVG=function(){function t(){}return t.prototype.round=function(t){return this.transform(SVGPathDataTransformer.ROUND(t))},t.prototype.toAbs=function(){return this.transform(SVGPathDataTransformer.TO_ABS())},t.prototype.toRel=function(){return this.transform(SVGPathDataTransformer.TO_REL())},t.prototype.normalizeHVZ=function(t,a,r){return this.transform(SVGPathDataTransformer.NORMALIZE_HVZ(t,a,r))},t.prototype.normalizeST=function(){return this.transform(SVGPathDataTransformer.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(SVGPathDataTransformer.QT_TO_C())},t.prototype.aToC=function(){return this.transform(SVGPathDataTransformer.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(SVGPathDataTransformer.SANITIZE(t))},t.prototype.translate=function(t,a){return this.transform(SVGPathDataTransformer.TRANSLATE(t,a))},t.prototype.scale=function(t,a){return this.transform(SVGPathDataTransformer.SCALE(t,a))},t.prototype.rotate=function(t,a,r){return this.transform(SVGPathDataTransformer.ROTATE(t,a,r))},t.prototype.matrix=function(t,a,r,e,n,i){return this.transform(SVGPathDataTransformer.MATRIX(t,a,r,e,n,i))},t.prototype.skewX=function(t){return this.transform(SVGPathDataTransformer.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(SVGPathDataTransformer.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(SVGPathDataTransformer.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(SVGPathDataTransformer.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(SVGPathDataTransformer.ANNOTATE_ARCS())},t}(),isWhiteSpace=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},isDigit=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},SVGPathDataParser$$1=function(t){function a(){var a=t.call(this)||this;return a.curNumber="",a.curCommandType=-1,a.curCommandRelative=!1,a.canParseCommandOrComma=!0,a.curNumberHasExp=!1,a.curNumberHasExpDigits=!1,a.curNumberHasDecimal=!1,a.curArgs=[],a}return __extends(a,t),a.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},a.prototype.parse=function(t,a){var r=this;void 0===a&&(a=[]);for(var e=function(t){a.push(t),r.curArgs.length=0,r.canParseCommandOrComma=!0},n=0;n<t.length;n++){var i=t[n];if(isDigit(i))this.curNumber+=i,this.curNumberHasExpDigits=this.curNumberHasExp;else if("e"!==i&&"E"!==i)if("-"!==i&&"+"!==i||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==i||this.curNumberHasExp||this.curNumberHasDecimal){if(this.curNumber&&-1!==this.curCommandType){var o=Number(this.curNumber);if(isNaN(o))throw new SyntaxError("Invalid number ending at "+n);if(this.curCommandType===SVGPathData.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>o)throw new SyntaxError('Expected positive number, got "'+o+'" at index "'+n+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+n+'"');this.curArgs.push(o),this.curArgs.length===COMMAND_ARG_COUNTS[this.curCommandType]&&(SVGPathData.HORIZ_LINE_TO===this.curCommandType?e({type:SVGPathData.HORIZ_LINE_TO,relative:this.curCommandRelative,x:o}):SVGPathData.VERT_LINE_TO===this.curCommandType?e({type:SVGPathData.VERT_LINE_TO,relative:this.curCommandRelative,y:o}):this.curCommandType===SVGPathData.MOVE_TO||this.curCommandType===SVGPathData.LINE_TO||this.curCommandType===SVGPathData.SMOOTH_QUAD_TO?(e({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),SVGPathData.MOVE_TO===this.curCommandType&&(this.curCommandType=SVGPathData.LINE_TO)):this.curCommandType===SVGPathData.CURVE_TO?e({type:SVGPathData.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===SVGPathData.SMOOTH_CURVE_TO?e({type:SVGPathData.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===SVGPathData.QUAD_TO?e({type:SVGPathData.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===SVGPathData.ARC&&e({type:SVGPathData.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!isWhiteSpace(i))if(","===i&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==i&&"-"!==i&&"."!==i){if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+n+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+i+'" at index '+n+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==i&&"Z"!==i)if("h"===i||"H"===i)this.curCommandType=SVGPathData.HORIZ_LINE_TO,this.curCommandRelative="h"===i;else if("v"===i||"V"===i)this.curCommandType=SVGPathData.VERT_LINE_TO,this.curCommandRelative="v"===i;else if("m"===i||"M"===i)this.curCommandType=SVGPathData.MOVE_TO,this.curCommandRelative="m"===i;else if("l"===i||"L"===i)this.curCommandType=SVGPathData.LINE_TO,this.curCommandRelative="l"===i;else if("c"===i||"C"===i)this.curCommandType=SVGPathData.CURVE_TO,this.curCommandRelative="c"===i;else if("s"===i||"S"===i)this.curCommandType=SVGPathData.SMOOTH_CURVE_TO,this.curCommandRelative="s"===i;else if("q"===i||"Q"===i)this.curCommandType=SVGPathData.QUAD_TO,this.curCommandRelative="q"===i;else if("t"===i||"T"===i)this.curCommandType=SVGPathData.SMOOTH_QUAD_TO,this.curCommandRelative="t"===i;else{if("a"!==i&&"A"!==i)throw new SyntaxError('Unexpected character "'+i+'" at index '+n+".");this.curCommandType=SVGPathData.ARC,this.curCommandRelative="a"===i}else a.push({type:SVGPathData.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=i,this.curNumberHasDecimal="."===i}else this.curNumber+=i,this.curNumberHasDecimal=!0;else this.curNumber+=i;else this.curNumber+=i,this.curNumberHasExp=!0}return a},a.prototype.transform=function(t){return Object.create(this,{parse:{value:function(a,r){void 0===r&&(r=[]);for(var e=0,n=Object.getPrototypeOf(this).parse.call(this,a);e<n.length;e++){var i=n[e],o=t(i);Array.isArray(o)?r.push.apply(r,o):r.push(o)}return r}}})},a}(TransformableSVG),SVGPathData=function(t){function a(r){var e=t.call(this)||this;return e.commands="string"==typeof r?a.parse(r):r,e}return __extends(a,t),a.prototype.encode=function(){return a.encode(this.commands)},a.prototype.getBounds=function(){var t=SVGPathDataTransformer.CALCULATE_BOUNDS();return this.transform(t),t},a.prototype.transform=function(t){for(var a=[],r=0,e=this.commands;r<e.length;r++){var n=t(e[r]);Array.isArray(n)?a.push.apply(a,n):a.push(n)}return this.commands=a,this},a.encode=function(t){return encodeSVGPath$$1(t)},a.parse=function(t){var a=new SVGPathDataParser$$1,r=[];return a.parse(t,r),a.finish(r),r},a.CLOSE_PATH=1,a.MOVE_TO=2,a.HORIZ_LINE_TO=4,a.VERT_LINE_TO=8,a.LINE_TO=16,a.CURVE_TO=32,a.SMOOTH_CURVE_TO=64,a.QUAD_TO=128,a.SMOOTH_QUAD_TO=256,a.ARC=512,a.LINE_COMMANDS=a.LINE_TO|a.HORIZ_LINE_TO|a.VERT_LINE_TO,a.DRAWING_COMMANDS=a.HORIZ_LINE_TO|a.VERT_LINE_TO|a.LINE_TO|a.CURVE_TO|a.SMOOTH_CURVE_TO|a.QUAD_TO|a.SMOOTH_QUAD_TO|a.ARC,a}(TransformableSVG),COMMAND_ARG_COUNTS=((_a={})[SVGPathData.MOVE_TO]=2,_a[SVGPathData.LINE_TO]=2,_a[SVGPathData.HORIZ_LINE_TO]=1,_a[SVGPathData.VERT_LINE_TO]=1,_a[SVGPathData.CLOSE_PATH]=0,_a[SVGPathData.QUAD_TO]=4,_a[SVGPathData.SMOOTH_QUAD_TO]=2,_a[SVGPathData.CURVE_TO]=6,_a[SVGPathData.SMOOTH_CURVE_TO]=4,_a[SVGPathData.ARC]=7,_a),WSP=" ";function encodeSVGPath$$1(t){var a="";Array.isArray(t)||(t=[t]);for(var r=0;r<t.length;r++){var e=t[r];if(e.type===SVGPathData.CLOSE_PATH)a+="z";else if(e.type===SVGPathData.HORIZ_LINE_TO)a+=(e.relative?"h":"H")+e.x;else if(e.type===SVGPathData.VERT_LINE_TO)a+=(e.relative?"v":"V")+e.y;else if(e.type===SVGPathData.MOVE_TO)a+=(e.relative?"m":"M")+e.x+WSP+e.y;else if(e.type===SVGPathData.LINE_TO)a+=(e.relative?"l":"L")+e.x+WSP+e.y;else if(e.type===SVGPathData.CURVE_TO)a+=(e.relative?"c":"C")+e.x1+WSP+e.y1+WSP+e.x2+WSP+e.y2+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.SMOOTH_CURVE_TO)a+=(e.relative?"s":"S")+e.x2+WSP+e.y2+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.QUAD_TO)a+=(e.relative?"q":"Q")+e.x1+WSP+e.y1+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.SMOOTH_QUAD_TO)a+=(e.relative?"t":"T")+e.x+WSP+e.y;else{if(e.type!==SVGPathData.ARC)throw new Error('Unexpected command type "'+e.type+'" at index '+r+".");a+=(e.relative?"a":"A")+e.rX+WSP+e.rY+WSP+e.xRot+WSP+ +e.lArcFlag+WSP+ +e.sweepFlag+WSP+e.x+WSP+e.y}}return a}var SVGPathData$1=function(t){function a(r){var e=t.call(this)||this;return e.commands="string"==typeof r?a.parse(r):r,e}return __extends(a,t),a.prototype.encode=function(){return a.encode(this.commands)},a.prototype.getBounds=function(){var t=SVGPathDataTransformer.CALCULATE_BOUNDS();return this.transform(t),t},a.prototype.transform=function(t){for(var a=[],r=0,e=this.commands;r<e.length;r++){var n=t(e[r]);Array.isArray(n)?a.push.apply(a,n):a.push(n)}return this.commands=a,this},a.encode=function(t){return encodeSVGPath$$1(t)},a.parse=function(t){var a=new SVGPathDataParser$$1,r=[];return a.parse(t,r),a.finish(r),r},a.CLOSE_PATH=1,a.MOVE_TO=2,a.HORIZ_LINE_TO=4,a.VERT_LINE_TO=8,a.LINE_TO=16,a.CURVE_TO=32,a.SMOOTH_CURVE_TO=64,a.QUAD_TO=128,a.SMOOTH_QUAD_TO=256,a.ARC=512,a.LINE_COMMANDS=a.LINE_TO|a.HORIZ_LINE_TO|a.VERT_LINE_TO,a.DRAWING_COMMANDS=a.HORIZ_LINE_TO|a.VERT_LINE_TO|a.LINE_TO|a.CURVE_TO|a.SMOOTH_CURVE_TO|a.QUAD_TO|a.SMOOTH_QUAD_TO|a.ARC,a}(TransformableSVG),COMMAND_ARG_COUNTS$1=((_a$1={})[SVGPathData$1.MOVE_TO]=2,_a$1[SVGPathData$1.LINE_TO]=2,_a$1[SVGPathData$1.HORIZ_LINE_TO]=1,_a$1[SVGPathData$1.VERT_LINE_TO]=1,_a$1[SVGPathData$1.CLOSE_PATH]=0,_a$1[SVGPathData$1.QUAD_TO]=4,_a$1[SVGPathData$1.SMOOTH_QUAD_TO]=2,_a$1[SVGPathData$1.CURVE_TO]=6,_a$1[SVGPathData$1.SMOOTH_CURVE_TO]=4,_a$1[SVGPathData$1.ARC]=7,_a$1);
//# sourceMappingURL=SVGPathData.module.js.map


/***/ }),

/***/ "./node_modules/svg-points/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-points/modules/index.js ***!
  \**************************************************/
/*! exports provided: toPath, toPoints, valid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPath */ "./node_modules/svg-points/modules/toPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _toPath__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _toPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPoints */ "./node_modules/svg-points/modules/toPoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPoints", function() { return _toPoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid */ "./node_modules/svg-points/modules/valid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valid", function() { return _valid__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./node_modules/svg-points/modules/toPath.js":
/*!***************************************************!*\
  !*** ./node_modules/svg-points/modules/toPath.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPoints */ "./node_modules/svg-points/modules/toPoints.js");


var pointsToD = function pointsToD(p) {
  var d = '';
  var i = 0;
  var firstPoint = void 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var point = _step.value;
      var _point$curve = point.curve,
          curve = _point$curve === undefined ? false : _point$curve,
          moveTo = point.moveTo,
          x = point.x,
          y = point.y;

      var isFirstPoint = i === 0 || moveTo;
      var isLastPoint = i === p.length - 1 || p[i + 1].moveTo;
      var prevPoint = i === 0 ? null : p[i - 1];

      if (isFirstPoint) {
        firstPoint = point;

        if (!isLastPoint) {
          d += 'M' + x + ',' + y;
        }
      } else if (curve) {
        switch (curve.type) {
          case 'arc':
            var _point$curve2 = point.curve,
                _point$curve2$largeAr = _point$curve2.largeArcFlag,
                largeArcFlag = _point$curve2$largeAr === undefined ? 0 : _point$curve2$largeAr,
                rx = _point$curve2.rx,
                ry = _point$curve2.ry,
                _point$curve2$sweepFl = _point$curve2.sweepFlag,
                sweepFlag = _point$curve2$sweepFl === undefined ? 0 : _point$curve2$sweepFl,
                _point$curve2$xAxisRo = _point$curve2.xAxisRotation,
                xAxisRotation = _point$curve2$xAxisRo === undefined ? 0 : _point$curve2$xAxisRo;

            d += 'A' + rx + ',' + ry + ',' + xAxisRotation + ',' + largeArcFlag + ',' + sweepFlag + ',' + x + ',' + y;
            break;
          case 'cubic':
            var _point$curve3 = point.curve,
                cx1 = _point$curve3.x1,
                cy1 = _point$curve3.y1,
                cx2 = _point$curve3.x2,
                cy2 = _point$curve3.y2;

            d += 'C' + cx1 + ',' + cy1 + ',' + cx2 + ',' + cy2 + ',' + x + ',' + y;
            break;
          case 'quadratic':
            var _point$curve4 = point.curve,
                qx1 = _point$curve4.x1,
                qy1 = _point$curve4.y1;

            d += 'Q' + qx1 + ',' + qy1 + ',' + x + ',' + y;
            break;
        }

        if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
          d += 'Z';
        }
      } else if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
        d += 'Z';
      } else if (x !== prevPoint.x && y !== prevPoint.y) {
        d += 'L' + x + ',' + y;
      } else if (x !== prevPoint.x) {
        d += 'H' + x;
      } else if (y !== prevPoint.y) {
        d += 'V' + y;
      }

      i++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return d;
};

var toPath = function toPath(s) {
  var isPoints = Array.isArray(s);
  var isGroup = isPoints ? Array.isArray(s[0]) : s.type === 'g';
  var points = isPoints ? s : isGroup ? s.shapes.map(function (shp) {
    return Object(_toPoints__WEBPACK_IMPORTED_MODULE_0__["default"])(shp);
  }) : Object(_toPoints__WEBPACK_IMPORTED_MODULE_0__["default"])(s);

  if (isGroup) {
    return points.map(function (p) {
      return pointsToD(p);
    });
  }

  return pointsToD(points);
};

/* harmony default export */ __webpack_exports__["default"] = (toPath);

/***/ }),

/***/ "./node_modules/svg-points/modules/toPoints.js":
/*!*****************************************************!*\
  !*** ./node_modules/svg-points/modules/toPoints.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toPoints = function toPoints(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ['type']);

  switch (type) {
    case 'circle':
      return getPointsFromCircle(props);
    case 'ellipse':
      return getPointsFromEllipse(props);
    case 'line':
      return getPointsFromLine(props);
    case 'path':
      return getPointsFromPath(props);
    case 'polygon':
      return getPointsFromPolygon(props);
    case 'polyline':
      return getPointsFromPolyline(props);
    case 'rect':
      return getPointsFromRect(props);
    case 'g':
      return getPointsFromG(props);
    default:
      throw new Error('Not a valid shape type');
  }
};

var getPointsFromCircle = function getPointsFromCircle(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      r = _ref2.r;

  return [{ x: cx, y: cy - r, moveTo: true }, { x: cx, y: cy + r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }, { x: cx, y: cy - r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }];
};

var getPointsFromEllipse = function getPointsFromEllipse(_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      rx = _ref3.rx,
      ry = _ref3.ry;

  return [{ x: cx, y: cy - ry, moveTo: true }, { x: cx, y: cy + ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }, { x: cx, y: cy - ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }];
};

var getPointsFromLine = function getPointsFromLine(_ref4) {
  var x1 = _ref4.x1,
      x2 = _ref4.x2,
      y1 = _ref4.y1,
      y2 = _ref4.y2;

  return [{ x: x1, y: y1, moveTo: true }, { x: x2, y: y2 }];
};

var validCommands = /[MmLlHhVvCcSsQqTtAaZz]/g;

var commandLengths = {
  A: 7,
  C: 6,
  H: 1,
  L: 2,
  M: 2,
  Q: 4,
  S: 4,
  T: 2,
  V: 1,
  Z: 0
};

var relativeCommands = ['a', 'c', 'h', 'l', 'm', 'q', 's', 't', 'v'];

var isRelative = function isRelative(command) {
  return relativeCommands.indexOf(command) !== -1;
};

var optionalArcKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag'];

var getCommands = function getCommands(d) {
  return d.match(validCommands);
};

var getParams = function getParams(d) {
  return d.split(validCommands).map(function (v) {
    return v.replace(/[0-9]+-/g, function (m) {
      return m.slice(0, -1) + ' -';
    });
  }).map(function (v) {
    return v.replace(/\.[0-9]+/g, function (m) {
      return m + ' ';
    });
  }).map(function (v) {
    return v.trim();
  }).filter(function (v) {
    return v.length > 0;
  }).map(function (v) {
    return v.split(/[ ,]+/).map(parseFloat).filter(function (n) {
      return !isNaN(n);
    });
  });
};

var getPointsFromPath = function getPointsFromPath(_ref5) {
  var d = _ref5.d;

  var commands = getCommands(d);
  var params = getParams(d);

  var points = [];

  var moveTo = void 0;

  for (var i = 0, l = commands.length; i < l; i++) {
    var command = commands[i];
    var upperCaseCommand = command.toUpperCase();
    var commandLength = commandLengths[upperCaseCommand];
    var relative = isRelative(command);

    if (commandLength > 0) {
      var commandParams = params.shift();
      var iterations = commandParams.length / commandLength;

      for (var j = 0; j < iterations; j++) {
        var prevPoint = points[points.length - 1] || { x: 0, y: 0 };

        switch (upperCaseCommand) {
          case 'M':
            var x = (relative ? prevPoint.x : 0) + commandParams.shift();
            var y = (relative ? prevPoint.y : 0) + commandParams.shift();

            if (j === 0) {
              moveTo = { x: x, y: y };
              points.push({ x: x, y: y, moveTo: true });
            } else {
              points.push({ x: x, y: y });
            }

            break;

          case 'L':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'H':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: prevPoint.y
            });

            break;

          case 'V':
            points.push({
              x: prevPoint.x,
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'A':
            points.push({
              curve: {
                type: 'arc',
                rx: commandParams.shift(),
                ry: commandParams.shift(),
                xAxisRotation: commandParams.shift(),
                largeArcFlag: commandParams.shift(),
                sweepFlag: commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = optionalArcKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var k = _step.value;

                if (points[points.length - 1]['curve'][k] === 0) {
                  delete points[points.length - 1]['curve'][k];
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            break;

          case 'C':
            points.push({
              curve: {
                type: 'cubic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift(),
                x2: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y2: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'S':
            var sx2 = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy2 = (relative ? prevPoint.y : 0) + commandParams.shift();
            var sx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy = (relative ? prevPoint.y : 0) + commandParams.shift();

            var diff = {};

            var sx1 = void 0;
            var sy1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'cubic') {
              diff.x = Math.abs(prevPoint.x - prevPoint.curve.x2);
              diff.y = Math.abs(prevPoint.y - prevPoint.curve.y2);
              sx1 = prevPoint.x < prevPoint.curve.x2 ? prevPoint.x - diff.x : prevPoint.x + diff.x;
              sy1 = prevPoint.y < prevPoint.curve.y2 ? prevPoint.y - diff.y : prevPoint.y + diff.y;
            } else {
              diff.x = Math.abs(sx - sx2);
              diff.y = Math.abs(sy - sy2);
              sx1 = prevPoint.x;
              sy1 = prevPoint.y;
            }

            points.push({ curve: { type: 'cubic', x1: sx1, y1: sy1, x2: sx2, y2: sy2 }, x: sx, y: sy });

            break;

          case 'Q':
            points.push({
              curve: {
                type: 'quadratic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'T':
            var tx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var ty = (relative ? prevPoint.y : 0) + commandParams.shift();

            var tx1 = void 0;
            var ty1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'quadratic') {
              var _diff = {
                x: Math.abs(prevPoint.x - prevPoint.curve.x1),
                y: Math.abs(prevPoint.y - prevPoint.curve.y1)
              };

              tx1 = prevPoint.x < prevPoint.curve.x1 ? prevPoint.x - _diff.x : prevPoint.x + _diff.x;
              ty1 = prevPoint.y < prevPoint.curve.y1 ? prevPoint.y - _diff.y : prevPoint.y + _diff.y;
            } else {
              tx1 = prevPoint.x;
              ty1 = prevPoint.y;
            }

            points.push({ curve: { type: 'quadratic', x1: tx1, y1: ty1 }, x: tx, y: ty });

            break;
        }
      }
    } else {
      var _prevPoint = points[points.length - 1] || { x: 0, y: 0 };

      if (_prevPoint.x !== moveTo.x || _prevPoint.y !== moveTo.y) {
        points.push({ x: moveTo.x, y: moveTo.y });
      }
    }
  }

  return points;
};

var getPointsFromPolygon = function getPointsFromPolygon(_ref6) {
  var points = _ref6.points;

  return getPointsFromPoints({ closed: true, points: points });
};

var getPointsFromPolyline = function getPointsFromPolyline(_ref7) {
  var points = _ref7.points;

  return getPointsFromPoints({ closed: false, points: points });
};

var getPointsFromPoints = function getPointsFromPoints(_ref8) {
  var closed = _ref8.closed,
      points = _ref8.points;

  var numbers = points.split(/[\s,]+/).map(function (n) {
    return parseFloat(n);
  });

  var p = numbers.reduce(function (arr, point, i) {
    if (i % 2 === 0) {
      arr.push({ x: point });
    } else {
      arr[(i - 1) / 2].y = point;
    }

    return arr;
  }, []);

  if (closed) {
    p.push(_extends({}, p[0]));
  }

  p[0].moveTo = true;

  return p;
};

var getPointsFromRect = function getPointsFromRect(_ref9) {
  var height = _ref9.height,
      rx = _ref9.rx,
      ry = _ref9.ry,
      width = _ref9.width,
      x = _ref9.x,
      y = _ref9.y;

  if (rx || ry) {
    return getPointsFromRectWithCornerRadius({
      height: height,
      rx: rx || ry,
      ry: ry || rx,
      width: width,
      x: x,
      y: y
    });
  }

  return getPointsFromBasicRect({ height: height, width: width, x: x, y: y });
};

var getPointsFromBasicRect = function getPointsFromBasicRect(_ref10) {
  var height = _ref10.height,
      width = _ref10.width,
      x = _ref10.x,
      y = _ref10.y;

  return [{ x: x, y: y, moveTo: true }, { x: x + width, y: y }, { x: x + width, y: y + height }, { x: x, y: y + height }, { x: x, y: y }];
};

var getPointsFromRectWithCornerRadius = function getPointsFromRectWithCornerRadius(_ref11) {
  var height = _ref11.height,
      rx = _ref11.rx,
      ry = _ref11.ry,
      width = _ref11.width,
      x = _ref11.x,
      y = _ref11.y;

  var curve = { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 };

  return [{ x: x + rx, y: y, moveTo: true }, { x: x + width - rx, y: y }, { x: x + width, y: y + ry, curve: curve }, { x: x + width, y: y + height - ry }, { x: x + width - rx, y: y + height, curve: curve }, { x: x + rx, y: y + height }, { x: x, y: y + height - ry, curve: curve }, { x: x, y: y + ry }, { x: x + rx, y: y, curve: curve }];
};

var getPointsFromG = function getPointsFromG(_ref12) {
  var shapes = _ref12.shapes;
  return shapes.map(function (s) {
    return toPoints(s);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toPoints);

/***/ }),

/***/ "./node_modules/svg-points/modules/valid.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-points/modules/valid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getErrors = function getErrors(shape) {
  var rules = getRules(shape);
  var errors = [];

  rules.map(function (_ref) {
    var match = _ref.match,
        prop = _ref.prop,
        required = _ref.required,
        type = _ref.type;

    if (typeof shape[prop] === 'undefined') {
      if (required) {
        errors.push(prop + ' prop is required' + (prop === 'type' ? '' : ' on a ' + shape.type));
      }
    } else {
      if (typeof type !== 'undefined') {
        if (type === 'array') {
          if (!Array.isArray(shape[prop])) {
            errors.push(prop + ' prop must be of type array');
          }
        } else if (_typeof(shape[prop]) !== type) {
          // eslint-disable-line valid-typeof
          errors.push(prop + ' prop must be of type ' + type);
        }
      }

      if (Array.isArray(match)) {
        if (match.indexOf(shape[prop]) === -1) {
          errors.push(prop + ' prop must be one of ' + match.join(', '));
        }
      }
    }
  });

  if (shape.type === 'g' && Array.isArray(shape.shapes)) {
    var childErrors = shape.shapes.map(function (s) {
      return getErrors(s);
    });
    return [].concat.apply(errors, childErrors);
  }

  return errors;
};

var getRules = function getRules(shape) {
  var rules = [{
    match: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'g'],
    prop: 'type',
    required: true,
    type: 'string'
  }];

  switch (shape.type) {
    case 'circle':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'r', required: true, type: 'number' });
      break;

    case 'ellipse':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'rx', required: true, type: 'number' });
      rules.push({ prop: 'ry', required: true, type: 'number' });
      break;

    case 'line':
      rules.push({ prop: 'x1', required: true, type: 'number' });
      rules.push({ prop: 'x2', required: true, type: 'number' });
      rules.push({ prop: 'y1', required: true, type: 'number' });
      rules.push({ prop: 'y2', required: true, type: 'number' });
      break;

    case 'path':
      rules.push({ prop: 'd', required: true, type: 'string' });
      break;

    case 'polygon':
    case 'polyline':
      rules.push({ prop: 'points', required: true, type: 'string' });
      break;

    case 'rect':
      rules.push({ prop: 'height', required: true, type: 'number' });
      rules.push({ prop: 'rx', type: 'number' });
      rules.push({ prop: 'ry', type: 'number' });
      rules.push({ prop: 'width', required: true, type: 'number' });
      rules.push({ prop: 'x', required: true, type: 'number' });
      rules.push({ prop: 'y', required: true, type: 'number' });
      break;

    case 'g':
      rules.push({ prop: 'shapes', required: true, type: 'array' });
      break;
  }

  return rules;
};

var valid = function valid(shape) {
  var errors = getErrors(shape);

  return {
    errors: errors,
    valid: errors.length === 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (valid);

/***/ }),

/***/ "./node_modules/vec2/vec2.js":
/*!***********************************!*\
  !*** ./node_modules/vec2/vec2.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function inject(clean, precision, undef) {

  var isArray = function (a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  };

  var defined = function(a) {
    return a !== undef;
  };

  function Vec2(x, y) {
    if (!(this instanceof Vec2)) {
      return new Vec2(x, y);
    }

    if (isArray(x)) {
      y = x[1];
      x = x[0];
    } else if('object' === typeof x && x) {
      y = x.y;
      x = x.x;
    }

    this.x = Vec2.clean(x || 0);
    this.y = Vec2.clean(y || 0);
  }

  Vec2.prototype = {
    change : function(fn) {
      if (typeof fn === 'function') {
        if (this.observers) {
          this.observers.push(fn);
        } else {
          this.observers = [fn];
        }
      } else if (this.observers && this.observers.length) {
        for (var i=this.observers.length-1; i>=0; i--) {
          this.observers[i](this, fn);
        }
      }

      return this;
    },

    ignore : function(fn) {
      if (this.observers) {
        if (!fn) {
          this.observers = [];
        } else {
          var o = this.observers, l = o.length;
          while(l--) {
            o[l] === fn && o.splice(l, 1);
          }
        }
      }
      return this;
    },

    // set x and y
    set: function(x, y, notify) {
      if('number' != typeof x) {
        notify = y;
        y = x.y;
        x = x.x;
      }

      if(this.x === x && this.y === y) {
        return this;
      }

      var orig = null;
      if (notify !== false && this.observers && this.observers.length) {
        orig = this.clone();
      }

      this.x = Vec2.clean(x);
      this.y = Vec2.clean(y);

      if(notify !== false) {
        return this.change(orig);
      }
    },

    // reset x and y to zero
    zero : function() {
      return this.set(0, 0);
    },

    // return a new vector with the same component values
    // as this one
    clone : function() {
      return new (this.constructor)(this.x, this.y);
    },

    // negate the values of this vector
    negate : function(returnNew) {
      if (returnNew) {
        return new (this.constructor)(-this.x, -this.y);
      } else {
        return this.set(-this.x, -this.y);
      }
    },

    // Add the incoming `vec2` vector to this vector
    add : function(x, y, returnNew) {

      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x += this.x;
      y += this.y;


      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Subtract the incoming `vec2` from this vector
    subtract : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x = this.x - x;
      y = this.y - y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Multiply this vector by the incoming `vec2`
    multiply : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      x *= this.x;
      y *= this.y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        return new (this.constructor)(x, y);
      }
    },

    // Rotate this vector. Accepts a `Rotation` or angle in radians.
    //
    // Passing a truthy `inverse` will cause the rotation to
    // be reversed.
    //
    // If `returnNew` is truthy, a new
    // `Vec2` will be created with the values resulting from
    // the rotation. Otherwise the rotation will be applied
    // to this vector directly, and this vector will be returned.
    rotate : function(r, inverse, returnNew) {
      var
      x = this.x,
      y = this.y,
      cos = Math.cos(r),
      sin = Math.sin(r),
      rx, ry;

      inverse = (inverse) ? -1 : 1;

      rx = cos * x - (inverse * sin) * y;
      ry = (inverse * sin) * x + cos * y;

      if (returnNew) {
        return new (this.constructor)(rx, ry);
      } else {
        return this.set(rx, ry);
      }
    },

    // Calculate the length of this vector
    length : function() {
      var x = this.x, y = this.y;
      return Math.sqrt(x * x + y * y);
    },

    // Get the length squared. For performance, use this instead of `Vec2#length` (if possible).
    lengthSquared : function() {
      var x = this.x, y = this.y;
      return x*x+y*y;
    },

    // Return the distance betwen this `Vec2` and the incoming vec2 vector
    // and return a scalar
    distance : function(vec2) {
      var x = this.x - vec2.x;
      var y = this.y - vec2.y;
      return Math.sqrt(x*x + y*y);
    },

    // Given Array of Vec2, find closest to this Vec2.
    nearest : function(others) {
      var
      shortestDistance = Number.MAX_VALUE,
      nearest = null,
      currentDistance;

      for (var i = others.length - 1; i >= 0; i--) {
        currentDistance = this.distance(others[i]);
        if (currentDistance <= shortestDistance) {
          shortestDistance = currentDistance;
          nearest = others[i];
        }
      }

      return nearest;
    },

    // Convert this vector into a unit vector.
    // Returns the length.
    normalize : function(returnNew) {
      var length = this.length();

      // Collect a ratio to shrink the x and y coords
      var invertedLength = (length < Number.MIN_VALUE) ? 0 : 1/length;

      if (!returnNew) {
        // Convert the coords to be greater than zero
        // but smaller than or equal to 1.0
        return this.set(this.x * invertedLength, this.y * invertedLength);
      } else {
        return new (this.constructor)(this.x * invertedLength, this.y * invertedLength);
      }
    },

    // Determine if another `Vec2`'s components match this one's
    // also accepts 2 scalars
    equal : function(v, w) {
      if (typeof v != 'number') {
        if (isArray(v)) {
          w = v[1];
          v = v[0];
        } else {
          w = v.y;
          v = v.x;
        }
      }

      return (Vec2.clean(v) === this.x && Vec2.clean(w) === this.y);
    },

    // Return a new `Vec2` that contains the absolute value of
    // each of this vector's parts
    abs : function(returnNew) {
      var x = Math.abs(this.x), y = Math.abs(this.y);

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the smallest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    min : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx < vx ? tx : vx,
      y = ty < vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the largest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    max : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx > vx ? tx : vx,
      y = ty > vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Clamp values into a range.
    // If this vector's values are lower than the `low`'s
    // values, then raise them.  If they are higher than
    // `high`'s then lower them.
    //
    // Passing returnNew as true will cause a new Vec2 to be
    // returned.  Otherwise, this vector's values will be clamped
    clamp : function(low, high, returnNew) {
      var ret = this.min(high, true).max(low);
      if (returnNew) {
        return ret;
      } else {
        return this.set(ret.x, ret.y);
      }
    },

    // Perform linear interpolation between two vectors
    // amount is a decimal between 0 and 1
    lerp : function(vec, amount, returnNew) {
      return this.add(vec.subtract(this, true).multiply(amount), returnNew);
    },

    // Get the skew vector such that dot(skew_vec, other) == cross(vec, other)
    skew : function(returnNew) {
      if (!returnNew) {
        return this.set(-this.y, this.x)
      } else {
        return new (this.constructor)(-this.y, this.x);
      }
    },

    // calculate the dot product between
    // this vector and the incoming
    dot : function(b) {
      return Vec2.clean(this.x * b.x + b.y * this.y);
    },

    // calculate the perpendicular dot product between
    // this vector and the incoming
    perpDot : function(b) {
      return Vec2.clean(this.x * b.y - this.y * b.x);
    },

    // Determine the angle between two vec2s
    angleTo : function(vec) {
      return Math.atan2(this.perpDot(vec), this.dot(vec));
    },

    // Divide this vector's components by a scalar
    divide : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      if (x === 0 || y === 0) {
        throw new Error('division by zero')
      }

      if (isNaN(x) || isNaN(y)) {
        throw new Error('NaN detected');
      }

      if (returnNew) {
        return new (this.constructor)(this.x / x, this.y / y);
      }

      return this.set(this.x / x, this.y / y);
    },

    isPointOnLine : function(start, end) {
      return (start.y - this.y) * (start.x - end.x) ===
             (start.y - end.y) * (start.x - this.x);
    },

    toArray: function() {
      return [this.x, this.y];
    },

    fromArray: function(array) {
      return this.set(array[0], array[1]);
    },
    toJSON: function () {
      return {x: this.x, y: this.y};
    },
    toString: function() {
      return '(' + this.x + ', ' + this.y + ')';
    },
    constructor : Vec2
  };

  Vec2.fromArray = function(array, ctor) {
    return new (ctor || Vec2)(array[0], array[1]);
  };

  // Floating point stability
  Vec2.precision = precision || 8;
  var p = Math.pow(10, Vec2.precision);

  Vec2.clean = clean || function(val) {
    if (isNaN(val)) {
      throw new Error('NaN detected');
    }

    if (!isFinite(val)) {
      throw new Error('Infinity detected');
    }

    if(Math.round(val) === val) {
      return val;
    }

    return Math.round(val * p)/p;
  };

  Vec2.inject = inject;

  if(!clean) {
    Vec2.fast = inject(function (k) { return k; });

    // Expose, but also allow creating a fresh Vec2 subclass.
    if ( true && typeof module.exports == 'object') {
      module.exports = Vec2;
    } else {
      window.Vec2 = window.Vec2 || Vec2;
    }
  }
  return Vec2;
})();


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1ZlaW5Ob2RlLmpzIiwid2VicGFjazovLy8uL21hcmdpbmFsLWdyb3d0aC9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9tYXJnaW5hbC1ncm93dGgvc3ZnL2dyYXNzLWJsYWRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9tYXJnaW5hbC1ncm93dGgvc3ZnL2xlYWYuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhL2xpYi9TVkdQYXRoRGF0YS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUG9pbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZlYzIvdmVjMi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG9DQUFvQyxFQUFFLGlEQUFROztBQUU5QywrQkFBK0I7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QUVBO0FBQ0Esa0JBQWtCLGdEQUFnRDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEU7Ozs7Ozs7Ozs7O0FDOUdwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4ZEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6Im1hcmdpbmFsR3Jvd3RoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFyZ2luYWwtZ3Jvd3RoL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV4aW5Tb3VyY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAgIC8vIHZlYzIgb2YgdGhpcyBzb3VyY2UncyBwb3NpdGlvblxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTsgICAvLyByZWZlcmVuY2VzIHRvIG5vZGVzIHRoaXMgc291cmNlIGlzIGluZmx1ZW5jaW5nIGVhY2ggZnJhbWVcclxuICAgIHRoaXMuZnJlc2ggPSB0cnVlOyAgICAgICAgICAgIC8vIGZsYWcgdXNlZCB0byBwcmV2ZW50IHNvdXJjZXMgZnJvbSBiZWluZyByZW1vdmVkIGR1cmluZyBmaXJzdCBmcmFtZSBvZiBDbG9zZWQgdmVuYXRpb24gbW9kZVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdGlvblpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuS2lsbFpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF1eGluIHNvdXJjZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93U291cmNlcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMSwgMSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Tb3VyY2VDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBMaWdodCA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMCwwLDAsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC43KSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmsgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWFsaXN0aWMgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgLy8gVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwuMiknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoNjEsMTY2LDEyLDEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDI0MiwyNDIpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxyXG4gIC8vIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig2MSw4NSwxMzYpJyxcclxuICAvLyBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYig2MSw4NSwxMzYpJ1xyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDIxMCwgODEsIDk0KSdcclxufSIsImltcG9ydCB7IExpZ2h0LCBEYXJrLCBSZWFsaXN0aWMsIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDMwLCAgICAgICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiB0cnVlLCAgICAgLy8gdHVybnMgb24vb2ZmIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93U291cmNlczogZmFsc2UsICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAncydcclxuICBTaG93VmVpbnM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndidcclxuICBTaG93VmVpblRpcHM6IGZhbHNlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBEYXJrLFxyXG5cclxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXHJcbiAgVmVpblRoaWNrbmVzczogMS41LFxyXG4gIFZlaW5UaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXHJcbn0iLCJpbXBvcnQgeyBleHBvcnRTVkcgfSBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAgIC8vIFNwYWNlID0gcGF1c2UvdW5wYXVzZVxyXG4gICAgICBjYXNlICcgJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB2ID0gdG9nZ2xlIHZlaW4gdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd2JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBzID0gdG9nZ2xlIGF1eGluIHNvdXJjZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB2ZWluIHRpcCB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpblRpcHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGsgPSB0b2dnbGUga2lsbCB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVJbmZsdWVuY2VMaW5lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBib3VuZHMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gbyA9IHRvZ2dsZSBvYnN0YWNsZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9ic3RhY2xlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICBleHBvcnRTVkcobmV0d29yayk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBjID0gdG9nZ2xlIGF1eGluIGZsdXggY2FuYWxpemF0aW9uXHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQ2FuYWxpemF0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBwID0gdG9nZ2xlIG9wYWNpdHkgYmxlbmRpbmdcclxuICAgICAgY2FzZSAncCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPcGFjaXR5QmxlbmRpbmcoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vUGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuc291cmNlcyA9IFtdOyAgLy8gc291cmNlcyAoQXV4aW5Tb3VyY2VzKSBhdHRyYWN0IHZlaW4gbm9kZXNcclxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgLy8gbm9kZXMgKFZlaW5Ob2RlcykgYXJlIGNvbm5lY3RlZCB0byBmb3JtIHZlaW5zXHJcblxyXG4gICAgdGhpcy5ub2Rlc0luZGV4OyAgICAvLyBrZC1idXNoIHNwYXRpYWwgaW5kZXggZm9yIGFsbCBub2Rlc1xyXG5cclxuICAgIHRoaXMuYm91bmRzID0gW107ICAgICAvLyBhcnJheSBvZiBQYXRoIG9iamVjdHMgdGhhdCB2ZWlucyBjYW5ub3QgZ3JvdyBvdXRzaWRlIG9mXHJcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtdOyAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgdmVpbnMgbXVzdCBhdm9pZFxyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gU2tpcCBpdGVyYXRpb24gaWYgcGF1c2VkXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3NvY2lhdGUgYXV4aW4gc291cmNlcyB3aXRoIG5lYXJieSB2ZWluIG5vZGVzIHRvIGZpZ3VyZSBvdXQgd2hlcmUgZ3Jvd3RoIHNob3VsZCBvY2N1clxyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgb25seSBhc3NvY2lhdGUgdGhpcyBzb3VyY2Ugd2l0aCBpdHMgY2xvc2VzdCB2ZWluIG5vZGVcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGxldCBjbG9zZXN0Tm9kZSA9IHRoaXMuZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpKTtcclxuXHJcbiAgICAgICAgICBpZihjbG9zZXN0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsb3Nlc3ROb2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgICAgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMgPSBbY2xvc2VzdE5vZGVdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCBhc3NvY2lhdGUgdGhpcyBzb3VyY2Ugd2l0aCBhbGwgbm9kZXMgaW4gaXRzIHJlbGF0aXZlIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNhc2UgJ0Nsb3NlZCc6XHJcbiAgICAgICAgICBsZXQgbmVpZ2hib3Job29kTm9kZXMgPSB0aGlzLmdldFJlbGF0aXZlTmVpZ2hib3JOb2Rlcyhzb3VyY2UpO1xyXG4gICAgICAgICAgbGV0IG5vZGVzSW5LaWxsWm9uZSA9IHRoaXMuZ2V0Tm9kZXNJbktpbGxab25lKHNvdXJjZSk7XHJcblxyXG4gICAgICAgICAgLy8gRXhjbHVkZSBub2RlcyB0aGF0IGFyZSBpbiB0aGUgc291cmNlJ3Mga2lsbCB6b25lICh0aGVzZSBzaG91bGQgc3RvcCBncm93aW5nKVxyXG4gICAgICAgICAgbGV0IG5vZGVzVG9Hcm93ID0gbmVpZ2hib3Job29kTm9kZXMuZmlsdGVyKChuZWlnaGJvck5vZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFub2Rlc0luS2lsbFpvbmUuaW5jbHVkZXMobmVpZ2hib3JOb2RlKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gbmVpZ2hib3Job29kTm9kZXM7XHJcblxyXG4gICAgICAgICAgaWYobm9kZXNUb0dyb3cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzb3VyY2UuZnJlc2ggPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlc1RvR3Jvdykge1xyXG4gICAgICAgICAgICAgIG5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdyB0aGUgbmV0d29yayBieSBhZGRpbmcgbmV3IHZlaW4gbm9kZXMgb250byBhbnkgbm9kZXMgYmVpbmcgaW5mbHVlbmNlZCBieSBzb3VyY2VzXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSB0aGlzLmdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbm9kZS5pbmZsdWVuY2VkQnkubWFwKGlkID0+IHRoaXMuc291cmNlc1tpZF0pKTtcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBub2RlLmdldE5leHROb2RlKGF2ZXJhZ2VEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcm9vdCB2ZWlucyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZihib3VuZC5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3QgdmVpbnMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICAgICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTk9URTogZGlzYWJsaW5nIHRoaXMgY2hlY2sgbGV0cyB2ZWlucyBncm93IGFjcm9zcyBnYXBzIGluIGJvdW5kcyAtIGNvb2wgZWZmZWN0IVxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuXHJcbiAgICAgIC8vIFBlcmZvcm0gYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gICAgICBpZihub2RlLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGUucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGNoaWxkIHZlaW5zLCB1c2UgdGhlIHRoaWNrZXN0IG9mIHRoZW0gYWxsXHJcbiAgICAgICAgICBpZihjdXJyZW50Tm9kZS5wYXJlbnQudGhpY2tuZXNzIDwgY3VycmVudE5vZGUudGhpY2tuZXNzICsgLjA3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPSBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFueSBhdXhpbiBzb3VyY2VzIHRoYXQgaGF2ZSBiZWVuIHJlYWNoZWQgYnkgdGhlaXIgYXNzb2NpYXRlZCB2ZWluIG5vZGVzXHJcbiAgICBmb3IobGV0IFtzb3VyY2VJRCwgc291cmNlXSBvZiB0aGlzLnNvdXJjZXMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCByZW1vdmUgdGhlIHNvdXJjZSBhcyBzb29uIGFzIGFueSB2ZWluIG5vZGUgcmVhY2hlcyBpdFxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgaWYoc291cmNlLnJlYWNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIG9ubHkgd2hlbiBhbGwgYXNzb2NpYXRlZCB2ZWluIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxyXG4gICAgICAgIGNhc2UgJ0Nsb3NlZCc6XHJcbiAgICAgICAgICBpZihzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwICYmICFzb3VyY2UuZnJlc2gpIHtcclxuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgICAgICBpZihub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbikgPiB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYWxsTm9kZXNSZWFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihhbGxOb2Rlc1JlYWNoZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVidWlsZCBzcGF0aWFsIGluZGljZXNcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgIHRoaXMuZHJhd0JvdW5kcygpO1xyXG4gICAgdGhpcy5kcmF3T2JzdGFjbGVzKCk7XHJcbiAgICB0aGlzLmRyYXdTb3VyY2VzKCk7XHJcbiAgICB0aGlzLmRyYXdWZWlucygpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXdCb3VuZHMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBib3VuZC5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdPYnN0YWNsZXMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdWZWlucygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdTb3VyY2VzKCkge1xyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5kcmF3KCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmVzIGJldHdlZW4gZWFjaCBzb3VyY2UgYW5kIHRoZSBub2RlcyB0aGV5IGFyZSBpbmZsdWVuY2luZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzb3VyY2UucG9zaXRpb24ueCwgc291cmNlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuSW5mbHVlbmNlTGluZXNDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSkge1xyXG4gICAgbGV0IGZhaWw7XHJcblxyXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKTtcclxuICAgIGxldCByZWxhdGl2ZU5laWdoYm9ycyA9IFtdO1xyXG4gICAgbGV0IHNvdXJjZVRvUDAsIHNvdXJjZVRvUDEsIHAwVG9QMTtcclxuXHJcbiAgICAvLyBwMCBpcyBhIHJlbGF0aXZlIG5laWdoYm9yIG9mIGF1eGluUG9zIGlmZlxyXG4gICAgLy8gZm9yIGFueSBwb2ludCBwMSB0aGF0IGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIGlzIHAwLFxyXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcclxuICAgIGZvcihsZXQgcDAgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgZmFpbCA9IGZhbHNlO1xyXG4gICAgICBzb3VyY2VUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgIGZvcihsZXQgcDEgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgICBpZihwMCA9PT0gcDEpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291cmNlVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHNvdXJjZS5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZVRvUDEubGVuZ3RoKCkgPiBzb3VyY2VUb1AwLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAwVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHAwLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFmYWlsKSB7XHJcbiAgICAgICAgcmVsYXRpdmVOZWlnaGJvcnMucHVzaChwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVsYXRpdmVOZWlnaGJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbktpbGxab25lKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi54LFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3ROb2RlKHNvdXJjZSwgbmVhcmJ5Tm9kZXMpIHtcclxuICAgIGxldCBjbG9zZXN0Tm9kZSA9IG51bGwsXHJcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgc291cmNlLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb3Nlc3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXV4aW4gc291cmNlXHJcbiAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgbmVhcmJ5U291cmNlcykge1xyXG4gICAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChcclxuICAgICAgICBzb3VyY2UucG9zaXRpb24uc3VidHJhY3Qobm9kZS5wb3NpdGlvbiwgdHJ1ZSkubm9ybWFsaXplKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXV4aW4gc291cmNlcyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcclxuICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChuZXcgVmVjMihyYW5kb20oLS4xLCAuMSksIHJhbmRvbSgtLjEsIC4xKSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uZGl2aWRlKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGRWZWluTm9kZShub2RlKSB7XHJcbiAgICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcclxuICAgIGxldCBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcblxyXG4gICAgLy8gT25seSBhbGxvdyByb290IHZlaW5zIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgaWYodGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkICYmIHRoaXMuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxyXG4gICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoXHJcbiAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCB0aGlzLmJvdW5kcy5sZW5ndGggPT09IDApICYmXHJcbiAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPT09IDApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgdGhpcy5zb3VyY2VzID0gW107XHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFNwYXRpYWxJbmRpY2VzKCkge1xyXG4gICAgdGhpcy5ub2Rlc0luZGV4ID0gbmV3IEtEQnVzaCh0aGlzLm5vZGVzLCBwID0+IHAucG9zaXRpb24ueCwgcCA9PiBwLnBvc2l0aW9uLnkpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpbnMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWlucyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWlucztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5UaXBzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHM7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgbm9kZS5zZXR0aW5ncy5TaG93VmVpblRpcHMgPSAhbm9kZS5zZXR0aW5ncy5TaG93VmVpblRpcHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTb3VyY2VzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcyA9ICF0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dTb3VyY2VzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQXR0cmFjdGlvblpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVLaWxsWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUluZmx1ZW5jZUxpbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCb3VuZHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT2JzdGFjbGVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNhbmFsaXphdGlvbigpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uID0gIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uO1xyXG5cclxuICAgIGlmKCF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUudGhpY2tuZXNzID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmc7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgbm9kZS5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuXHJcbmxldCBpbnNpZGUgPSByZXF1aXJlKCdwb2ludC1pbi1wb2x5Z29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uLCB0eXBlLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBvbHlnb24gPSBwb2x5Z29uOyAgICAgLy8gYXJyYXkgb2YgYXJyYXlzIGNvbnRhaW5pbmcgY29vcmRpbmF0ZXMgZGVmaW5pbmcgYSBwb2x5Z29uIChbW3gwLHkwXSxbeDEseTFdLC4uLl0pXHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgICAgLy8gc3RyaW5nIGVpdGhlciAnQm91bmRzJyBvciAnT2JzdGFjbGUnXHJcblxyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBwb2x5Z29uOyAgLy8gUGF0aHMgYXJlIGluaXRpYWxpemVkIHdpdGhvdXQgYW55IHRyYW5zZm9ybWF0aW9ucyBieSBkZWZhdWx0XHJcbiAgICB0aGlzLm9yaWdpbiA9IHt4OjAsIHk6MH07ICAgICAgICAgICAvLyBvcmlnaW4gcG9pbnQgdXNlZCBmb3IgdHJhbnNsYXRpb25cclxuICAgIHRoaXMuc2NhbGUgPSAxOyAgICAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGxpY2F0aW9uIGZhY3RvciBmb3IgcG9seWdvbiBjb29yZGluYXRlc1xyXG4gICAgdGhpcy53aWR0aCA9IC0xOyAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGggb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5oZWlnaHQgPSAtMTsgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIHRyYW5zZm9ybWVkIHBvbHlnb24gLSB3aWxsIGJlIGNhbGN1bGF0ZWQgdXNpbmcgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKClcclxuICAgIHRoaXMuaXNDZW50ZXJlZCA9IGZhbHNlOyAgICAgICAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlIHRvIHNjcmVlbiBjZW50ZXJcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnNpZGUgcG9seWdvbiBkZWZpbmVkIGJ5IHRoaXMgUGF0aFxyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiBpbnNpZGUoW3gsIHldLCB0aGlzLnBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVsYXRpdmUgdHJhbnNsYXRpb25cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCArPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSArPSB5O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBBYnNvbHV0ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHggLSB0aGlzLndpZHRoLzI7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5IC0gdGhpcy5oZWlnaHQvMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2NhbGUoZmFjdG9yKSB7XHJcbiAgICB0aGlzLnNjYWxlICo9IGZhY3RvcjtcclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8od2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHBhdGggbGVuZ3RoIGJ5IGFkZGluZyB1cCBhbGwgbGluZSBzZWdtZW50IGxlbmd0aHMgKGRpc3RhbmNlcyBiZXR3ZWVuIHBvbHlnb24gcG9pbnRzKVxyXG4gIGdldFRvdGFsTGVuZ3RoKCkge1xyXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGk9MTsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxMZW5ndGggKz0gVmVjMihcclxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgKS5kaXN0YW5jZShcclxuICAgICAgICBWZWMyKFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMV0gKiB0aGlzLnNjYWxlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vIENhbGN1bGF0ZXMgdGhlIHJlYWwgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdHJhbnNmb3JtZWQgcG9seWdvblxyXG4gIGNhbGN1bGF0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICBsZXQgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXHJcbiAgICAgIHJpZ2h0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSxcclxuICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA8IGxlZnRNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGxlZnRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0gPiByaWdodE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA8IHRvcE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXTtcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdID4gYm90dG9tTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE1hdGguYWJzKHJpZ2h0TW9zdENvb3JkaW5hdGUgLSBsZWZ0TW9zdENvb3JkaW5hdGUpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLmFicyhib3R0b21Nb3N0Q29vcmRpbmF0ZSAtIHRvcE1vc3RDb29yZGluYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb29yZGluYXRlcyBmb3IgdGhlIFwidHJhbnNmb3JtZWRcIiB2ZXJzaW9uIG9mIHRoaXMgcGF0aCwgdGFraW5nIGludG8gY29uc2lkZXJhdGlvbiB0cmFuc2xhdGlvbiBhbmQgc2NhbGluZ1xyXG4gIGNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLnB1c2goXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLngsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueVxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZihcclxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMudHlwZSA9PSAnQm91bmRzJyB8fFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy50eXBlID09ICdPYnN0YWNsZXMnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgLy8gRHJhdyBzZXF1ZW50aWFsIGxpbmVzIHRvIGFsbCBwb2ludHMgb2YgdGhlIHBvbHlnb25cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERyYXcgbGluZSBiYWNrIHRvIGZpcnN0IHBvaW50IHRvIGNsb3NlIHRoZSBwb2x5Z29uXHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGJvdW5kaW5nIGJveFxyXG4gICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgLy8gdGhpcy5jdHgubW92ZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xyXG4gICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge1NWR1BhdGhEYXRhfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0xvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzdGF0aWMgbG9hZChzdmdTdHJpbmcpIHtcclxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBsZXQgc3ZnTm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG5cclxuICAgIGxldCBpbnB1dFBhdGhzID0gc3ZnTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdwYXRoJyksXHJcbiAgICAgIHBhdGhzID0gW107XHJcblxyXG4gICAgLy8gU2NyYXBlIGFsbCBwb2ludHMgZnJvbSBhbGwgcGF0aHMsIGFuZCByZWNvcmQgYnJlYWtwb2ludHNcclxuICAgIGZvcihsZXQgaW5wdXRQYXRoIG9mIGlucHV0UGF0aHMpIHtcclxuICAgICAgbGV0IHBhdGhEYXRhID0gbmV3IFNWR1BhdGhEYXRhKGlucHV0UGF0aC5nZXRBdHRyaWJ1dGUoJ2QnKSksXHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBsZXQgcHJldmlvdXNDb29yZHMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IobGV0IFtpbmRleCwgY29tbWFuZF0gb2YgcGF0aERhdGEuY29tbWFuZHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgc3dpdGNoKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgLy8gTW92ZSAoJ00nKSBhbmQgbGluZSAoJ0wnKSBjb21tYW5kcyBoYXZlIGJvdGggWCBhbmQgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5NT1ZFX1RPOlxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBjb21tYW5kLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICgnSCcpIGNvbW1hbmRzIG9ubHkgaGF2ZSBYLCB1c2luZyBwcmV2aW91cyBjb21tYW5kJ3MgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBwcmV2aW91c0Nvb3Jkcy55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKCdWJykgY29tbWFuZHMgb25seSBoYXZlIFksIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBYXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLlZFUlRfTElORV9UTzpcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzQ29vcmRzLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBDbG9zZVBhdGggKCdaJykgY29tbWFuZHMgYXJlIGEgbmFpdmUgaW5kaWNhdGlvbiB0aGF0IHRoZSBjdXJyZW50IHBhdGggY2FuIGJlIHByb2Nlc3NlZCBhbmQgYWRkZWQgdG8gdGhlIHdvcmxkXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkNMT1NFX1BBVEg6XHJcbiAgICAgICAgICAgIC8vIENhcHR1cmUgcGF0aCBpbiByZXR1cm4gb2JqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW5jbG9zZWQgcGF0aHMgbmV2ZXIgaGF2ZSBDTE9TRV9QQVRIIGNvbW1hbmRzLCBzbyB3cmFwIHVwIHRoZSBjdXJyZW50IHBhdGggd2hlbiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBwYXRoIGFuZCBoYXZlIG5vdCBmb3VuZCB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmKGluZGV4ID09IHBhdGhEYXRhLmNvbW1hbmRzLmxlbmd0aCAtIDEgJiYgY29tbWFuZC50eXBlICE9IFNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpIHtcclxuICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgIHBvaW50cyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBYIGNvb3JkaW5hdGUsIGlmIHRoZXJlIHdhcyBvbmVcclxuICAgICAgICBpZihjb21tYW5kLmhhc093blByb3BlcnR5KCd4JykpIHtcclxuICAgICAgICAgIHByZXZpb3VzQ29vcmRzLnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFkgY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3knKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueSA9IGNvbW1hbmQueTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyB0b1BhdGggfSBmcm9tICdzdmctcG9pbnRzJztcclxuXHJcbi8vIHJhbmRvbSgpLCBzaW1pbGFyIHRvIFByb2Nlc3Npbmcnc1xyXG4vLyBJZiB0d28gcGFyYW1ldGVycyBhcmUgcGFzc2VkLCB0aGV5IGFyZSBpbnRlcnByZXRlZCBhcyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiB0aGUgZGVzaXJlZCByYW5nZVxyXG4vLyBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgcGFzc2VkLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0aGUgbWF4aW11bSwgd2hpbGUgemVybyBpcyB1c2VkIGFzIHRoZSBtaW5pbXVtXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heCA9IG1pbjtcclxuICAgIG1pbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG1pbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBudW1iZXIgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlclxyXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBvcmlnaW5hbExvd2VyLCBvcmlnaW5hbFVwcGVyLCBuZXdMb3dlciwgbmV3VXBwZXIpIHtcclxuICByZXR1cm4gbmV3TG93ZXIgKyAobmV3VXBwZXIgLSBuZXdMb3dlcikgKiAoKHZhbHVlIC0gb3JpZ2luYWxMb3dlcikgLyAob3JpZ2luYWxVcHBlciAtIG9yaWdpbmFsTG93ZXIpKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBwb2ludCBjb29yZGluYXRlcyAoYWxzbyBhcnJheXMsIHdpdGggdHdvIGVudHJpZXMpIGZvciBwb2ludHMgYXJyYW5nZWQgaW4gYSBjaXJjbGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmNsZU9mUG9pbnRzKGN4LCBjeSwgcmFkaXVzLCByZXNvbHV0aW9uKSB7XHJcbiAgbGV0IGFuZ2xlLCB4LCB5O1xyXG4gIGxldCBwb2ludHMgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc29sdXRpb247IGkrKykge1xyXG4gICAgYW5nbGUgPSAyICogTWF0aC5QSSAqIGkgLyByZXNvbHV0aW9uO1xyXG4gICAgeCA9IGN4ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSkpO1xyXG4gICAgeSA9IGN5ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcG9pbnRzO1xyXG59XHJcblxyXG4vLyBDcmVhdGVzIGFuIFNWRyBkb2N1bWVudCBjb250YWluaW5nIGFsbCBvZiB0aGUgdmlzaWJsZSBnZW9tZXRyeSwgdGhlbiBwdXNoZXMgaXQgdG8gdGhlIGNsaWVudFxyXG4vLyAtIFRyaWdnZXJlZCBieSBwcmVzc2luZyBgZWAgaW4gYW55IHNrZXRjaC4gU2VlIEtleWJvYXJkSW50ZXJhY3Rpb25zLmpzIGZvciBkZWZpbml0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTVkcobmV0d29yaykge1xyXG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XHJcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIDxsaW5lPnMgZm9yIGVhY2ggdmVpbiBzZWdtZW50XHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgIGxldCBub2RlTGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZXR3b3JrLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBsZXQgbGluZU5vZGUgPSBgXHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT1cIiR7bm9kZS5wYXJlbnQucG9zaXRpb24ueH1cIlxyXG4gICAgICAgICAgICB5MT1cIiR7bm9kZS5wYXJlbnQucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICB4Mj1cIiR7bm9kZS5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkyPVwiJHtub2RlLnBvc2l0aW9uLnl9XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBub2RlTGluZXNHcm91cC5pbm5lckhUTUwgKz0gbGluZU5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZUxpbmVzR3JvdXApO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIGJvdW5kc1xyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd0JvdW5kcykge1xyXG4gICAgaWYobmV0d29yay5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgYm91bmRzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgbmV0d29yay5ib3VuZHMpIHtcclxuICAgICAgICBib3VuZHNHcm91cC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGdldFBhdGhFbEZyb21Qb2ludHMoYm91bmQucG9seWdvbilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRzR3JvdXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIG9ic3RhY2xlc1xyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd09ic3RhY2xlcykge1xyXG4gICAgaWYobmV0d29yay5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgb2JzdGFjbGVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgbmV0d29yay5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZXNHcm91cC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGdldFBhdGhFbEZyb21Qb2ludHMob2JzdGFjbGUucG9seWdvbilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQob2JzdGFjbGVzR3JvdXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2VuZXJhdGUgdGhlIGRvY3VtZW50IGFzIGEgQmxvYiBhbmQgZm9yY2UgYSBkb3dubG9hZCBhcyBhIHRpbWVzdGFtcGVkIC5zdmcgZmlsZVxyXG4gIGNvbnN0IHN2Z0RvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwibm9cIj8+JztcclxuICBjb25zdCBzZXJpYWxpemVkU3ZnID0gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Zyk7XHJcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtzdmdEb2N0eXBlLCBzZXJpYWxpemVkU3ZnXSwgeyB0eXBlOiAnaW1hZ2Uvc3ZnK3htbDsnIH0pXHJcbiAgc2F2ZUFzKGJsb2IsICd2ZW5hdGlvbi0nICsgRGF0ZS5ub3coKSArICcuc3ZnJyk7XHJcbn1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgPHBhdGg+IGVsZW1lbnQgd2l0aCBhIHByb3Blcmx5LWZvcm1hdHRlZCBgZGAgYXR0cmlidXRlIGNvbnRhaW5pbmcgYWxsIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcGFzc2VkIHBvaW50c1xyXG4gIGZ1bmN0aW9uIGdldFBhdGhFbEZyb21Qb2ludHMocG9pbnRzKSB7XHJcbiAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XHJcblxyXG4gICAgZm9yKGxldCBbaW5kZXgsIHBvaW50XSBvZiBwb2ludHMuZW50cmllcygpKSB7XHJcbiAgICAgIHBvaW50c1N0cmluZyArPSBwb2ludFswXSArICcsJyArIHBvaW50WzFdO1xyXG5cclxuICAgICAgaWYoaW5kZXggPCBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgY2xvc2VwYXRoIGNvbW1hbmQgdG8gYXV0b21hdGljYWxseSBkcmF3IGxpbmUgYmFjayB0byBpbml0aWFsIHBvaW50XHJcbiAgICBwb2ludHNTdHJpbmcgKz0gJyAnICsgcG9pbnRzWzBdWzBdICsgJywnICsgcG9pbnRzWzBdWzFdO1xyXG5cclxuICAgIGxldCBkID0gdG9QYXRoKHtcclxuICAgICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgICAgcG9pbnRzOiBwb2ludHNTdHJpbmdcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwYXRoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICAgIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcclxuICAgIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IG5vbmU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMScpO1xyXG5cclxuICAgIHJldHVybiBwYXRoRWw7XHJcbiAgfSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlaW5Ob2RlIHtcclxuICBjb25zdHJ1Y3RvcihwYXJlbnQsIHBvc2l0aW9uLCBpc1RpcCwgY3R4LCBzZXR0aW5ncywgY29sb3IgPSB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50OyAgICAgICAvLyByZWZlcmVuY2UgdG8gcGFyZW50IG5vZGUsIG5lY2Vzc2FyeSBmb3IgdmVpbiB0aGlja2VuaW5nIGxhdGVyXHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgLy8ge3ZlYzJ9IG9mIHRoaXMgbm9kZSdzIHBvc2l0aW9uXHJcbiAgICB0aGlzLmlzVGlwID0gaXNUaXA7ICAgICAgICAgLy8ge2Jvb2xlYW59XHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0IGZvciBkcmF3aW5nXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjsgICAgICAgICAvLyBjb2xvciwgdXN1YWxseSBwYXNzZWQgZG93biBmcm9tIHBhcmVudFxyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNlZEJ5ID0gW107ICAgICAvLyByZWZlcmVuY2VzIHRvIGFsbCBBdXhpblNvdXJjZXMgaW5mbHVlbmNpbmcgdGhpcyBub2RlIGVhY2ggZnJhbWVcclxuICAgIHRoaXMudGhpY2tuZXNzID0gMDsgICAgICAgICAvLyB0aGlja25lc3MgLSB0aGlzIGlzIGluY3JlYXNlZCBkdXJpbmcgdmVpbiB0aGlja2VuaW5nIHByb2Nlc3NcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIC8vIFNtb290aGx5IHJhbXAgdXAgb3BhY2l0eSBiYXNlZCBvbiB2ZWluIHRoaWNrbmVzc1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy50aGlja25lc3MgLyAzICsgLjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFwiTGluZXNcIiByZW5kZXIgbW9kZVxyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlZlaW5SZW5kZXJNb2RlID09ICdMaW5lcycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBhcmVudC5wb3NpdGlvbi54LCB0aGlzLnBhcmVudC5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluVGlwQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaXBUaGlja25lc3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmKHRoaXMuY29sb3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRoaWNrbmVzcyArIHRoaXMudGhpY2tuZXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgIC8vIFwiRG90c1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnNldHRpbmdzLlZlaW5SZW5kZXJNb2RlID09ICdEb3RzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmVsbGlwc2UoXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgTWF0aC5QSSAqIDJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgY29sb3Igb3IgXCJ0aXBcIiBub2Rlc1xyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZXNldCBnbG9iYWwgb3BhY2l0eSBpZiBpdCB3YXMgY2hhbmdlZCBkdWUgdG8gb3BhY2l0eSBncmFkaWVudCBmbGFnXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgYSBuZXcgbm9kZSBpbiB0aGUgcHJvdmlkZWQgZGlyZWN0aW9uIGFuZCBhIHByZS1kZWZpbmVkIGRpc3RhbmNlIChTZWdtZW50TGVuZ3RoKVxyXG4gIGdldE5leHROb2RlKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuaXNUaXAgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoYXZlcmFnZVNvdXJjZURpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNldHRpbmdzLlNlZ21lbnRMZW5ndGgpLCB0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlaW5Ob2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdGhpcy5jdHgsXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MsXHJcbiAgICAgIHRoaXMuY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi4vLi4vY29yZS9OZXR3b3JrJztcclxuaW1wb3J0IFZlaW5Ob2RlIGZyb20gJy4uLy4uL2NvcmUvVmVpbk5vZGUnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi9jb3JlL1BhdGgnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgQXV4aW5Tb3VyY2UgZnJvbSAnLi4vLi4vY29yZS9BdXhpblNvdXJjZSc7XHJcbmltcG9ydCBTVkdMb2FkZXIgZnJvbSAnLi4vLi4vY29yZS9TVkdMb2FkZXInO1xyXG5cclxubGV0IGNhbnZhcywgY3R4O1xyXG5sZXQgbmV0d29yaztcclxuXHJcbmNvbnN0IGxlYWYgPSByZXF1aXJlKCcuLi9zdmcvbGVhZi5zdmcnKTtcclxuY29uc3QgZ3Jhc3NCbGFkZSA9IHJlcXVpcmUoJy4uL3N2Zy9ncmFzcy1ibGFkZS5zdmcnKTtcclxuXHJcbmxldCBjdXJyZW50UGF0aDtcclxuXHJcbmNvbnN0IExJTkUgPSAwO1xyXG5jb25zdCBUUklBTkdMRSA9IDE7XHJcbmNvbnN0IFNRVUFSRSA9IDI7XHJcbmNvbnN0IERJQU1PTkQgPSAzO1xyXG5jb25zdCBDSVJDTEUgPSA0O1xyXG5jb25zdCBMRUFGID0gNTtcclxubGV0IGN1cnJlbnRQYXRoU2hhcGUgPSBTUVVBUkU7XHJcblxyXG5sZXQgeVBvc2l0aW9uID0gMDtcclxuXHJcbmxldCBzaG93SGVscCA9IHRydWU7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBMb2FkIHRoZSBkZWZpbmVkIHBhdGhcclxuICBzZXR1cFBhdGgoKTtcclxuXHJcbiAgLy8gQWRkIHRoZSBib3VuZHMsIHNvdXJjZXMsIGFuZCByb290IG5vZGVzXHJcbiAgcmVzZXROZXR3b3JrKCk7XHJcblxyXG4gIC8vIFNldCB1cCBjb21tb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbGlzdGVuZXJzXHJcbiAgc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yayk7XHJcblxyXG4gIC8vIEJlZ2luIGFuaW1hdGlvbiBsb29wXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbmxldCByZXNldE5ldHdvcmsgPSAoKSA9PiB7XHJcbiAgbmV0d29yay5yZXNldCgpO1xyXG4gIGFkZFJvb3RWZWlucygpO1xyXG59XHJcblxyXG4gIGxldCBzZXR1cFBhdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodC8yO1xyXG4gICAgeVBvc2l0aW9uID0gY3k7XHJcblxyXG4gICAgc3dpdGNoKGN1cnJlbnRQYXRoU2hhcGUpIHtcclxuICAgICAgY2FzZSBMSU5FOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0SG9yaXpvbnRhbExpbmUoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgVFJJQU5HTEU6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXRUcmlhbmdsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTUVVBUkU6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXRTcXVhcmVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgRElBTU9ORDpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldERpYW1vbmRCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0Q2lyY2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXRMZWFmQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSAhPSBMSU5FKSB7XHJcbiAgICAgIGN1cnJlbnRQYXRoLmlzQ2VudGVyZWQgPSB0cnVlO1xyXG4gICAgICBjdXJyZW50UGF0aC5zZXRTY2FsZSguMDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICBsZXQgZ2V0SG9yaXpvbnRhbExpbmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW2N4IC0gNDAwLCBjeSArIDQwMF0sXHJcbiAgICAgICAgICBbY3ggKyA0MDAsIGN5ICsgNDAwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldFRyaWFuZ2xlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaWRlTGVuZ3RoID0gMjAwO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLzIsIDBdLFxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgsIDMqc2lkZUxlbmd0aC80XSxcclxuICAgICAgICAgIFswLCAzKnNpZGVMZW5ndGgvNF0sXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aC8yLCAwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0U3F1YXJlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaWRlTGVuZ3RoID0gMjAwO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFswLCAwXSwgIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgsIDBdLCAgLy8gdG9wIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgsIHNpZGVMZW5ndGhdLCAgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgICAgWzAsIHNpZGVMZW5ndGhdLCAgLy8gYm90dG9tIGxlZnQgY29ybmVyXHJcbiAgICAgICAgICBbMCwgMF0sICAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXREaWFtb25kQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzaWRlTGVuZ3RoID0gMjAwO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLzIsIDBdLFxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgsIHNpZGVMZW5ndGgvMl0sXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aC8yLCBzaWRlTGVuZ3RoXSxcclxuICAgICAgICAgIFswLCBzaWRlTGVuZ3RoLzJdLFxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgvMiwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRDaXJjbGVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJhZGl1cyA9IDEwMDtcclxuICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IDUwO1xyXG4gICAgICBsZXQgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgICAgICBsZXQgeCA9IHJhZGl1cyArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgICAgICBsZXQgeSA9IHJhZGl1cyArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICAgICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcG9pbnRzLnB1c2goW3BvaW50c1swXVswXSwgcG9pbnRzWzBdWzFdXSk7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFBhdGgocG9pbnRzLCAnQm91bmRzJywgY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0TGVhZkJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFNWR0xvYWRlci5sb2FkKGxlYWYpWzBdLCAnQm91bmRzJywgY3R4KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0R3Jhc3NCbGFkZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFNWR0xvYWRlci5sb2FkKGdyYXNzQmxhZGUpWzBdLCAnQm91bmRzJywgY3R4KTtcclxuICAgIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgbGV0IGFkZFJvb3RWZWlucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGgvMjtcclxuICAgIGxldCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodC8yO1xyXG5cclxuICAgIGlmKGN1cnJlbnRQYXRoU2hhcGUgPT0gTElORSkge1xyXG4gICAgICBjeSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIGN4LFxyXG4gICAgICAgICAgY3lcclxuICAgICAgICApLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGxldCBtb3ZlUGF0aCA9ICgpID0+IHtcclxuICAgIGlmKCFuZXR3b3JrLnNldHRpbmdzLklzUGF1c2VkICYmIHlQb3NpdGlvbiA+IC04MDApIHtcclxuICAgICAgY3VycmVudFBhdGgubW92ZUJ5KDAsLTIpO1xyXG4gICAgICB5UG9zaXRpb24gPSBjdXJyZW50UGF0aC5vcmlnaW4ueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzY2FsZVBhdGggPSAoKSA9PiB7XHJcbiAgICBpZighbmV0d29yay5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICBjdXJyZW50UGF0aC5zZXRTY2FsZSgxLjAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCByb3RhdGVQYXRoID0gKCkgPT4ge1xyXG4gICAgaWYoIW5ldHdvcmsuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgLy8gVE9ETzogcm90YXRlIHBhdGhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBnZW5lcmF0ZVNvdXJjZXNPblBhdGggPSAoKSA9PiB7XHJcbiAgICAvLyBuZXR3b3JrLnNvdXJjZXMgPSBjcmVhdGVFdmVubHlTcGFjZWRTb3VyY2VzKCk7XHJcbiAgICBuZXR3b3JrLnNvdXJjZXMgPSBjcmVhdGVTdWJkaXZpZGVkU291cmNlcygpO1xyXG4gIH1cclxuXHJcbiAgICBsZXQgY3JlYXRlRXZlbmx5U3BhY2VkU291cmNlcyA9ICgpID0+IHtcclxuICAgICAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICAgICAgY29uc3Qgc291cmNlU3BhY2luZyA9IDEwO1xyXG4gICAgICBsZXQgcHJldmlvdXNTZWdtZW50UmVtYWluZGVyID0gMDtcclxuXHJcbiAgICAgIC8vIEZvciBlYWNoIHBhdGggc2VnbWVudCAuLi5cclxuICAgICAgZm9yKGxldCBpPTE7IGk8Y3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQwID0gVmVjMihjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baS0xXVswXSwgY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ktMV1bMV0pO1xyXG4gICAgICAgIGNvbnN0IHBvaW50MSA9IFZlYzIoY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdLCBjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0pO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZWdtZW50TGVuZ3RoID0gcG9pbnQxLmRpc3RhbmNlKHBvaW50MCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdPZmZzZXQgPSBzb3VyY2VTcGFjaW5nIC0gcHJldmlvdXNTZWdtZW50UmVtYWluZGVyO1xyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZUxlbmd0aCA9IGN1cnJlbnRTZWdtZW50TGVuZ3RoIC0gc3RhcnRpbmdPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIFdlIGNhbiBmaXQgYXQgbGVhc3Qgb25lIHNvdXJjZSBvbnRvIHRoaXMgc2VnbWVudFxyXG4gICAgICAgIGlmKGF2YWlsYWJsZUxlbmd0aCA+PSBzb3VyY2VTcGFjaW5nKSB7XHJcbiAgICAgICAgICBsZXQgc2VnbWVudERpcmVjdGlvbiA9IHBvaW50MS5zdWJ0cmFjdChwb2ludDAsIHRydWUpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgIC8vIEhvdyBtYW55IHNvdXJjZXMgY2FuIHdlIGZpdCBvbnRvIHRoaXMgc2VnbWVudD9cclxuICAgICAgICAgIGNvbnN0IG51bVNvdXJjZXMgPSBNYXRoLmZsb29yKGF2YWlsYWJsZUxlbmd0aCAvIHNvdXJjZVNwYWNpbmcpO1xyXG5cclxuICAgICAgICAgIC8vIENyZWF0ZSBhcyBtYW55IGF1eGluIHNvdXJjZXMgYXMgd2UgY2FuXHJcbiAgICAgICAgICBmb3IobGV0IHNvdXJjZUluZGV4PTA7IHNvdXJjZUluZGV4PD1udW1Tb3VyY2VzOyBzb3VyY2VJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZXMucHVzaChcclxuICAgICAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgICAgICBwb2ludDAuYWRkKHNlZ21lbnREaXJlY3Rpb24ubXVsdGlwbHkoc291cmNlU3BhY2luZyAqIHNvdXJjZUluZGV4ICsgc3RhcnRpbmdPZmZzZXQsIHRydWUpLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBTdG9yZSByZW1haW5kZXIgb2Ygc2VnbWVudCBsZW5ndGggdG8gb2Zmc2V0IG5leHQgc2VnbWVudCdzIHNvdXJjZSBwbGFjZW1lbnRcclxuICAgICAgICAgIHByZXZpb3VzU2VnbWVudFJlbWFpbmRlciA9IGF2YWlsYWJsZUxlbmd0aCAtIChudW1Tb3VyY2VzICogc291cmNlU3BhY2luZyk7XHJcblxyXG4gICAgICAgIC8vIENhbid0IGZpdCBhbnkgc291cmNlcyBvbnRvIHRoaXMgc2VnbWVudCwgc28gYWNjdW11bGF0ZSB0aGUgbGVuZ3RoIChwcmV2aW91cyBzZWdtZW50cyBtaWdodCd2ZSBhbHNvIGJlZW4gdG9vIHNob3J0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2aW91c1NlZ21lbnRSZW1haW5kZXIgKz0gY3VycmVudFNlZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3JlYXRlU3ViZGl2aWRlZFNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzb3VyY2VzID0gW107XHJcblxyXG4gICAgICAvLyBDcmVhdGUgc291cmNlcyBhdCBlYWNoIHZlcnRleFxyXG4gICAgICBmb3IobGV0IGk9MDsgaTxjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSxcclxuICAgICAgICAgICAgICBjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV1cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG5ld1NvdXJjZXMgPSBbXTtcclxuXHJcbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IHN1YmRpdmlkZSBzZWdtZW50c1xyXG4gICAgICBmb3IobGV0IGk9MTsgaTxzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnQwID0gc291cmNlc1tpLTFdLnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHBvaW50MSA9IHNvdXJjZXNbaV0ucG9zaXRpb247XHJcbiAgICAgICAgc3ViZGl2aWRlU2VnbWVudChwb2ludDAsIHBvaW50MSwgaSwgbmV3U291cmNlcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJldmVyc2UgdGhlIG5ldyBzb3VyY2VzIGxpc3Qgc28gdGhhdCBpbmRpY2VzIGRvbid0IHNoaWZ0IGFzIHRoZXkgYXJlIGluc2VydGVkXHJcbiAgICAgIG5ld1NvdXJjZXMuc29ydCgoYSxiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGIuaW5kZXggLSBhLmluZGV4O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEluamVjdCBhbGwgdGhlIG5ldyBzb3VyY2VzXHJcbiAgICAgIGZvcihsZXQgbmV3U291cmNlIG9mIG5ld1NvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2VzLnNwbGljZShuZXdTb3VyY2UuaW5kZXgsIDAsIG5ld1NvdXJjZS5zb3VyY2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc291cmNlcztcclxuICAgIH1cclxuXHJcbiAgICAgIC8vIFNwbGl0IGEgc2VnbWVudCAoZGVmaW5lZCBieSB0d28gaW5wdXQgcG9pbnRzKSBieSBwbGFjaW5nIGEgc291cmNlIGF0IGl0J3MgbWlkcG9pbnRcclxuICAgICAgbGV0IHN1YmRpdmlkZVNlZ21lbnQgPSAocG9pbnQwLCBwb2ludDEsIG9yaWdpbmFsSW5kZXgsIG5ld1NvdXJjZXMpID0+IHtcclxuICAgICAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gcG9pbnQxLmRpc3RhbmNlKHBvaW50MCk7XHJcblxyXG4gICAgICAgIC8vIE9ubHkgc3ViZGl2aWRlIHRoZSBzZWdtZW50IGlmIGl0cyBsb25nIGVub3VnaCAodGVybWluYXRlcyByZWN1cnNpb24gaW4gc2hvcnQgc2VnbWVudHMpXHJcbiAgICAgICAgaWYoc2VnbWVudExlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgICBsZXQgbWlkcG9pbnRTb3VyY2UgPSBnZXRNaWRwb2ludFNvdXJjZShwb2ludDAsIHBvaW50MSwgc2VnbWVudExlbmd0aCk7XHJcbiAgICAgICAgICBuZXdTb3VyY2VzLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogb3JpZ2luYWxJbmRleCxcclxuICAgICAgICAgICAgc291cmNlOiBtaWRwb2ludFNvdXJjZVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gUmVjdXJzaXZlbHkgc3ViZGl2aWRlIHRoZSBuZXcgc2VnbWVudHNcclxuICAgICAgICAgIHN1YmRpdmlkZVNlZ21lbnQocG9pbnQwLCBtaWRwb2ludFNvdXJjZS5wb3NpdGlvbiwgb3JpZ2luYWxJbmRleCwgbmV3U291cmNlcyk7IC8vIHN1YmRpdmlkZSB0aGUgbGVmdCBzZWdtZW50XHJcbiAgICAgICAgICBzdWJkaXZpZGVTZWdtZW50KG1pZHBvaW50U291cmNlLnBvc2l0aW9uLCBwb2ludDEsIG9yaWdpbmFsSW5kZXgsIG5ld1NvdXJjZXMpOyAvLyBzdWJkaXZpZGUgdGhlIHJpZ2h0IHNlZ21lbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHNvdXJjZSBleGFjdGx5IGhhbGZ3YXkgYmV0d2VlbiB0d28gb3RoZXJzXHJcbiAgICAgIGxldCBnZXRNaWRwb2ludFNvdXJjZSA9IChwb2ludDAsIHBvaW50MSwgc2VnbWVudExlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnREaXJlY3Rpb24gPSBwb2ludDEuc3VidHJhY3QocG9pbnQwLCB0cnVlKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgIHBvaW50MC5hZGQoc2VnbWVudERpcmVjdGlvbi5tdWx0aXBseShzZWdtZW50TGVuZ3RoLzIsIHRydWUpLCB0cnVlKSxcclxuICAgICAgICAgIGN0eFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbmxldCBkcmF3VGV4dCA9ICgpID0+IHtcclxuICBsZXQgdGV4dCA9IFtcclxuICAgICdBdXhpbiBzb3VyY2VzIGNhbiBiZSBwbGFjZWQgb24gdGhlIGVkZ2VzIG9mIHBhdGhzLCcsXHJcbiAgICAnY3JlYXRpbmcgZ3Jvd3RoIGFzIHRoZXkgYXJlIHNjYWxlZC4nLFxyXG4gICAgJycsXHJcbiAgICAnMSA9IGhvcml6b250YWwgbGluZSBtb3ZpbmcgdXB3YXJkcycsXHJcbiAgICAnMiA9IHRyaWFuZ2xlJyxcclxuICAgICczID0gc3F1YXJlJyxcclxuICAgICc0ID0gZGlhbW9uZCcsXHJcbiAgICAnNSA9IGNpcmNsZScsXHJcbiAgICAnNiA9IGEgbGVhZicsXHJcbiAgICAnJyxcclxuICAgICdTcGFjZSA9IHRvZ2dsZSBwYXVzZScsXHJcbiAgICAnciA9IHJlc2V0JyxcclxuICAgICdjID0gdG9nZ2xlIGNhbmFsaXphdGlvbicsXHJcbiAgICAncCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nJyxcclxuICAgICd2ID0gdG9nZ2xlIHZlaW4gdmlzaWJpbGl0eScsXHJcbiAgICAncyA9IHRvZ2dsZSBzb3VyY2UgdmlzaWJpbGl0eScsXHJcbiAgICAnYSA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmVzJyxcclxuICAgICdrID0gdG9nZ2xlIGtpbGwgem9uZXMnLFxyXG4gICAgJ3QgPSB0b2dnbGUgdmVpbiB0aXBzJyxcclxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXHJcbiAgICAnaCA9IHRvZ2dsZSB0aGlzIGhlbHAgdGV4dCdcclxuICBdO1xyXG5cclxuICBjdHguZm9udCA9ICdib2xkIDI0cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICBjdHguZmlsbFRleHQoJ01hcmdpbmFsIEdyb3d0aCcsIDIwLCA0MCk7XHJcblxyXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSc7XHJcbiAgZm9yKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHRbaV0sIDIwLCAyMippICsgODApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBpZighbmV0d29yay5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSA9PSBMSU5FKSB7XHJcbiAgICAgIG1vdmVQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSAhPSBMSU5FKSB7XHJcbiAgICAgIHNjYWxlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlU291cmNlc09uUGF0aCgpO1xyXG5cclxuICAgIG5ldHdvcmsudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZXR3b3JrLmRyYXcoKTtcclxuICBjdXJyZW50UGF0aC5kcmF3KCk7XHJcblxyXG4gIGlmKHNob3dIZWxwKSB7XHJcbiAgICBkcmF3VGV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIEtleSBjb21tYW5kcyBzcGVjaWZpYyB0byB0aGlzIHNrZXRjaFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAvLyByID0gcmVzZXQgc2ltdWxhdGlvbiBieSByZWluaXRpYWxpemluZyB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gICAgY2FzZSAncic6XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBoID0gdG9nZ2xlIGhlbHAgdGV4dFxyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHNob3dIZWxwID0gIXNob3dIZWxwO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcxJzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IExJTkU7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMic6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBUUklBTkdMRTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IFNRVUFSRTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICc0JzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IERJQU1PTkQ7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNSc6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBDSVJDTEU7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNic6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBMRUFGO1xyXG4gICAgICBzZXR1cFBhdGgoKTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBLaWNrIG9mZiB0aGUgYXBwbGljYXRpb25cclxuc2V0dXAoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJzdmczNlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwiZ3Jhc3MtYmxhZGUuc3ZnXFxcIiBpbmtzY2FwZTp2ZXJzaW9uPVxcXCIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpXFxcIj48ZyBpbmtzY2FwZTpncm91cG1vZGU9XFxcImxheWVyXFxcIiBpbmtzY2FwZTpsYWJlbD1cXFwiMFxcXCIgaWQ9XFxcImczNFxcXCI+PHBhdGggaWQ9XFxcInBhdGgzMlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC45NjIxOTAwOTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZVxcXCIgZD1cXFwiTSA0NDEuOTU3NTIsNjEuNDU3MzYxIDQ0MS43MTcyNyw2MS4xMTI0MTQgNDQxLjM5OTgzLDYwLjg2NjAyOCA0NDEuMDMwOTIsNjAuNzE4MTk1IDQ0MC42MzYyOCw2MC42Njg5MTQgNDQwLjI0MTY1LDYwLjcxODE5NSA0MzkuODcyNzQsNjAuODY2MDI4IDQzOS41NTUzLDYxLjExMjQxNCA0MzkuMzE1MDUsNjEuNDU3MzYxIE0gNDY3Ljg1MzQsMTcyLjM4NjE1IDQ2Ny40NDA3LDE1OC4wNjM2NCA0NjYuMjA3MiwxNDMuODEyMTkgNDY0LjE1OTg0LDEyOS42NjE0NiA0NjEuMzA1NTUsMTE1LjY0MTE1IDQ1Ny42NTEyNCwxMDEuNzgwOSA0NTMuMjAzODUsODguMTEwNDIgNDQ3Ljk3MDMsNzQuNjU5MzQ0IDQ0MS45NTc1Miw2MS40NTczNjEgTSA0MzkuMzE1MDUsNjEuNDU3MzYxIDQzMy4zMDIyNyw3NC42NTkzNDQgNDI4LjA2ODcyLDg4LjExMDQyIDQyMy42MjEzMywxMDEuNzgwOSA0MTkuOTY3MDIsMTE1LjY0MTE1IDQxNy4xMTI3MywxMjkuNjYxNDYgNDE1LjA2NTM3LDE0My44MTIxOSA0MTMuODMxODcsMTU4LjA2MzY0IDQxMy40MTkxNywxNzIuMzg2MTUgTSA0NjcuODUzNCw4NTQuNjAwNSBIIDQ2MS4wNDkxMiA0NTQuMjQ0ODQgNDQ3LjQ0MDU2IDQ0MC42MzYyOSA0MzMuODMyMDEgNDI3LjAyNzczIDQyMC4yMjM0NSA0MTMuNDE5MTcgTSA0NjcuODUzNCwxNzIuMzg2MTUgViAyNTcuNjYyOTQgMzQyLjkzOTc0IDQyOC4yMTY1MyA1MTMuNDkzMzMgNTk4Ljc3MDEyIDY4NC4wNDY5MSA3NjkuMzIzNyA4NTQuNjAwNSBNIDQxMy40MTkxNyw4NTQuNjAwNSBWIDc2OS4zMjM3IDY4NC4wNDY5MSA1OTguNzcwMTIgNTEzLjQ5MzMzIDQyOC4yMTY1MyAzNDIuOTM5NzQgMjU3LjY2Mjk0IDE3Mi4zODYxNVxcXCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgc29kaXBvZGk6bm9kZXR5cGVzPVxcXCJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCA3NzIuODI0NzIgNzY5LjU3NDM5XFxcIiBpZD1cXFwic3ZnMlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwibGVhZi5zdmdcXFwiIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSlcXFwiPjxnIGlkPVxcXCJsYXllcjFcXFwiPjxwYXRoIGlkPVxcXCJwYXRoMzE4M1xcXCIgZD1cXFwiTSAzNzYuNDE0ODUsNzY2LjkyMTkyIDM3Ni42NDcwMSw3NjYuMDYyMTYgMzc3LjI3OTEyLDc2NC4zMDAyNCAzNzguMjE0NjMsNzYxLjg5MjkxIDM3OS4zNTY5OSw3NTkuMDk2ODkgMzgwLjc4MTkyLDc1NC40MDUyNSAzODEuMTQ1MzIsNzQ4LjEzNzU0IDM4MC4zOTQ4OCw3MzguMDg4MjMgMzc4LjQ3ODMyLDcyMi4wNTE3OCAzNzYuODIyMjYsNzA3LjY1MjM0IDM3NS4xMzc1OSw2OTAuNjI1NjIgMzczLjYyMTQ0LDY3My4wOTk1NiAzNzIuNDcwOTMsNjU3LjIwMjExIDM3MS41MTMxNCw2NDMuNDk1ODUgMzcwLjUyMTY2LDYzMS45MzY0IDM2OS42MTM0NSw2MjMuNzQwNzUgMzY4LjkwNTUxLDYyMC4xMjU5MSAzNjcuMDYxOTMsNjE5LjIyODU3IDM2Mi45MDY0OCw2MTguNzczMzcgMzU2LjQyODExLDYxOC43NTk4NCAzNDcuNjE1NzYsNjE5LjE4NzQ5IDI5OS43NjA3LDYyMi41MDAzNCAyNzAuMDU1NDEsNjI1LjUxNTM0IDI0OS4wMTk3NSw2MjkuNTQ5NTMgMjI3LjE3MzU2LDYzNS45MTk5NyAyMTcuMjY2OTMsNjM4LjY4NzMxIDIwNy4zODkzNiw2NDAuNTgxNjggMTk1LjkzMDQyLDY0MS44NDExMSAxODEuMjc5NjYsNjQyLjcwMzYzIDE3MC4wMTExMyw2NDMuMDc4NTYgMTYwLjIzMDY0LDY0My4xNzM1NiAxNTIuOTg2NjEsNjQyLjk5Mzg0IDE0OS4zMjc0Miw2NDIuNTQ0NjUgMTQ3LjU4MTk5LDY0MS41ODQ0IDE0Ny4zNTQxNCw2NDAuMjQ2MDYgMTQ4LjgxODUxLDYzOC4wMjczOSAxNTIuMTQ5NzUsNjM0LjQyNjExIDE1Ny4zOTEzLDYyNy45Mzk1MyAxNjAuNzcyOTQsNjIxLjQ0MzQ1IDE2Mi4wODI4MSw2MTUuNDk5NjEgMTYxLjEwOTAyLDYxMC42Njk3MyAxNTUuMDE4NTgsNjA0Ljk0MTYgMTQzLjA1NzQ5LDU5OC43NDQ4NSAxMjYuMDY0NDIsNTkyLjQ0MTM3IDEwNC44NzgwNiw1ODYuMzkzMDggOTMuMDU2NzgzLDU4My4zMDE4MyA4My4wODc5OTMsNTgwLjQ4NjUgNzYuMDIwNDkzLDU3OC4yNTc2OCA3Mi45MDMwMzMsNTc2LjkyNTk3IDcyLjk0MTk5Myw1NzUuMjczOSA3NC43MDMxMjMsNTcyLjE5Nzc5IDc4LjAyNTY2Myw1NjcuOTI5ODggODIuNzQ4ODMzLDU2Mi43MDI0MSA4OS40ODk3MTMsNTU1LjI0Nzc5IDkzLjI0NDUyMyw1NDkuNjkzODcgOTQuNzA0NDkzLDU0NC42MzM2MSA5NC41NjA5MDMsNTM4LjY1OTk4IDkyLjA0NzI2Myw1MzIuMDk4NDMgODUuMzc1NDczLDUyNC4zODkzMSA3My45MjY4MTMsNTE0Ljk0NzA1IDU3LjA4MjU4Myw1MDMuMTg2MDYgNDYuNjY2NDczLDQ5Ni4xNDYzMyAzOC4xMzY1ODMsNDkwLjE0OTM4IDMyLjM3MzEzMyw0ODUuODMwNDcgMzAuMjU2MzgzLDQ4My44MjQ4NSAzMS4zMjI0MTMsNDgyLjc3MjA0IDM0LjIyNDk3Myw0ODEuMDQ3MzEgMzguNTIwNzYzLDQ3OC44ODk3MSA0My43NjY0ODMsNDc2LjUzODMzIDU4LjY1NzgzMyw0NjkuMjE5NzUgNjYuMTE1NTgzLDQ2MS44MDY2MSA2Ny4zNTgyODMsNDUxLjg2ODk2IDYzLjYwNDQ0Myw0MzYuOTc2ODMgNTguNzkzMTUzLDQyMS4wNzYyMSA1My44NTkxNDMsNDAzLjI2MDMzIDQ5LjU5OTk0MywzODYuNTI2NiA0Ni44MTMwOTMsMzczLjg3MjQ2IDQyLjYwNDY5MywzNTUuMzA0MTcgMzYuMzkwNjMzLDMzMi4wMzI3MyAyOS44OTE3NjMsMzEwLjE2ODMyIDI0LjgyODk1OSwyOTUuODIxMTIgMjIuMjQ2MTMsMjkwLjgyMzYyIDE4LjY5NjQxNiwyODUuMTE1OTYgMTQuNjQ3NzU0LDI3OS40MDE2NSAxMC41NjgwNzksMjc0LjM4NDIxIDYuOTIyNjk5NCwyNzAuMDIwMDQgNC4wNTY1MDU0LDI2Ni4wODU3MyAyLjI1NjgwNTQsMjYzLjAxMjc4IDEuODEwOTA5NCwyNjEuMjMyNyAyMC42NjMxMzEsMjU4LjI0OTYgNjEuMDg4MTYzLDI2MS44MTc0MSAxMDUuODQ4ODIsMjY5LjYzMjgyIDEzNy43MDc5MiwyNzkuMzkyNTEgMTQzLjA0MzE2LDI4MS45NTU4NSAxNDkuODQzOTcsMjg1LjAyMDExIDE1Ny4yMzYxNCwyODguMjAwNzUgMTY0LjM0NTQ5LDI5MS4xMTMxNyAxNzEuNjA0MjksMjk0LjI3MTY1IDE3OS40MDE5NiwyOTguMTIyMjEgMTg2LjgwMjM1LDMwMi4xNzc5NSAxOTIuODY5MzEsMzA1Ljk1MTk0IDIxMC45NzE0MSwzMTcuMDg0MTUgMjIyLjY2NzM5LDMyMC44MDEzOSAyMjkuMzIxMDIsMzE3LjEwNTE5IDIzMi4yOTYwNywzMDUuOTk3MTMgMjM0LjEwMDc3LDI5NC4wNjQyOCAyMzYuOTE0MzcsMjgxLjY3MTY2IDI0MC41MTcyNSwyNjkuNjU0NzkgMjQ0LjY4OTc3LDI1OC44NDkxOSAyNDYuODU1MTEsMjUyLjk2Mjc5IDI0OS4zNTk3NiwyNDQuNjA5MjUgMjUxLjg5MzQ1LDIzNC45MDEwMyAyNTQuMTQ1ODksMjI0Ljk1MDU5IDI1Ni41ODM4LDIxMi40MzAzMyAyNTcuNzEyNTMsMjAzLjk4Nzk5IDI1Ny42NjI4MywxOTcuODU4MDMgMjU2LjU2NTQ3LDE5Mi4yNzQ5NSAyNTQuMjMyOTEsMTgxLjg1MzkyIDI1NS4yOTc5LDE3Ny41NDc4MiAyNjAuOTAxNDYsMTc4Ljg0MTEzIDI3Mi4xODQ2NSwxODUuMjE4MzEgMjgxLjg4NTI2LDE5MC40NDMzMSAyOTAuNjA5NTcsMTk0LjAwNjU3IDI5Ny4zNzEwNSwxOTUuNTgwODcgMzAxLjE4MzE0LDE5NC44MzkwMSAzMDEuNDc1NCwxOTMuNjcyMzMgMzAxLjMzMDk1LDE5MS40MzU5MyAzMDAuNzkxODcsMTg4LjQ1MTMzIDI5OS45MDAyMiwxODUuMDQwMDUgMjk4LjcxMTE4LDE3OS42OTY2NSAyOTkuMDUyMzYsMTczLjg4ODQgMzAxLjQwNTE0LDE2NC45ODcgMzA2LjI1MDg3LDE1MC4zNjQxNSAzMTAuMjM3NTIsMTM5LjQ1NjMzIDMxNC40OTQ4NCwxMjkuMTMwNTIgMzE4LjUxODg2LDEyMC41MzgwMiAzMjEuODA1NTksMTE0LjgzMDExIDMyOC4zNDgxNiwxMDUuMTIxNjMgMzM2LjI0ODA3LDkyLjQ4NDU1OCAzNDUuOTIwMTEsNzYuMjM3MDQ4IDM1Ny43NzkwNiw1NS42OTcyMjggMzcxLjU0MzMzLDMyLjczNTczNyAzODMuMjczNTEsMTUuNDUxNDUzIDM5Mi40NDA2NSw0LjU1Nzc0NjEgMzk4LjUxNTgzLDAuNzY3OTg0MTEgMzk5LjcyNTIxLDEuNDU0ODI5MSA0MDAuNTI0ODMsMy42MTUyNjIxIDQwMC45NDU0Nyw3LjM5OTEyNTEgNDAxLjAxNzkxLDEyLjk1NjI2NCA0MDEuMjI4NjEsMTguNjQyNjc2IDQwMS45MjkwOCwyNS4xMTUzNDUgNDAzLjAwOTY3LDMxLjU3NzYzNyA0MDQuMzYwNzEsMzcuMjMyOTE0IDQxMC45NDM2OCw1NC43NTgyNDggNDIxLjIzODQ1LDc2LjQzNDA3OCA0MzMuNjA3Niw5OS4wNjAxMTggNDQ2LjQxMzcxLDExOS40MzYwOSA0NTQuOTE4NjEsMTMxLjU2ODY0IDQ2MC4zNjU4NCwxMzguMjY3MDcgNDY0LjMxOTU3LDE0MS4xMjA2NyA0NjguMzQzOTUsMTQxLjcxODcgNDcxLjMwODg0LDE0MS40NDcyOCA0NzQuNDc0NjIsMTQwLjcwODI1IDQ3Ny40NjIzMywxMzkuNjE0NSA0NzkuODkyOTgsMTM4LjI3ODg5IDQ4Mi42NjMwMSwxMzYuNDczNDIgNDg0LjQ2Mzg0LDEzNS44OTAyNyA0ODUuODY1MTgsMTM2LjU0MTU5IDQ4Ny40MzY3MywxMzguNDM5NTMgNDg4LjYwNjczLDE0MS43Mjg5OSA0ODkuNzQ2MTMsMTQ4LjAwMjg0IDQ5MC43NTk0NSwxNTYuNjAxNjMgNDkxLjU1MTI0LDE2Ni44NjU5MyA0OTIuNDc3NTIsMTc5LjYwNTg2IDQ5My42MDQyLDE4OC4xODkyOCA0OTUuMTg3MjgsMTkzLjk3MzY3IDQ5Ny40ODI3NywxOTguMzE2NTUgNTA0LjU2MjkxLDIwOS40ODgxOSA1MTAuMDIxMTIsMjE5LjYyNDI3IDUxNC4xNDk0OCwyMjkuMzI5MDMgNTE3LjI0MDA5LDIzOS4yMDY3IDUxOC45MDg0MywyNDUuMDY2NjIgNTIwLjYzNjI3LDI1MC4zMDExNCA1MjIuMjE5NywyNTQuMzM5MiA1MjMuNDU0NzcsMjU2LjYwOTczIDUyNC43ODc2LDI1OS4wMTc2NiA1MjYuNjM3MDksMjYzLjQyOTcgNTI4Ljc1ODY2LDI2OS4yMTc2OSA1MzAuOTA3NzMsMjc1Ljc1MzUgNTMzLjM5MzI3LDI4NC43ODY0MyA1MzQuOTg0MjMsMjkzLjUzOTMzIDUzNS44Njc0MiwzMDMuNDE5MjQgNTM2LjIyOTY1LDMxNS44MzMxOSA1MzcuMDg3MTcsMzM5LjMxNDEyIDU0MC4wOTA1MSwzNTAuNjMzMiA1NDYuOTM5MjgsMzUxLjk3NDQ2IDU1OS4zMzMwOSwzNDUuNTIxOTMgNTY0Ljk4OTQ1LDM0Mi4xNjE1MyA1NzAuODExOTYsMzM4Ljg2OTcxIDU3Ni4xMTUzOCwzMzYuMDI0NDIgNTgwLjIxNDUsMzM0LjAwMzU4IDU4NC4yMTk5NCwzMzIuMDUxMSA1ODkuMjY3NzcsMzI5LjM5MTk1IDU5NC43MTE4NywzMjYuMzc1NjMgNTk5LjkwNjExLDMyMy4zNTE2NiA2MTAuOTkwNjgsMzE3LjYxMzU2IDYyNC44MTY3LDMxMi4wMzkyMiA2NDEuMzA2OTYsMzA2LjY1NjY3IDY2MC4zODQyNCwzMDEuNDkzOTcgNzA3LjExNDg1LDI4OS43MDI1NCA3MzcuMzY3MjgsMjgxLjM5OTc0IDc1Ni43MjIzNywyNzQuOTIzMzIgNzcwLjc2MDkzLDI2OC42MTEwNCA3NzEuMzY0NTQsMjY4LjkwMzQ5IDc3MS44NTg4NSwyNzAuMjg4NzYgNzcyLjE5Mjg2LDI3Mi41NDI3NCA3NzIuMzE1NTMsMjc1LjQ0MTM0IDc3MS42NDM5NywyODAuMDg3NzQgNzY5LjY3Mjg4LDI4Ni41Mzc2OSA3NjYuNDY3NjcsMjk0LjYwNzczIDc2Mi4wOTM3MywzMDQuMTE0NCA3NTcuNjE1NTEsMzEzLjg0MDM1IDc1Mi45Nzg3NiwzMjQuNzYzMzQgNzQ4LjczMDYxLDMzNS41NDY1NyA3NDUuNDE4MjMsMzQ0Ljg1MzI0IDczOS44OTQ4MiwzNjEuMDg2ODQgNzMzLjcwNjUsMzc3Ljk5NDc1IDcyNi40MjU0OSwzOTYuNzA4MzIgNzE3LjYyNDAzLDQxOC4zNTg5MyA3MTMuMTEwODIsNDI4LjU4NCA3MDguODAzMTcsNDM2LjcxNzE2IDcwNC4zMTIzMiw0NDMuNDEzNjMgNjk5LjI0OTQ4LDQ0OS4zMjg2NSA2OTUuNDI2NTMsNDUzLjQ0MjgzIDY5Mi4yOTU4Nyw0NTcuMDE1NjkgNjkwLjE4MDU3LDQ1OS42NjQxMSA2ODkuNDAzNjcsNDYxLjAwNDk1IDY4OS43MDI3Nyw0NjEuODAyMjIgNjkwLjUxNzE1LDQ2Mi45NzA0NiA2OTEuNzIyNDIsNDY0LjM1MjYzIDY5My4xOTQyLDQ2NS43OTE2OCA2OTUuNjQ0NzksNDY3LjM0NTIyIDY5OS4xMTIwOCw0NjguNDExMzkgNzAzLjc2NjAyLDQ2OS4wMjUzMyA3MDkuNzc2NjEsNDY5LjIyMjE3IDcxNC43NDM0NSw0NjkuMzEyMDcgNzE4LjgxMDg3LDQ2OS41NTY4NSA3MjEuNTU5MTMsNDY5LjkxOTEyIDcyMi41Njg0OSw0NzAuMzYxNSA3MjEuMzAxMDksNDc0LjExNTk3IDcxNy45OTg5NSw0NzkuODg4OCA3MTMuNDEyMTcsNDg2LjUwMjMyIDcwOC4yOTA4Myw0OTIuNzc4ODUgNjk2Ljc4NTkzLDUwNi40MjcyNiA2ODQuOTU0MDcsNTIxLjc0Njg3IDY3NS4zNDEyLDUzNS4zMDk0OCA2NzAuNDkzMjksNTQzLjY4Njg2IDY2OS42Njk4NSw1NDYuNjcxMTggNjY5LjQxNzEzLDU0OS4zMjM0OCA2NjkuNzM2MjgsNTUxLjczMTYzIDY3MC42Mjg0NCw1NTMuOTgzNSA2NzQuNzA2MzUsNTU4LjY4MTA0IDY4MS42NjM3Miw1NjQuMTA4MiA2ODkuOTgxNTMsNTY5LjIxNzI5IDY5OC4xNDA3Myw1NzIuOTYwNjIgNzAxLjIxMTUyLDU3NC4yNDEwNSA3MDMuODc5Nyw1NzUuNjg5NTQgNzA1Ljg1OTA0LDU3Ny4xMjgyNCA3MDYuODYzMjksNTc4LjM3OTM0IDcwNi4yNzA0LDU4MC44NjI5MyA3MDMuNzI2NDQsNTgzLjgzNDc3IDcwMC4yOTAyMyw1ODYuMzI3MzYgNjk3LjAyMDU5LDU4Ny4zNzMyMiA2OTQuNDA3MjgsNTg4LjE5NDQzIDY4OC42NDA0Myw1OTAuNDMwNCA2ODAuNTcyMTYsNTkzLjczOTY2IDY3MS4wNTQ2MSw1OTcuNzgwNzYgNjQyLjY1NjAzLDYxMC41Mjg3NSA2MjUuNDkxNTksNjE5LjgyMjEzIDYxNy4wNDEwNyw2MjcuMzEyMDUgNjE0Ljc4NDI3LDYzNC42NDk2OCA2MTYuNTk3MzMsNjQxLjA0MzkyIDYyMS4zNjU0NCw2NDkuMTM5IDYyOC4wODE5Niw2NTcuNDkyOTUgNjM1Ljc0MDI5LDY2NC42NjM4NCA2MzguMjA5MzUsNjY2Ljg2MTIgNjM5Ljk4MjIyLDY2OC45Nzc1NSA2NDAuOTExMzQsNjcwLjc5NzkxIDY0MC44NDkxMiw2NzIuMTA3MjcgNjI4LjIwMDE3LDY3NC4wNjI4NyA2MDAuNzg5NDEsNjczLjc5OTI5IDU2OC40OTY1NCw2NzEuNzA2NDcgNTQxLjIwMTI2LDY2OC4xNzQzNCA1MTYuNzk3OTQsNjYzLjM0MDYxIDQ5OS41Nzg2Myw2NTkuNDkxMjggNDg3LjMzMjg4LDY1Ni4wODE3NCA0NzcuODUwMjMsNjUyLjU2NzM5IDQ3MC43NjEsNjQ5LjgzODUzIDQ2MS4zMjIxOCw2NDYuNTkxNjEgNDUwLjc2NTM3LDY0My4yMzMzNyA0NDAuMzIyMTYsNjQwLjE3MDU4IDQyOS45OTg2NSw2MzcuMTI3MjggNDE5Ljc2ODkxLDYzMy44MjIxMSA0MTAuODE0MTMsNjMwLjY1Mzc0IDQwNC4zMTU1Myw2MjguMDIwODYgMzk5LjMzNjgxLDYyNS45MTk2NCAzOTQuNTE4NzksNjI0LjE5ODkgMzkwLjQxMTE2LDYyMy4wMzYyMiAzODcuNTYzNTYsNjIyLjYwOTE5IDM4NC44MzczNSw2MjIuOTAzMTQgMzgzLjM1OTQsNjI0LjQxMTE1IDM4Mi43NTA2Myw2MjguMDcyNDUgMzgyLjYzMTk1LDYzNC44MjYyOCAzODMuMjgwNDMsNjUwLjk3NDc0IDM4NS4wODIxLDY3MS4wMjQyOSAzODcuODIxMzYsNjkyLjk4MDQ3IDM5MS4yODI1OCw3MTQuODQ4ODYgMzk1LjA3MDUzLDczNy40MzgyMSAzOTYuNjc5MDEsNzUxLjM3MjkxIDM5Ni4yNDg0OCw3NTkuMjU0MzggMzkzLjkxOTM5LDc2My42ODQwNiAzODkuODkzMzYsNzY2LjAxMjA0IDM4NC4wMTkwNyw3NjcuNjI2MjcgMzc4LjcxODQyLDc2OC4wNzg4MiAzNzYuNDEzMzQsNzY2LjkyMTc3IDM3Ni40MTM3Miw3NjYuOTIxODEgMzc2LjQxNDEsNzY2LjkyMTg0IDM3Ni40MTQ0Nyw3NjYuOTIxODggMzc2LjQxNDg1LDc2Ni45MjE5MlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi45MzEzODQwOTtzdHJva2Utb3BhY2l0eToxXFxcIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsInZhciBleHRlbmRTdGF0aWNzPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGEpe3QuX19wcm90b19fPWF9fHxmdW5jdGlvbih0LGEpe2Zvcih2YXIgciBpbiBhKWEuaGFzT3duUHJvcGVydHkocikmJih0W3JdPWFbcl0pfTtmdW5jdGlvbiBfX2V4dGVuZHModCxhKXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fWV4dGVuZFN0YXRpY3ModCxhKSx0LnByb3RvdHlwZT1udWxsPT09YT9PYmplY3QuY3JlYXRlKGEpOihyLnByb3RvdHlwZT1hLnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gcm90YXRlKHQsYSl7dmFyIHI9dFswXSxlPXRbMV07cmV0dXJuW3IqTWF0aC5jb3MoYSktZSpNYXRoLnNpbihhKSxyKk1hdGguc2luKGEpK2UqTWF0aC5jb3MoYSldfWZ1bmN0aW9uIGFzc2VydE51bWJlcnMoKXtmb3IodmFyIHQ9W10sYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspdFthXT1hcmd1bWVudHNbYV07Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoXCJudW1iZXJcIiE9dHlwZW9mIHRbcl0pdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0TnVtYmVycyBhcmd1bWVudHNbXCIrcitcIl0gaXMgbm90IGEgbnVtYmVyLiBcIit0eXBlb2YgdFtyXStcIiA9PSB0eXBlb2YgXCIrdFtyXSk7cmV0dXJuITB9dmFyIFBJPU1hdGguUEk7ZnVuY3Rpb24gYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKXt0LmxBcmNGbGFnPTA9PT10LmxBcmNGbGFnPzA6MSx0LnN3ZWVwRmxhZz0wPT09dC5zd2VlcEZsYWc/MDoxO3ZhciBlPXQuclgsbj10LnJZLGk9dC54LG89dC55O2U9TWF0aC5hYnModC5yWCksbj1NYXRoLmFicyh0LnJZKTt2YXIgcz1yb3RhdGUoWyhhLWkpLzIsKHItbykvMl0sLXQueFJvdC8xODAqUEkpLGg9c1swXSx1PXNbMV0sYz1NYXRoLnBvdyhoLDIpL01hdGgucG93KGUsMikrTWF0aC5wb3codSwyKS9NYXRoLnBvdyhuLDIpOzE8YyYmKGUqPU1hdGguc3FydChjKSxuKj1NYXRoLnNxcnQoYykpLHQuclg9ZSx0LnJZPW47dmFyIG09TWF0aC5wb3coZSwyKSpNYXRoLnBvdyh1LDIpK01hdGgucG93KG4sMikqTWF0aC5wb3coaCwyKSxfPSh0LmxBcmNGbGFnIT09dC5zd2VlcEZsYWc/MTotMSkqTWF0aC5zcXJ0KE1hdGgubWF4KDAsKE1hdGgucG93KGUsMikqTWF0aC5wb3cobiwyKS1tKS9tKSksVD1lKnUvbipfLE89LW4qaC9lKl8scD1yb3RhdGUoW1QsT10sdC54Um90LzE4MCpQSSk7dC5jWD1wWzBdKyhhK2kpLzIsdC5jWT1wWzFdKyhyK28pLzIsdC5waGkxPU1hdGguYXRhbjIoKHUtTykvbiwoaC1UKS9lKSx0LnBoaTI9TWF0aC5hdGFuMigoLXUtTykvbiwoLWgtVCkvZSksMD09PXQuc3dlZXBGbGFnJiZ0LnBoaTI+dC5waGkxJiYodC5waGkyLT0yKlBJKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqUEkpLHQucGhpMSo9MTgwL1BJLHQucGhpMio9MTgwL1BJfWZ1bmN0aW9uIGludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKHQsYSxyKXthc3NlcnROdW1iZXJzKHQsYSxyKTt2YXIgZT10KnQrYSphLXIqcjtpZigwPmUpcmV0dXJuW107aWYoMD09PWUpcmV0dXJuW1t0KnIvKHQqdCthKmEpLGEqci8odCp0K2EqYSldXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuW1sodCpyK2EqbikvKHQqdCthKmEpLChhKnItdCpuKS8odCp0K2EqYSldLFsodCpyLWEqbikvKHQqdCthKmEpLChhKnIrdCpuKS8odCp0K2EqYSldXX12YXIgU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcixERUc9TWF0aC5QSS8xODA7ZnVuY3Rpb24gbGVycCh0LGEscil7cmV0dXJuKDEtcikqdCtyKmF9ZnVuY3Rpb24gYXJjQXQodCxhLHIsZSl7cmV0dXJuIHQrTWF0aC5jb3MoZS8xODAqUEkpKmErTWF0aC5zaW4oZS8xODAqUEkpKnJ9ZnVuY3Rpb24gYmV6aWVyUm9vdCh0LGEscixlKXt2YXIgbj1hLXQsaT1yLWEsbz0zKm4rMyooZS1yKS02Kmkscz02KihpLW4pLGg9MypuO3JldHVybiBNYXRoLmFicyhvKTwxZS02P1staC9zXTpwcUZvcm11bGEocy9vLGgvbywxZS02KX1mdW5jdGlvbiBiZXppZXJBdCh0LGEscixlLG4pe3ZhciBpPTEtbjtyZXR1cm4gdCooaSppKmkpK2EqKDMqaSppKm4pK3IqKDMqaSpuKm4pK2UqKG4qbipuKX1mdW5jdGlvbiBwcUZvcm11bGEodCxhLHIpe3ZvaWQgMD09PXImJihyPTFlLTYpO3ZhciBlPXQqdC80LWE7aWYoZTwtcilyZXR1cm5bXTtpZihlPD1yKXJldHVyblstdC8yXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuWy10LzItbiwtdC8yK25dfWZ1bmN0aW9uIGEyYyh0LGEscil7dmFyIGUsbixpLG87dC5jWHx8YW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKTtmb3IodmFyIHM9TWF0aC5taW4odC5waGkxLHQucGhpMiksaD1NYXRoLm1heCh0LnBoaTEsdC5waGkyKS1zLHU9TWF0aC5jZWlsKGgvOTApLGM9bmV3IEFycmF5KHUpLG09YSxfPXIsVD0wO1Q8dTtUKyspe3ZhciBPPWxlcnAodC5waGkxLHQucGhpMixUL3UpLHA9bGVycCh0LnBoaTEsdC5waGkyLChUKzEpL3UpLHk9cC1PLFM9NC8zKk1hdGgudGFuKHkqREVHLzQpLGY9W01hdGguY29zKE8qREVHKS1TKk1hdGguc2luKE8qREVHKSxNYXRoLnNpbihPKkRFRykrUypNYXRoLmNvcyhPKkRFRyldLFY9ZlswXSxOPWZbMV0sRD1bTWF0aC5jb3MocCpERUcpLE1hdGguc2luKHAqREVHKV0sUD1EWzBdLGw9RFsxXSx2PVtQK1MqTWF0aC5zaW4ocCpERUcpLGwtUypNYXRoLmNvcyhwKkRFRyldLEU9dlswXSxBPXZbMV07Y1tUXT17cmVsYXRpdmU6dC5yZWxhdGl2ZSx0eXBlOlNWR1BhdGhEYXRhLkNVUlZFX1RPfTt2YXIgZD1mdW5jdGlvbihhLHIpe3ZhciBlPXJvdGF0ZShbYSp0LnJYLHIqdC5yWV0sdC54Um90KSxuPWVbMF0saT1lWzFdO3JldHVyblt0LmNYK24sdC5jWStpXX07ZT1kKFYsTiksY1tUXS54MT1lWzBdLGNbVF0ueTE9ZVsxXSxuPWQoRSxBKSxjW1RdLngyPW5bMF0sY1tUXS55Mj1uWzFdLGk9ZChQLGwpLGNbVF0ueD1pWzBdLGNbVF0ueT1pWzFdLHQucmVsYXRpdmUmJihjW1RdLngxLT1tLGNbVF0ueTEtPV8sY1tUXS54Mi09bSxjW1RdLnkyLT1fLGNbVF0ueC09bSxjW1RdLnktPV8pLG09KG89W2NbVF0ueCxjW1RdLnldKVswXSxfPW9bMV19cmV0dXJuIGN9IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmUmJih2b2lkIDAhPT10LngxJiYodC54MSs9YSksdm9pZCAwIT09dC55MSYmKHQueTErPXIpLHZvaWQgMCE9PXQueDImJih0LngyKz1hKSx2b2lkIDAhPT10LnkyJiYodC55Mis9ciksdm9pZCAwIT09dC54JiYodC54Kz1hKSx2b2lkIDAhPT10LnkmJih0LnkrPXIpLHQucmVsYXRpdmU9ITEpLHR9KX1mdW5jdGlvbiByKCl7dmFyIHQ9TmFOLGE9TmFOLHI9TmFOLGU9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4saSxvKXtyZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0PWlzTmFOKHQpP2k6dCxhPWlzTmFOKGEpP286YSxuLngxPW4ucmVsYXRpdmU/aS10OjIqaS10LG4ueTE9bi5yZWxhdGl2ZT9vLWE6MipvLWEpLG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UTz8odD1uLnJlbGF0aXZlP2krbi54MjpuLngyLGE9bi5yZWxhdGl2ZT9vK24ueTI6bi55Mik6KHQ9TmFOLGE9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihuLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyxyPWlzTmFOKHIpP2k6cixlPWlzTmFOKGUpP286ZSxuLngxPW4ucmVsYXRpdmU/aS1yOjIqaS1yLG4ueTE9bi5yZWxhdGl2ZT9vLWU6MipvLWUpLG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhyPW4ucmVsYXRpdmU/aStuLngxOm4ueDEsZT1uLnJlbGF0aXZlP28rbi55MTpuLnkxKToocj1OYU4sZT1OYU4pLG59KX1mdW5jdGlvbiBlKCl7dmFyIHQ9TmFOLGE9TmFOO3JldHVybiBuKGZ1bmN0aW9uKHIsZSxuKXtpZihyLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihyLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyx0PWlzTmFOKHQpP2U6dCxhPWlzTmFOKGEpP246YSxyLngxPXIucmVsYXRpdmU/ZS10OjIqZS10LHIueTE9ci5yZWxhdGl2ZT9uLWE6MipuLWEpLHIudHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPKXt0PXIucmVsYXRpdmU/ZStyLngxOnIueDEsYT1yLnJlbGF0aXZlP24rci55MTpyLnkxO3ZhciBpPXIueDEsbz1yLnkxO3IudHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyxyLngxPSgoci5yZWxhdGl2ZT8wOmUpKzIqaSkvMyxyLnkxPSgoci5yZWxhdGl2ZT8wOm4pKzIqbykvMyxyLngyPShyLngrMippKS8zLHIueTI9KHIueSsyKm8pLzN9ZWxzZSB0PU5hTixhPU5hTjtyZXR1cm4gcn0pfWZ1bmN0aW9uIG4odCl7dmFyIGE9MCxyPTAsZT1OYU4sbj1OYU47cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKGlzTmFOKGUpJiYhKGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7dmFyIG89dChpLGEscixlLG4pO3JldHVybiBpLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGE9ZSxyPW4pLHZvaWQgMCE9PWkueCYmKGE9aS5yZWxhdGl2ZT9hK2kueDppLngpLHZvaWQgMCE9PWkueSYmKHI9aS5yZWxhdGl2ZT9yK2kueTppLnkpLGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPJiYoZT1hLG49ciksb319ZnVuY3Rpb24gaSh0LGEscixlLGksbyl7cmV0dXJuIGFzc2VydE51bWJlcnModCxhLHIsZSxpLG8pLG4oZnVuY3Rpb24obixzLGgsdSl7dmFyIGM9bi54MSxtPW4ueDIsXz1uLnJlbGF0aXZlJiYhaXNOYU4odSksVD12b2lkIDAhPT1uLng/bi54Ol8/MDpzLE89dm9pZCAwIT09bi55P24ueTpfPzA6aDtmdW5jdGlvbiBwKHQpe3JldHVybiB0KnR9bi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJjAhPT1hJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi55PW4ucmVsYXRpdmU/MDpoKSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYwIT09ciYmKG4udHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLG4ueD1uLnJlbGF0aXZlPzA6cyksdm9pZCAwIT09bi54JiYobi54PW4ueCp0K08qcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkmJihuLnk9VCphK24ueSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDEmJihuLngxPW4ueDEqdCtuLnkxKnIrKF8/MDppKSksdm9pZCAwIT09bi55MSYmKG4ueTE9YyphK24ueTEqZSsoXz8wOm8pKSx2b2lkIDAhPT1uLngyJiYobi54Mj1uLngyKnQrbi55MipyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueTImJihuLnkyPW0qYStuLnkyKmUrKF8/MDpvKSk7dmFyIHk9dCplLWEqcjtpZih2b2lkIDAhPT1uLnhSb3QmJigxIT09dHx8MCE9PWF8fDAhPT1yfHwxIT09ZSkpaWYoMD09PXkpZGVsZXRlIG4uclgsZGVsZXRlIG4uclksZGVsZXRlIG4ueFJvdCxkZWxldGUgbi5sQXJjRmxhZyxkZWxldGUgbi5zd2VlcEZsYWcsbi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE87ZWxzZXt2YXIgUz1uLnhSb3QqTWF0aC5QSS8xODAsZj1NYXRoLnNpbihTKSxWPU1hdGguY29zKFMpLE49MS9wKG4uclgpLEQ9MS9wKG4uclkpLFA9cChWKSpOK3AoZikqRCxsPTIqZipWKihOLUQpLHY9cChmKSpOK3AoVikqRCxFPVAqZSplLWwqYSplK3YqYSphLEE9bCoodCplK2EqciktMiooUCpyKmUrdip0KmEpLGQ9UCpyKnItbCp0KnIrdip0KnQsRz0oTWF0aC5hdGFuMihBLEUtZCkrTWF0aC5QSSklTWF0aC5QSS8yLEM9TWF0aC5zaW4oRykseD1NYXRoLmNvcyhHKTtuLnJYPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoeCkrQSpDKngrZCpwKEMpKSxuLnJZPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoQyktQSpDKngrZCpwKHgpKSxuLnhSb3Q9MTgwKkcvTWF0aC5QSX1yZXR1cm4gdm9pZCAwIT09bi5zd2VlcEZsYWcmJjA+eSYmKG4uc3dlZXBGbGFnPSshbi5zd2VlcEZsYWcpLG59KX1mdW5jdGlvbiBvKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX19dC5ST1VORD1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqdCkvdH1yZXR1cm4gdm9pZCAwPT09dCYmKHQ9MWUxMyksYXNzZXJ0TnVtYmVycyh0KSxmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC54MSYmKHQueDE9YSh0LngxKSksdm9pZCAwIT09dC55MSYmKHQueTE9YSh0LnkxKSksdm9pZCAwIT09dC54MiYmKHQueDI9YSh0LngyKSksdm9pZCAwIT09dC55MiYmKHQueTI9YSh0LnkyKSksdm9pZCAwIT09dC54JiYodC54PWEodC54KSksdm9pZCAwIT09dC55JiYodC55PWEodC55KSksdH19LHQuVE9fQUJTPWEsdC5UT19SRUw9ZnVuY3Rpb24oKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmV8fCh2b2lkIDAhPT10LngxJiYodC54MS09YSksdm9pZCAwIT09dC55MSYmKHQueTEtPXIpLHZvaWQgMCE9PXQueDImJih0LngyLT1hKSx2b2lkIDAhPT10LnkyJiYodC55Mi09ciksdm9pZCAwIT09dC54JiYodC54LT1hKSx2b2lkIDAhPT10LnkmJih0LnktPXIpLHQucmVsYXRpdmU9ITApLHR9KX0sdC5OT1JNQUxJWkVfSFZaPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PWEmJihhPSEwKSx2b2lkIDA9PT1yJiYocj0hMCksbihmdW5jdGlvbihlLG4saSxvLHMpe2lmKGlzTmFOKG8pJiYhKGUudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7cmV0dXJuIGEmJmUudHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS55PWUucmVsYXRpdmU/MDppKSxyJiZlLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/MDpuKSx0JiZlLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGUueD1lLnJlbGF0aXZlP28tbjpvLGUueT1lLnJlbGF0aXZlP3MtaTpzKSxlLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PWUuclh8fDA9PT1lLnJZKSYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGRlbGV0ZSBlLnJYLGRlbGV0ZSBlLnJZLGRlbGV0ZSBlLnhSb3QsZGVsZXRlIGUubEFyY0ZsYWcsZGVsZXRlIGUuc3dlZXBGbGFnKSxlfSl9LHQuTk9STUFMSVpFX1NUPXIsdC5RVF9UT19DPWUsdC5JTkZPPW4sdC5TQU5JVElaRT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpO3ZhciBhPU5hTixyPU5hTixlPU5hTixpPU5hTjtyZXR1cm4gbihmdW5jdGlvbihuLG8scyxoLHUpe3ZhciBjPU1hdGguYWJzLG09ITEsXz0wLFQ9MDtpZihuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYoXz1pc05hTihhKT8wOm8tYSxUPWlzTmFOKHIpPzA6cy1yKSxuLnR5cGUmKFNWR1BhdGhEYXRhLkNVUlZFX1RPfFNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyk/KGE9bi5yZWxhdGl2ZT9vK24ueDI6bi54MixyPW4ucmVsYXRpdmU/cytuLnkyOm4ueTIpOihhPU5hTixyPU5hTiksbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPPyhlPWlzTmFOKGUpP286MipvLWUsaT1pc05hTihpKT9zOjIqcy1pKTpuLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UTz8oZT1uLnJlbGF0aXZlP28rbi54MTpuLngxLGk9bi5yZWxhdGl2ZT9zK24ueTE6bi55Mik6KGU9TmFOLGk9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuTElORV9DT01NQU5EU3x8bi50eXBlJlNWR1BhdGhEYXRhLkFSQyYmKDA9PT1uLnJYfHwwPT09bi5yWXx8IW4ubEFyY0ZsYWcpfHxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPfHxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pe3ZhciBPPXZvaWQgMD09PW4ueD8wOm4ucmVsYXRpdmU/bi54Om4ueC1vLHA9dm9pZCAwPT09bi55PzA6bi5yZWxhdGl2ZT9uLnk6bi55LXM7Xz1pc05hTihlKT92b2lkIDA9PT1uLngxP186bi5yZWxhdGl2ZT9uLng6bi54MS1vOmUtbyxUPWlzTmFOKGkpP3ZvaWQgMD09PW4ueTE/VDpuLnJlbGF0aXZlP24ueTpuLnkxLXM6aS1zO3ZhciB5PXZvaWQgMD09PW4ueDI/MDpuLnJlbGF0aXZlP24ueDpuLngyLW8sUz12b2lkIDA9PT1uLnkyPzA6bi5yZWxhdGl2ZT9uLnk6bi55Mi1zO2MoTyk8PXQmJmMocCk8PXQmJmMoXyk8PXQmJmMoVCk8PXQmJmMoeSk8PXQmJmMoUyk8PXQmJihtPSEwKX1yZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLkNMT1NFX1BBVEgmJmMoby1oKTw9dCYmYyhzLXUpPD10JiYobT0hMCksbT9bXTpufSl9LHQuTUFUUklYPWksdC5ST1RBVEU9ZnVuY3Rpb24odCxhLHIpe3ZvaWQgMD09PWEmJihhPTApLHZvaWQgMD09PXImJihyPTApLGFzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPU1hdGguc2luKHQpLG49TWF0aC5jb3ModCk7cmV0dXJuIGkobixlLC1lLG4sYS1hKm4rciplLHItYSplLXIqbil9LHQuVFJBTlNMQVRFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPTApLGFzc2VydE51bWJlcnModCxhKSxpKDEsMCwwLDEsdCxhKX0sdC5TQ0FMRT1mdW5jdGlvbih0LGEpe3JldHVybiB2b2lkIDA9PT1hJiYoYT10KSxhc3NlcnROdW1iZXJzKHQsYSksaSh0LDAsMCxhLDAsMCl9LHQuU0tFV19YPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSwwLE1hdGguYXRhbih0KSwxLDAsMCl9LHQuU0tFV19ZPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSxNYXRoLmF0YW4odCksMCwxLDAsMCl9LHQuWF9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpLGkoLTEsMCwwLDEsdCwwKX0sdC5ZX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgxLDAsMCwtMSwwLHQpfSx0LkFfVE9fQz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlP2EyYyh0LHQucmVsYXRpdmU/MDphLHQucmVsYXRpdmU/MDpyKTp0fSl9LHQuQU5OT1RBVEVfQVJDUz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKGE9MCxyPTApLFNWR1BhdGhEYXRhLkFSQz09PXQudHlwZSYmYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKSx0fSl9LHQuQ0xPTkU9byx0LkNBTENVTEFURV9CT1VORFM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbih0KXt2YXIgYT17fTtmb3IodmFyIHIgaW4gdClhW3JdPXRbcl07cmV0dXJuIGF9LGk9YSgpLG89ZSgpLHM9cigpLGg9bihmdW5jdGlvbihhLHIsZSl7dmFyIG49cyhvKGkodChhKSkpKTtmdW5jdGlvbiB1KHQpe3Q+aC5tYXhYJiYoaC5tYXhYPXQpLHQ8aC5taW5YJiYoaC5taW5YPXQpfWZ1bmN0aW9uIGModCl7dD5oLm1heFkmJihoLm1heFk9dCksdDxoLm1pblkmJihoLm1pblk9dCl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkRSQVdJTkdfQ09NTUFORFMmJih1KHIpLGMoZSkpLG4udHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiZ1KG4ueCksbi50eXBlJlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyYmYyhuLnkpLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX1RPJiYodShuLngpLGMobi55KSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPKXt1KG4ueCksYyhuLnkpO2Zvcih2YXIgbT0wLF89YmV6aWVyUm9vdChyLG4ueDEsbi54MixuLngpO208Xy5sZW5ndGg7bSsrKTA8KEc9X1ttXSkmJjE+RyYmdShiZXppZXJBdChyLG4ueDEsbi54MixuLngsRykpO2Zvcih2YXIgVD0wLE89YmV6aWVyUm9vdChlLG4ueTEsbi55MixuLnkpO1Q8Ty5sZW5ndGg7VCsrKTA8KEc9T1tUXSkmJjE+RyYmYyhiZXppZXJBdChlLG4ueTEsbi55MixuLnksRykpfWlmKG4udHlwZSZTVkdQYXRoRGF0YS5BUkMpe3Uobi54KSxjKG4ueSksYW5ub3RhdGVBcmNDb21tYW5kKG4scixlKTtmb3IodmFyIHA9bi54Um90LzE4MCpNYXRoLlBJLHk9TWF0aC5jb3MocCkqbi5yWCxTPU1hdGguc2luKHApKm4uclgsZj0tTWF0aC5zaW4ocCkqbi5yWSxWPU1hdGguY29zKHApKm4uclksTj1uLnBoaTE8bi5waGkyP1tuLnBoaTEsbi5waGkyXTotMTgwPm4ucGhpMj9bbi5waGkyKzM2MCxuLnBoaTErMzYwXTpbbi5waGkyLG4ucGhpMV0sRD1OWzBdLFA9TlsxXSxsPWZ1bmN0aW9uKHQpe3ZhciBhPXRbMF0scj10WzFdLGU9MTgwKk1hdGguYXRhbjIocixhKS9NYXRoLlBJO3JldHVybiBlPEQ/ZSszNjA6ZX0sdj0wLEU9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoZiwteSwwKS5tYXAobCk7djxFLmxlbmd0aDt2KyspKEc9RVt2XSk+RCYmRzxQJiZ1KGFyY0F0KG4uY1gseSxmLEcpKTtmb3IodmFyIEE9MCxkPWludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKFYsLVMsMCkubWFwKGwpO0E8ZC5sZW5ndGg7QSsrKXt2YXIgRzsoRz1kW0FdKT5EJiZHPFAmJmMoYXJjQXQobi5jWSxTLFYsRykpfX1yZXR1cm4gYX0pO3JldHVybiBoLm1pblg9MS8wLGgubWF4WD0tMS8wLGgubWluWT0xLzAsaC5tYXhZPS0xLzAsaH19KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ8fChTVkdQYXRoRGF0YVRyYW5zZm9ybWVyPXt9KSk7dmFyIF9hLF9hJDEsVHJhbnNmb3JtYWJsZVNWRz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLnJvdW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlJPVU5EKHQpKX0sdC5wcm90b3R5cGUudG9BYnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19BQlMoKSl9LHQucHJvdG90eXBlLnRvUmVsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuVE9fUkVMKCkpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVIVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9IVloodCxhLHIpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplU1Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5OT1JNQUxJWkVfU1QoKSl9LHQucHJvdG90eXBlLnF0VG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUVRfVE9fQygpKX0sdC5wcm90b3R5cGUuYVRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkFfVE9fQygpKX0sdC5wcm90b3R5cGUuc2FuaXRpemU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0FOSVRJWkUodCkpfSx0LnByb3RvdHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UUkFOU0xBVEUodCxhKSl9LHQucHJvdG90eXBlLnNjYWxlPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0NBTEUodCxhKSl9LHQucHJvdG90eXBlLnJvdGF0ZT1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9UQVRFKHQsYSxyKSl9LHQucHJvdG90eXBlLm1hdHJpeD1mdW5jdGlvbih0LGEscixlLG4saSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTUFUUklYKHQsYSxyLGUsbixpKSl9LHQucHJvdG90eXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWCh0KSl9LHQucHJvdG90eXBlLnNrZXdZPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWSh0KSl9LHQucHJvdG90eXBlLnhTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5YX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS55U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuWV9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUuYW5ub3RhdGVBcmNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQU5OT1RBVEVfQVJDUygpKX0sdH0oKSxpc1doaXRlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuXCIgXCI9PT10fHxcIlxcdFwiPT09dHx8XCJcXHJcIj09PXR8fFwiXFxuXCI9PT10fSxpc0RpZ2l0PWZ1bmN0aW9uKHQpe3JldHVyblwiMFwiLmNoYXJDb2RlQXQoMCk8PXQuY2hhckNvZGVBdCgwKSYmdC5jaGFyQ29kZUF0KDApPD1cIjlcIi5jaGFyQ29kZUF0KDApfSxTVkdQYXRoRGF0YVBhcnNlciQkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKCl7dmFyIGE9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBhLmN1ck51bWJlcj1cIlwiLGEuY3VyQ29tbWFuZFR5cGU9LTEsYS5jdXJDb21tYW5kUmVsYXRpdmU9ITEsYS5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLGEuY3VyTnVtYmVySGFzRXhwPSExLGEuY3VyTnVtYmVySGFzRXhwRGlnaXRzPSExLGEuY3VyTnVtYmVySGFzRGVjaW1hbD0hMSxhLmN1ckFyZ3M9W10sYX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQmJih0PVtdKSx0aGlzLnBhcnNlKFwiIFwiLHQpLDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RofHwhdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IHRoZSBwYXRoIGVuZC5cIik7cmV0dXJuIHR9LGEucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKHQsYSl7dmFyIHI9dGhpczt2b2lkIDA9PT1hJiYoYT1bXSk7Zm9yKHZhciBlPWZ1bmN0aW9uKHQpe2EucHVzaCh0KSxyLmN1ckFyZ3MubGVuZ3RoPTAsci5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aWYoaXNEaWdpdChpKSl0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz10aGlzLmN1ck51bWJlckhhc0V4cDtlbHNlIGlmKFwiZVwiIT09aSYmXCJFXCIhPT1pKWlmKFwiLVwiIT09aSYmXCIrXCIhPT1pfHwhdGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzKWlmKFwiLlwiIT09aXx8dGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbCl7aWYodGhpcy5jdXJOdW1iZXImJi0xIT09dGhpcy5jdXJDb21tYW5kVHlwZSl7dmFyIG89TnVtYmVyKHRoaXMuY3VyTnVtYmVyKTtpZihpc05hTihvKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJJbnZhbGlkIG51bWJlciBlbmRpbmcgYXQgXCIrbik7aWYodGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkFSQylpZigwPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8MT09PXRoaXMuY3VyQXJncy5sZW5ndGgpe2lmKDA+byl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIG51bWJlciwgZ290IFwiJytvKydcIiBhdCBpbmRleCBcIicrbisnXCInKX1lbHNlIGlmKCgzPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8ND09PXRoaXMuY3VyQXJncy5sZW5ndGgpJiZcIjBcIiE9PXRoaXMuY3VyTnVtYmVyJiZcIjFcIiE9PXRoaXMuY3VyTnVtYmVyKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgYSBmbGFnLCBnb3QgXCInK3RoaXMuY3VyTnVtYmVyKydcIiBhdCBpbmRleCBcIicrbisnXCInKTt0aGlzLmN1ckFyZ3MucHVzaChvKSx0aGlzLmN1ckFyZ3MubGVuZ3RoPT09Q09NTUFORF9BUkdfQ09VTlRTW3RoaXMuY3VyQ29tbWFuZFR5cGVdJiYoU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6b30pOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseTpvfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5MSU5FX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGUoe3R5cGU6dGhpcy5jdXJDb21tYW5kVHlwZSxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4OnRoaXMuY3VyQXJnc1swXSx5OnRoaXMuY3VyQXJnc1sxXX0pLFNWR1BhdGhEYXRhLk1PVkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlJiYodGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPKSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkNVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4Mjp0aGlzLmN1ckFyZ3NbMl0seTI6dGhpcy5jdXJBcmdzWzNdLHg6dGhpcy5jdXJBcmdzWzRdLHk6dGhpcy5jdXJBcmdzWzVdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4Mjp0aGlzLmN1ckFyZ3NbMF0seTI6dGhpcy5jdXJBcmdzWzFdLHg6dGhpcy5jdXJBcmdzWzJdLHk6dGhpcy5jdXJBcmdzWzNdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5RVUFEX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDJiZlKHt0eXBlOlNWR1BhdGhEYXRhLkFSQyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSxyWDp0aGlzLmN1ckFyZ3NbMF0sclk6dGhpcy5jdXJBcmdzWzFdLHhSb3Q6dGhpcy5jdXJBcmdzWzJdLGxBcmNGbGFnOnRoaXMuY3VyQXJnc1szXSxzd2VlcEZsYWc6dGhpcy5jdXJBcmdzWzRdLHg6dGhpcy5jdXJBcmdzWzVdLHk6dGhpcy5jdXJBcmdzWzZdfSkpLHRoaXMuY3VyTnVtYmVyPVwiXCIsdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITEsdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH1pZighaXNXaGl0ZVNwYWNlKGkpKWlmKFwiLFwiPT09aSYmdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMTtlbHNlIGlmKFwiK1wiIT09aSYmXCItXCIhPT1pJiZcIi5cIiE9PWkpe2lmKDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RoKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IGluZGV4IFwiK24rXCIuXCIpO2lmKCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLiBDb21tYW5kIGNhbm5vdCBmb2xsb3cgY29tbWFcIik7aWYodGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExLFwielwiIT09aSYmXCJaXCIhPT1pKWlmKFwiaFwiPT09aXx8XCJIXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImhcIj09PWk7ZWxzZSBpZihcInZcIj09PWl8fFwiVlwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInZcIj09PWk7ZWxzZSBpZihcIm1cIj09PWl8fFwiTVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLk1PVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJtXCI9PT1pO2Vsc2UgaWYoXCJsXCI9PT1pfHxcIkxcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibFwiPT09aTtlbHNlIGlmKFwiY1wiPT09aXx8XCJDXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJjXCI9PT1pO2Vsc2UgaWYoXCJzXCI9PT1pfHxcIlNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJzXCI9PT1pO2Vsc2UgaWYoXCJxXCI9PT1pfHxcIlFcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwicVwiPT09aTtlbHNlIGlmKFwidFwiPT09aXx8XCJUXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJ0XCI9PT1pO2Vsc2V7aWYoXCJhXCIhPT1pJiZcIkFcIiE9PWkpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLlwiKTt0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkFSQyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImFcIj09PWl9ZWxzZSBhLnB1c2goe3R5cGU6U1ZHUGF0aERhdGEuQ0xPU0VfUEFUSH0pLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCx0aGlzLmN1ckNvbW1hbmRUeXBlPS0xfWVsc2UgdGhpcy5jdXJOdW1iZXI9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9XCIuXCI9PT1pfWVsc2UgdGhpcy5jdXJOdW1iZXIrPWksdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSEwO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPWk7ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMH1yZXR1cm4gYX0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuY3JlYXRlKHRoaXMse3BhcnNlOnt2YWx1ZTpmdW5jdGlvbihhLHIpe3ZvaWQgMD09PXImJihyPVtdKTtmb3IodmFyIGU9MCxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZS5jYWxsKHRoaXMsYSk7ZTxuLmxlbmd0aDtlKyspe3ZhciBpPW5bZV0sbz10KGkpO0FycmF5LmlzQXJyYXkobyk/ci5wdXNoLmFwcGx5KHIsbyk6ci5wdXNoKG8pfXJldHVybiByfX19KX0sYX0oVHJhbnNmb3JtYWJsZVNWRyksU1ZHUGF0aERhdGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYShyKXt2YXIgZT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuY29tbWFuZHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/YS5wYXJzZShyKTpyLGV9cmV0dXJuIF9fZXh0ZW5kcyhhLHQpLGEucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbigpe3JldHVybiBhLmVuY29kZSh0aGlzLmNvbW1hbmRzKX0sYS5wcm90b3R5cGUuZ2V0Qm91bmRzPWZ1bmN0aW9uKCl7dmFyIHQ9U1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5DQUxDVUxBVEVfQk9VTkRTKCk7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHQpLHR9LGEucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtmb3IodmFyIGE9W10scj0wLGU9dGhpcy5jb21tYW5kcztyPGUubGVuZ3RoO3IrKyl7dmFyIG49dChlW3JdKTtBcnJheS5pc0FycmF5KG4pP2EucHVzaC5hcHBseShhLG4pOmEucHVzaChuKX1yZXR1cm4gdGhpcy5jb21tYW5kcz1hLHRoaXN9LGEuZW5jb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBlbmNvZGVTVkdQYXRoJCQxKHQpfSxhLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciBhPW5ldyBTVkdQYXRoRGF0YVBhcnNlciQkMSxyPVtdO3JldHVybiBhLnBhcnNlKHQsciksYS5maW5pc2gocikscn0sYS5DTE9TRV9QQVRIPTEsYS5NT1ZFX1RPPTIsYS5IT1JJWl9MSU5FX1RPPTQsYS5WRVJUX0xJTkVfVE89OCxhLkxJTkVfVE89MTYsYS5DVVJWRV9UTz0zMixhLlNNT09USF9DVVJWRV9UTz02NCxhLlFVQURfVE89MTI4LGEuU01PT1RIX1FVQURfVE89MjU2LGEuQVJDPTUxMixhLkxJTkVfQ09NTUFORFM9YS5MSU5FX1RPfGEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UTyxhLkRSQVdJTkdfQ09NTUFORFM9YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPfGEuTElORV9UT3xhLkNVUlZFX1RPfGEuU01PT1RIX0NVUlZFX1RPfGEuUVVBRF9UT3xhLlNNT09USF9RVUFEX1RPfGEuQVJDLGF9KFRyYW5zZm9ybWFibGVTVkcpLENPTU1BTkRfQVJHX0NPVU5UUz0oKF9hPXt9KVtTVkdQYXRoRGF0YS5NT1ZFX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkxJTkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE9dPTEsX2FbU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSF09MCxfYVtTVkdQYXRoRGF0YS5RVUFEX1RPXT00LF9hW1NWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkNVUlZFX1RPXT02LF9hW1NWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT109NCxfYVtTVkdQYXRoRGF0YS5BUkNdPTcsX2EpLFdTUD1cIiBcIjtmdW5jdGlvbiBlbmNvZGVTVkdQYXRoJCQxKHQpe3ZhciBhPVwiXCI7QXJyYXkuaXNBcnJheSh0KXx8KHQ9W3RdKTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGU9dFtyXTtpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DTE9TRV9QQVRIKWErPVwielwiO2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImhcIjpcIkhcIikrZS54O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1widlwiOlwiVlwiKStlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5NT1ZFX1RPKWErPShlLnJlbGF0aXZlP1wibVwiOlwiTVwiKStlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJsXCI6XCJMXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJjXCI6XCJDXCIpK2UueDErV1NQK2UueTErV1NQK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKWErPShlLnJlbGF0aXZlP1wic1wiOlwiU1wiKStlLngyK1dTUCtlLnkyK1dTUCtlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJxXCI6XCJRXCIpK2UueDErV1NQK2UueTErV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2UueCtXU1ArZS55O2Vsc2V7aWYoZS50eXBlIT09U1ZHUGF0aERhdGEuQVJDKXRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb21tYW5kIHR5cGUgXCInK2UudHlwZSsnXCIgYXQgaW5kZXggJytyK1wiLlwiKTthKz0oZS5yZWxhdGl2ZT9cImFcIjpcIkFcIikrZS5yWCtXU1ArZS5yWStXU1ArZS54Um90K1dTUCsgK2UubEFyY0ZsYWcrV1NQKyArZS5zd2VlcEZsYWcrV1NQK2UueCtXU1ArZS55fX1yZXR1cm4gYX12YXIgU1ZHUGF0aERhdGEkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTJDE9KChfYSQxPXt9KVtTVkdQYXRoRGF0YSQxLk1PVkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkxJTkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkhPUklaX0xJTkVfVE9dPTEsX2EkMVtTVkdQYXRoRGF0YSQxLlZFUlRfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuQ0xPU0VfUEFUSF09MCxfYSQxW1NWR1BhdGhEYXRhJDEuUVVBRF9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuU01PT1RIX1FVQURfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkNVUlZFX1RPXT02LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfQ1VSVkVfVE9dPTQsX2EkMVtTVkdQYXRoRGF0YSQxLkFSQ109NyxfYSQxKTtleHBvcnR7U1ZHUGF0aERhdGEkMSBhcyBTVkdQYXRoRGF0YSxDT01NQU5EX0FSR19DT1VOVFMkMSBhcyBDT01NQU5EX0FSR19DT1VOVFMsZW5jb2RlU1ZHUGF0aCQkMSBhcyBlbmNvZGVTVkdQYXRoLFNWR1BhdGhEYXRhUGFyc2VyJCQxIGFzIFNWR1BhdGhEYXRhUGFyc2VyLFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U1ZHUGF0aERhdGEubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHRvUGF0aCBmcm9tICcuL3RvUGF0aCc7XG5pbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5pbXBvcnQgdmFsaWQgZnJvbSAnLi92YWxpZCc7XG5cbmV4cG9ydCB7IHRvUGF0aCwgdG9Qb2ludHMsIHZhbGlkIH07IiwiaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuXG52YXIgcG9pbnRzVG9EID0gZnVuY3Rpb24gcG9pbnRzVG9EKHApIHtcbiAgdmFyIGQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgZmlyc3RQb2ludCA9IHZvaWQgMDtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIHBvaW50ID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgX3BvaW50JGN1cnZlID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgY3VydmUgPSBfcG9pbnQkY3VydmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BvaW50JGN1cnZlLFxuICAgICAgICAgIG1vdmVUbyA9IHBvaW50Lm1vdmVUbyxcbiAgICAgICAgICB4ID0gcG9pbnQueCxcbiAgICAgICAgICB5ID0gcG9pbnQueTtcblxuICAgICAgdmFyIGlzRmlyc3RQb2ludCA9IGkgPT09IDAgfHwgbW92ZVRvO1xuICAgICAgdmFyIGlzTGFzdFBvaW50ID0gaSA9PT0gcC5sZW5ndGggLSAxIHx8IHBbaSArIDFdLm1vdmVUbztcbiAgICAgIHZhciBwcmV2UG9pbnQgPSBpID09PSAwID8gbnVsbCA6IHBbaSAtIDFdO1xuXG4gICAgICBpZiAoaXNGaXJzdFBvaW50KSB7XG4gICAgICAgIGZpcnN0UG9pbnQgPSBwb2ludDtcblxuICAgICAgICBpZiAoIWlzTGFzdFBvaW50KSB7XG4gICAgICAgICAgZCArPSAnTScgKyB4ICsgJywnICsgeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJ2ZSkge1xuICAgICAgICBzd2l0Y2ggKGN1cnZlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdhcmMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTIgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJGxhcmdlQXIgPSBfcG9pbnQkY3VydmUyLmxhcmdlQXJjRmxhZyxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWcgPSBfcG9pbnQkY3VydmUyJGxhcmdlQXIgPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJGxhcmdlQXIsXG4gICAgICAgICAgICAgICAgcnggPSBfcG9pbnQkY3VydmUyLnJ4LFxuICAgICAgICAgICAgICAgIHJ5ID0gX3BvaW50JGN1cnZlMi5yeSxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHN3ZWVwRmwgPSBfcG9pbnQkY3VydmUyLnN3ZWVwRmxhZyxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWcgPSBfcG9pbnQkY3VydmUyJHN3ZWVwRmwgPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJHN3ZWVwRmwsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiR4QXhpc1JvID0gX3BvaW50JGN1cnZlMi54QXhpc1JvdGF0aW9uLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb24gPSBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJHhBeGlzUm87XG5cbiAgICAgICAgICAgIGQgKz0gJ0EnICsgcnggKyAnLCcgKyByeSArICcsJyArIHhBeGlzUm90YXRpb24gKyAnLCcgKyBsYXJnZUFyY0ZsYWcgKyAnLCcgKyBzd2VlcEZsYWcgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2N1YmljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUzID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgY3gxID0gX3BvaW50JGN1cnZlMy54MSxcbiAgICAgICAgICAgICAgICBjeTEgPSBfcG9pbnQkY3VydmUzLnkxLFxuICAgICAgICAgICAgICAgIGN4MiA9IF9wb2ludCRjdXJ2ZTMueDIsXG4gICAgICAgICAgICAgICAgY3kyID0gX3BvaW50JGN1cnZlMy55MjtcblxuICAgICAgICAgICAgZCArPSAnQycgKyBjeDEgKyAnLCcgKyBjeTEgKyAnLCcgKyBjeDIgKyAnLCcgKyBjeTIgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3F1YWRyYXRpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlNCA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIHF4MSA9IF9wb2ludCRjdXJ2ZTQueDEsXG4gICAgICAgICAgICAgICAgcXkxID0gX3BvaW50JGN1cnZlNC55MTtcblxuICAgICAgICAgICAgZCArPSAnUScgKyBxeDEgKyAnLCcgKyBxeTEgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgICBkICs9ICdaJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ1onO1xuICAgICAgfSBlbHNlIGlmICh4ICE9PSBwcmV2UG9pbnQueCAmJiB5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdMJyArIHggKyAnLCcgKyB5O1xuICAgICAgfSBlbHNlIGlmICh4ICE9PSBwcmV2UG9pbnQueCkge1xuICAgICAgICBkICs9ICdIJyArIHg7XG4gICAgICB9IGVsc2UgaWYgKHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ1YnICsgeTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZDtcbn07XG5cbnZhciB0b1BhdGggPSBmdW5jdGlvbiB0b1BhdGgocykge1xuICB2YXIgaXNQb2ludHMgPSBBcnJheS5pc0FycmF5KHMpO1xuICB2YXIgaXNHcm91cCA9IGlzUG9pbnRzID8gQXJyYXkuaXNBcnJheShzWzBdKSA6IHMudHlwZSA9PT0gJ2cnO1xuICB2YXIgcG9pbnRzID0gaXNQb2ludHMgPyBzIDogaXNHcm91cCA/IHMuc2hhcGVzLm1hcChmdW5jdGlvbiAoc2hwKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHNocCk7XG4gIH0pIDogdG9Qb2ludHMocyk7XG5cbiAgaWYgKGlzR3JvdXApIHtcbiAgICByZXR1cm4gcG9pbnRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHBvaW50c1RvRChwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwb2ludHNUb0QocG9pbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUGF0aDsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciB0b1BvaW50cyA9IGZ1bmN0aW9uIHRvUG9pbnRzKF9yZWYpIHtcbiAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3R5cGUnXSk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tQ2lyY2xlKHByb3BzKTtcbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRWxsaXBzZShwcm9wcyk7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21QYXRoKHByb3BzKTtcbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWdvbihwcm9wcyk7XG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5bGluZShwcm9wcyk7XG4gICAgY2FzZSAncmVjdCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3QocHJvcHMpO1xuICAgIGNhc2UgJ2cnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21HKHByb3BzKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBzaGFwZSB0eXBlJyk7XG4gIH1cbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQ2lyY2xlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUNpcmNsZShfcmVmMikge1xuICB2YXIgY3ggPSBfcmVmMi5jeCxcbiAgICAgIGN5ID0gX3JlZjIuY3ksXG4gICAgICByID0gX3JlZjIucjtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gciwgbW92ZVRvOiB0cnVlIH0sIHsgeDogY3gsIHk6IGN5ICsgciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfSwgeyB4OiBjeCwgeTogY3kgLSByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRWxsaXBzZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21FbGxpcHNlKF9yZWYzKSB7XG4gIHZhciBjeCA9IF9yZWYzLmN4LFxuICAgICAgY3kgPSBfcmVmMy5jeSxcbiAgICAgIHJ4ID0gX3JlZjMucngsXG4gICAgICByeSA9IF9yZWYzLnJ5O1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogY3gsIHk6IGN5ICsgcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfSwgeyB4OiBjeCwgeTogY3kgLSByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tTGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21MaW5lKF9yZWY0KSB7XG4gIHZhciB4MSA9IF9yZWY0LngxLFxuICAgICAgeDIgPSBfcmVmNC54MixcbiAgICAgIHkxID0gX3JlZjQueTEsXG4gICAgICB5MiA9IF9yZWY0LnkyO1xuXG4gIHJldHVybiBbeyB4OiB4MSwgeTogeTEsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHgyLCB5OiB5MiB9XTtcbn07XG5cbnZhciB2YWxpZENvbW1hbmRzID0gL1tNbUxsSGhWdkNjU3NRcVR0QWFael0vZztcblxudmFyIGNvbW1hbmRMZW5ndGhzID0ge1xuICBBOiA3LFxuICBDOiA2LFxuICBIOiAxLFxuICBMOiAyLFxuICBNOiAyLFxuICBROiA0LFxuICBTOiA0LFxuICBUOiAyLFxuICBWOiAxLFxuICBaOiAwXG59O1xuXG52YXIgcmVsYXRpdmVDb21tYW5kcyA9IFsnYScsICdjJywgJ2gnLCAnbCcsICdtJywgJ3EnLCAncycsICd0JywgJ3YnXTtcblxudmFyIGlzUmVsYXRpdmUgPSBmdW5jdGlvbiBpc1JlbGF0aXZlKGNvbW1hbmQpIHtcbiAgcmV0dXJuIHJlbGF0aXZlQ29tbWFuZHMuaW5kZXhPZihjb21tYW5kKSAhPT0gLTE7XG59O1xuXG52YXIgb3B0aW9uYWxBcmNLZXlzID0gWyd4QXhpc1JvdGF0aW9uJywgJ2xhcmdlQXJjRmxhZycsICdzd2VlcEZsYWcnXTtcblxudmFyIGdldENvbW1hbmRzID0gZnVuY3Rpb24gZ2V0Q29tbWFuZHMoZCkge1xuICByZXR1cm4gZC5tYXRjaCh2YWxpZENvbW1hbmRzKTtcbn07XG5cbnZhciBnZXRQYXJhbXMgPSBmdW5jdGlvbiBnZXRQYXJhbXMoZCkge1xuICByZXR1cm4gZC5zcGxpdCh2YWxpZENvbW1hbmRzKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5yZXBsYWNlKC9bMC05XSstL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS5zbGljZSgwLCAtMSkgKyAnIC0nO1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5yZXBsYWNlKC9cXC5bMC05XSsvZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtICsgJyAnO1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi50cmltKCk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2Lmxlbmd0aCA+IDA7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnNwbGl0KC9bICxdKy8pLm1hcChwYXJzZUZsb2F0KS5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4obik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21QYXRoID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBhdGgoX3JlZjUpIHtcbiAgdmFyIGQgPSBfcmVmNS5kO1xuXG4gIHZhciBjb21tYW5kcyA9IGdldENvbW1hbmRzKGQpO1xuICB2YXIgcGFyYW1zID0gZ2V0UGFyYW1zKGQpO1xuXG4gIHZhciBwb2ludHMgPSBbXTtcblxuICB2YXIgbW92ZVRvID0gdm9pZCAwO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gY29tbWFuZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tpXTtcbiAgICB2YXIgdXBwZXJDYXNlQ29tbWFuZCA9IGNvbW1hbmQudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgY29tbWFuZExlbmd0aCA9IGNvbW1hbmRMZW5ndGhzW3VwcGVyQ2FzZUNvbW1hbmRdO1xuICAgIHZhciByZWxhdGl2ZSA9IGlzUmVsYXRpdmUoY29tbWFuZCk7XG5cbiAgICBpZiAoY29tbWFuZExlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjb21tYW5kUGFyYW1zID0gcGFyYW1zLnNoaWZ0KCk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbW1hbmRQYXJhbXMubGVuZ3RoIC8gY29tbWFuZExlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVyYXRpb25zOyBqKyspIHtcbiAgICAgICAgdmFyIHByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgc3dpdGNoICh1cHBlckNhc2VDb21tYW5kKSB7XG4gICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICB2YXIgeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgeSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgICAgIG1vdmVUbyA9IHsgeDogeCwgeTogeSB9O1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IHByZXZQb2ludC55XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogcHJldlBvaW50LngsXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmMnLFxuICAgICAgICAgICAgICAgIHJ4OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgcnk6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uOiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnOiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnOiBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBvcHRpb25hbEFyY0tleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjdWJpYycsXG4gICAgICAgICAgICAgICAgeDE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeDI6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTI6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICB2YXIgc3gyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeTIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciBkaWZmID0ge307XG5cbiAgICAgICAgICAgIHZhciBzeDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgc3kxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAnY3ViaWMnKSB7XG4gICAgICAgICAgICAgIGRpZmYueCA9IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngyKTtcbiAgICAgICAgICAgICAgZGlmZi55ID0gTWF0aC5hYnMocHJldlBvaW50LnkgLSBwcmV2UG9pbnQuY3VydmUueTIpO1xuICAgICAgICAgICAgICBzeDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MiA/IHByZXZQb2ludC54IC0gZGlmZi54IDogcHJldlBvaW50LnggKyBkaWZmLng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55IDwgcHJldlBvaW50LmN1cnZlLnkyID8gcHJldlBvaW50LnkgLSBkaWZmLnkgOiBwcmV2UG9pbnQueSArIGRpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpZmYueCA9IE1hdGguYWJzKHN4IC0gc3gyKTtcbiAgICAgICAgICAgICAgZGlmZi55ID0gTWF0aC5hYnMoc3kgLSBzeTIpO1xuICAgICAgICAgICAgICBzeDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ2N1YmljJywgeDE6IHN4MSwgeTE6IHN5MSwgeDI6IHN4MiwgeTI6IHN5MiB9LCB4OiBzeCwgeTogc3kgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3F1YWRyYXRpYycsXG4gICAgICAgICAgICAgICAgeDE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICB2YXIgdHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHR5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIHR4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0eTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdxdWFkcmF0aWMnKSB7XG4gICAgICAgICAgICAgIHZhciBfZGlmZiA9IHtcbiAgICAgICAgICAgICAgICB4OiBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54MSksXG4gICAgICAgICAgICAgICAgeTogTWF0aC5hYnMocHJldlBvaW50LnkgLSBwcmV2UG9pbnQuY3VydmUueTEpXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdHgxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDEgPyBwcmV2UG9pbnQueCAtIF9kaWZmLnggOiBwcmV2UG9pbnQueCArIF9kaWZmLng7XG4gICAgICAgICAgICAgIHR5MSA9IHByZXZQb2ludC55IDwgcHJldlBvaW50LmN1cnZlLnkxID8gcHJldlBvaW50LnkgLSBfZGlmZi55IDogcHJldlBvaW50LnkgKyBfZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHgxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHR5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdxdWFkcmF0aWMnLCB4MTogdHgxLCB5MTogdHkxIH0sIHg6IHR4LCB5OiB0eSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9wcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICBpZiAoX3ByZXZQb2ludC54ICE9PSBtb3ZlVG8ueCB8fCBfcHJldlBvaW50LnkgIT09IG1vdmVUby55KSB7XG4gICAgICAgIHBvaW50cy5wdXNoKHsgeDogbW92ZVRvLngsIHk6IG1vdmVUby55IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlnb24gPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9seWdvbihfcmVmNikge1xuICB2YXIgcG9pbnRzID0gX3JlZjYucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiB0cnVlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9seWxpbmUoX3JlZjcpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY3LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogZmFsc2UsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2ludHMgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9pbnRzKF9yZWY4KSB7XG4gIHZhciBjbG9zZWQgPSBfcmVmOC5jbG9zZWQsXG4gICAgICBwb2ludHMgPSBfcmVmOC5wb2ludHM7XG5cbiAgdmFyIG51bWJlcnMgPSBwb2ludHMuc3BsaXQoL1tcXHMsXSsvKS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChuKTtcbiAgfSk7XG5cbiAgdmFyIHAgPSBudW1iZXJzLnJlZHVjZShmdW5jdGlvbiAoYXJyLCBwb2ludCwgaSkge1xuICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgYXJyLnB1c2goeyB4OiBwb2ludCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyWyhpIC0gMSkgLyAyXS55ID0gcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfSwgW10pO1xuXG4gIGlmIChjbG9zZWQpIHtcbiAgICBwLnB1c2goX2V4dGVuZHMoe30sIHBbMF0pKTtcbiAgfVxuXG4gIHBbMF0ubW92ZVRvID0gdHJ1ZTtcblxuICByZXR1cm4gcDtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0KF9yZWY5KSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmOS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWY5LnJ4LFxuICAgICAgcnkgPSBfcmVmOS5yeSxcbiAgICAgIHdpZHRoID0gX3JlZjkud2lkdGgsXG4gICAgICB4ID0gX3JlZjkueCxcbiAgICAgIHkgPSBfcmVmOS55O1xuXG4gIGlmIChyeCB8fCByeSkge1xuICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMoe1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICByeDogcnggfHwgcnksXG4gICAgICByeTogcnkgfHwgcngsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoeyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCB4OiB4LCB5OiB5IH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21CYXNpY1JlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KF9yZWYxMCkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjEwLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZjEwLndpZHRoLFxuICAgICAgeCA9IF9yZWYxMC54LFxuICAgICAgeSA9IF9yZWYxMC55O1xuXG4gIHJldHVybiBbeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMoX3JlZjExKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTEuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmMTEucngsXG4gICAgICByeSA9IF9yZWYxMS5yeSxcbiAgICAgIHdpZHRoID0gX3JlZjExLndpZHRoLFxuICAgICAgeCA9IF9yZWYxMS54LFxuICAgICAgeSA9IF9yZWYxMS55O1xuXG4gIHZhciBjdXJ2ZSA9IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfTtcblxuICByZXR1cm4gW3sgeDogeCArIHJ4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyBoZWlnaHQgLSByeSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5ICsgaGVpZ2h0LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4ICsgcngsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5ICsgaGVpZ2h0IC0gcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHgsIHk6IHkgKyByeSB9LCB7IHg6IHggKyByeCwgeTogeSwgY3VydmU6IGN1cnZlIH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21HID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUcoX3JlZjEyKSB7XG4gIHZhciBzaGFwZXMgPSBfcmVmMTIuc2hhcGVzO1xuICByZXR1cm4gc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiB0b1BvaW50cyhzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BvaW50czsiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBnZXRFcnJvcnMgPSBmdW5jdGlvbiBnZXRFcnJvcnMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXMoc2hhcGUpO1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgcnVsZXMubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1hdGNoID0gX3JlZi5tYXRjaCxcbiAgICAgICAgcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgICAgcmVxdWlyZWQgPSBfcmVmLnJlcXVpcmVkLFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlO1xuXG4gICAgaWYgKHR5cGVvZiBzaGFwZVtwcm9wXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIGlzIHJlcXVpcmVkJyArIChwcm9wID09PSAndHlwZScgPyAnJyA6ICcgb24gYSAnICsgc2hhcGUudHlwZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlW3Byb3BdKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgYXJyYXknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihzaGFwZVtwcm9wXSkgIT09IHR5cGUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhbGlkLXR5cGVvZlxuICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlICcgKyB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaCkpIHtcbiAgICAgICAgaWYgKG1hdGNoLmluZGV4T2Yoc2hhcGVbcHJvcF0pID09PSAtMSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvbmUgb2YgJyArIG1hdGNoLmpvaW4oJywgJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoc2hhcGUudHlwZSA9PT0gJ2cnICYmIEFycmF5LmlzQXJyYXkoc2hhcGUuc2hhcGVzKSkge1xuICAgIHZhciBjaGlsZEVycm9ycyA9IHNoYXBlLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBnZXRFcnJvcnMocyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShlcnJvcnMsIGNoaWxkRXJyb3JzKTtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBbe1xuICAgIG1hdGNoOiBbJ2NpcmNsZScsICdlbGxpcHNlJywgJ2xpbmUnLCAncGF0aCcsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JlY3QnLCAnZyddLFxuICAgIHByb3A6ICd0eXBlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9XTtcblxuICBzd2l0Y2ggKHNoYXBlLnR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3InLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnZCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdwb2ludHMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdoZWlnaHQnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J4JywgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3dpZHRoJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdnJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnc2hhcGVzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdhcnJheScgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn07XG5cbnZhciB2YWxpZCA9IGZ1bmN0aW9uIHZhbGlkKHNoYXBlKSB7XG4gIHZhciBlcnJvcnMgPSBnZXRFcnJvcnMoc2hhcGUpO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgdmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkOyIsIjsoZnVuY3Rpb24gaW5qZWN0KGNsZWFuLCBwcmVjaXNpb24sIHVuZGVmKSB7XG5cbiAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcblxuICB2YXIgZGVmaW5lZCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSAhPT0gdW5kZWY7XG4gIH07XG5cbiAgZnVuY3Rpb24gVmVjMih4LCB5KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlYzIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZlYzIoeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgIHkgPSB4WzFdO1xuICAgICAgeCA9IHhbMF07XG4gICAgfSBlbHNlIGlmKCdvYmplY3QnID09PSB0eXBlb2YgeCAmJiB4KSB7XG4gICAgICB5ID0geC55O1xuICAgICAgeCA9IHgueDtcbiAgICB9XG5cbiAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHggfHwgMCk7XG4gICAgdGhpcy55ID0gVmVjMi5jbGVhbih5IHx8IDApO1xuICB9XG5cbiAgVmVjMi5wcm90b3R5cGUgPSB7XG4gICAgY2hhbmdlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbZm5dO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpPXRoaXMub2JzZXJ2ZXJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1tpXSh0aGlzLCBmbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGlnbm9yZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLm9ic2VydmVycywgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlKGwtLSkge1xuICAgICAgICAgICAgb1tsXSA9PT0gZm4gJiYgby5zcGxpY2UobCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gc2V0IHggYW5kIHlcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIG5vdGlmeSkge1xuICAgICAgaWYoJ251bWJlcicgIT0gdHlwZW9mIHgpIHtcbiAgICAgICAgbm90aWZ5ID0geTtcbiAgICAgICAgeSA9IHgueTtcbiAgICAgICAgeCA9IHgueDtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy54ID09PSB4ICYmIHRoaXMueSA9PT0geSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWcgPSBudWxsO1xuICAgICAgaWYgKG5vdGlmeSAhPT0gZmFsc2UgJiYgdGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIG9yaWcgPSB0aGlzLmNsb25lKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCk7XG4gICAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkpO1xuXG4gICAgICBpZihub3RpZnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShvcmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gcmVzZXQgeCBhbmQgeSB0byB6ZXJvXG4gICAgemVybyA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KDAsIDApO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gYSBuZXcgdmVjdG9yIHdpdGggdGhlIHNhbWUgY29tcG9uZW50IHZhbHVlc1xuICAgIC8vIGFzIHRoaXMgb25lXG4gICAgY2xvbmUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCwgdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gbmVnYXRlIHRoZSB2YWx1ZXMgb2YgdGhpcyB2ZWN0b3JcbiAgICBuZWdhdGUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkZCB0aGUgaW5jb21pbmcgYHZlYzJgIHZlY3RvciB0byB0aGlzIHZlY3RvclxuICAgIGFkZCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuXG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCArPSB0aGlzLng7XG4gICAgICB5ICs9IHRoaXMueTtcblxuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU3VidHJhY3QgdGhlIGluY29taW5nIGB2ZWMyYCBmcm9tIHRoaXMgdmVjdG9yXG4gICAgc3VidHJhY3QgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ID0gdGhpcy54IC0geDtcbiAgICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIGluY29taW5nIGB2ZWMyYFxuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIHggKj0gdGhpcy54O1xuICAgICAgeSAqPSB0aGlzLnk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSb3RhdGUgdGhpcyB2ZWN0b3IuIEFjY2VwdHMgYSBgUm90YXRpb25gIG9yIGFuZ2xlIGluIHJhZGlhbnMuXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIGEgdHJ1dGh5IGBpbnZlcnNlYCB3aWxsIGNhdXNlIHRoZSByb3RhdGlvbiB0b1xuICAgIC8vIGJlIHJldmVyc2VkLlxuICAgIC8vXG4gICAgLy8gSWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5LCBhIG5ld1xuICAgIC8vIGBWZWMyYCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgdmFsdWVzIHJlc3VsdGluZyBmcm9tXG4gICAgLy8gdGhlIHJvdGF0aW9uLiBPdGhlcndpc2UgdGhlIHJvdGF0aW9uIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIHRvIHRoaXMgdmVjdG9yIGRpcmVjdGx5LCBhbmQgdGhpcyB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZC5cbiAgICByb3RhdGUgOiBmdW5jdGlvbihyLCBpbnZlcnNlLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgeCA9IHRoaXMueCxcbiAgICAgIHkgPSB0aGlzLnksXG4gICAgICBjb3MgPSBNYXRoLmNvcyhyKSxcbiAgICAgIHNpbiA9IE1hdGguc2luKHIpLFxuICAgICAgcngsIHJ5O1xuXG4gICAgICBpbnZlcnNlID0gKGludmVyc2UpID8gLTEgOiAxO1xuXG4gICAgICByeCA9IGNvcyAqIHggLSAoaW52ZXJzZSAqIHNpbikgKiB5O1xuICAgICAgcnkgPSAoaW52ZXJzZSAqIHNpbikgKiB4ICsgY29zICogeTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShyeCwgcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJ4LCByeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgbGVuZ3RoIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIHNxdWFyZWQuIEZvciBwZXJmb3JtYW5jZSwgdXNlIHRoaXMgaW5zdGVhZCBvZiBgVmVjMiNsZW5ndGhgIChpZiBwb3NzaWJsZSkuXG4gICAgbGVuZ3RoU3F1YXJlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4geCp4K3kqeTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZW4gdGhpcyBgVmVjMmAgYW5kIHRoZSBpbmNvbWluZyB2ZWMyIHZlY3RvclxuICAgIC8vIGFuZCByZXR1cm4gYSBzY2FsYXJcbiAgICBkaXN0YW5jZSA6IGZ1bmN0aW9uKHZlYzIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54IC0gdmVjMi54O1xuICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2ZWMyLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIEFycmF5IG9mIFZlYzIsIGZpbmQgY2xvc2VzdCB0byB0aGlzIFZlYzIuXG4gICAgbmVhcmVzdCA6IGZ1bmN0aW9uKG90aGVycykge1xuICAgICAgdmFyXG4gICAgICBzaG9ydGVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgIG5lYXJlc3QgPSBudWxsLFxuICAgICAgY3VycmVudERpc3RhbmNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gb3RoZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGN1cnJlbnREaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2Uob3RoZXJzW2ldKTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8PSBzaG9ydGVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGN1cnJlbnREaXN0YW5jZTtcbiAgICAgICAgICBuZWFyZXN0ID0gb3RoZXJzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZWFyZXN0O1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IHRoaXMgdmVjdG9yIGludG8gYSB1bml0IHZlY3Rvci5cbiAgICAvLyBSZXR1cm5zIHRoZSBsZW5ndGguXG4gICAgbm9ybWFsaXplIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgLy8gQ29sbGVjdCBhIHJhdGlvIHRvIHNocmluayB0aGUgeCBhbmQgeSBjb29yZHNcbiAgICAgIHZhciBpbnZlcnRlZExlbmd0aCA9IChsZW5ndGggPCBOdW1iZXIuTUlOX1ZBTFVFKSA/IDAgOiAxL2xlbmd0aDtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY29vcmRzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAgIC8vIGJ1dCBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG8gMS4wXG4gICAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGFub3RoZXIgYFZlYzJgJ3MgY29tcG9uZW50cyBtYXRjaCB0aGlzIG9uZSdzXG4gICAgLy8gYWxzbyBhY2NlcHRzIDIgc2NhbGFyc1xuICAgIGVxdWFsIDogZnVuY3Rpb24odiwgdykge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHYpKSB7XG4gICAgICAgICAgdyA9IHZbMV07XG4gICAgICAgICAgdiA9IHZbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdyA9IHYueTtcbiAgICAgICAgICB2ID0gdi54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoVmVjMi5jbGVhbih2KSA9PT0gdGhpcy54ICYmIFZlYzIuY2xlYW4odykgPT09IHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgdGhhdCBjb250YWlucyB0aGUgYWJzb2x1dGUgdmFsdWUgb2ZcbiAgICAvLyBlYWNoIG9mIHRoaXMgdmVjdG9yJ3MgcGFydHNcbiAgICBhYnMgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciB4ID0gTWF0aC5hYnModGhpcy54KSwgeSA9IE1hdGguYWJzKHRoaXMueSk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgc21hbGxlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWluIDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4IDwgdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5IDwgdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIGxhcmdlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWF4IDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4ID4gdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5ID4gdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDbGFtcCB2YWx1ZXMgaW50byBhIHJhbmdlLlxuICAgIC8vIElmIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIGFyZSBsb3dlciB0aGFuIHRoZSBgbG93YCdzXG4gICAgLy8gdmFsdWVzLCB0aGVuIHJhaXNlIHRoZW0uICBJZiB0aGV5IGFyZSBoaWdoZXIgdGhhblxuICAgIC8vIGBoaWdoYCdzIHRoZW4gbG93ZXIgdGhlbS5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgcmV0dXJuTmV3IGFzIHRydWUgd2lsbCBjYXVzZSBhIG5ldyBWZWMyIHRvIGJlXG4gICAgLy8gcmV0dXJuZWQuICBPdGhlcndpc2UsIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIHdpbGwgYmUgY2xhbXBlZFxuICAgIGNsYW1wIDogZnVuY3Rpb24obG93LCBoaWdoLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhciByZXQgPSB0aGlzLm1pbihoaWdoLCB0cnVlKS5tYXgobG93KTtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyZXQueCwgcmV0LnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBQZXJmb3JtIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlY3RvcnNcbiAgICAvLyBhbW91bnQgaXMgYSBkZWNpbWFsIGJldHdlZW4gMCBhbmQgMVxuICAgIGxlcnAgOiBmdW5jdGlvbih2ZWMsIGFtb3VudCwgcmV0dXJuTmV3KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQodmVjLnN1YnRyYWN0KHRoaXMsIHRydWUpLm11bHRpcGx5KGFtb3VudCksIHJldHVybk5ldyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgc2tldyB2ZWN0b3Igc3VjaCB0aGF0IGRvdChza2V3X3ZlYywgb3RoZXIpID09IGNyb3NzKHZlYywgb3RoZXIpXG4gICAgc2tldyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLnksIHRoaXMueClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLnksIHRoaXMueCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBkb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnggKyBiLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIHBlcnBlbmRpY3VsYXIgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBwZXJwRG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi55IC0gdGhpcy55ICogYi54KTtcbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhbmdsZSBiZXR3ZWVuIHR3byB2ZWMyc1xuICAgIGFuZ2xlVG8gOiBmdW5jdGlvbih2ZWMpIHtcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMucGVycERvdCh2ZWMpLCB0aGlzLmRvdCh2ZWMpKTtcbiAgICB9LFxuXG4gICAgLy8gRGl2aWRlIHRoaXMgdmVjdG9yJ3MgY29tcG9uZW50cyBieSBhIHNjYWxhclxuICAgIGRpdmlkZSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGl2aXNpb24gYnkgemVybycpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgfSxcblxuICAgIGlzUG9pbnRPbkxpbmUgOiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gKHN0YXJ0LnkgLSB0aGlzLnkpICogKHN0YXJ0LnggLSBlbmQueCkgPT09XG4gICAgICAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueCAtIHRoaXMueCk7XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfSxcblxuICAgIGZyb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChhcnJheVswXSwgYXJyYXlbMV0pO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnKCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICAgIH0sXG4gICAgY29uc3RydWN0b3IgOiBWZWMyXG4gIH07XG5cbiAgVmVjMi5mcm9tQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgY3Rvcikge1xuICAgIHJldHVybiBuZXcgKGN0b3IgfHwgVmVjMikoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgfTtcblxuICAvLyBGbG9hdGluZyBwb2ludCBzdGFiaWxpdHlcbiAgVmVjMi5wcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgODtcbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgVmVjMi5wcmVjaXNpb24pO1xuXG4gIFZlYzIuY2xlYW4gPSBjbGVhbiB8fCBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdHkgZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZihNYXRoLnJvdW5kKHZhbCkgPT09IHZhbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBwKS9wO1xuICB9O1xuXG4gIFZlYzIuaW5qZWN0ID0gaW5qZWN0O1xuXG4gIGlmKCFjbGVhbikge1xuICAgIFZlYzIuZmFzdCA9IGluamVjdChmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfSk7XG5cbiAgICAvLyBFeHBvc2UsIGJ1dCBhbHNvIGFsbG93IGNyZWF0aW5nIGEgZnJlc2ggVmVjMiBzdWJjbGFzcy5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFZlYzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5WZWMyID0gd2luZG93LlZlYzIgfHwgVmVjMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFZlYzI7XG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==