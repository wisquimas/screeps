(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _MatrixService = require("./services/MatrixService");

var _MatrixService2 = _interopRequireDefault(_MatrixService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matrix = new _MatrixService2.default();
matrix.init();

},{"./services/MatrixService":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function Model() {
  _classCallCheck(this, Model);
};

exports.default = Model;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Model2 = require("../Model");

var _Model3 = _interopRequireDefault(_Model2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Creep = function (_Model) {
    _inherits(Creep, _Model);

    /**
     * @param creep
     */
    function Creep(creep) {
        _classCallCheck(this, Creep);

        var _this = _possibleConstructorReturn(this, (Creep.__proto__ || Object.getPrototypeOf(Creep)).call(this));

        _this.creep = creep;
        return _this;
    }

    _createClass(Creep, [{
        key: "getMe",
        value: function getMe() {
            return this.creep;
        }
    }, {
        key: "trabajar",
        value: function trabajar() {
            console.log('No tengo chamba tio');
        }
    }]);

    return Creep;
}(_Model3.default);

exports.default = Creep;

},{"../Model":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Creep2 = require('./Creep');

var _Creep3 = _interopRequireDefault(_Creep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreepWorker = function (_Creep) {
    _inherits(CreepWorker, _Creep);

    function CreepWorker(creep) {
        _classCallCheck(this, CreepWorker);

        return _possibleConstructorReturn(this, (CreepWorker.__proto__ || Object.getPrototypeOf(CreepWorker)).call(this, creep));
    }

    _createClass(CreepWorker, [{
        key: 'trabajar',
        value: function trabajar() {
            var creep = this.getMe();

            if (creep.carry.energy < creep.carryCapacity) {
                var sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
            } else {
                if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns['Spawn1']);
                }
            }
        }
    }], [{
        key: 'CrearTrabajador',
        value: function CrearTrabajador(Spawn) {
            Spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {
                type: 'worker',
                trabajando: false
            });
        }
    }]);

    return CreepWorker;
}(_Creep3.default);

exports.default = CreepWorker;

},{"./Creep":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Creep = require("../models/creeps/Creep");

var _Creep2 = _interopRequireDefault(_Creep);

var _CreepWorker = require("../models/creeps/CreepWorker");

var _CreepWorker2 = _interopRequireDefault(_CreepWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixService = function () {
    function MatrixService() {
        _classCallCheck(this, MatrixService);

        var spawns = Game.spawns;
        for (var name in spawns) {
            if (spawns.hasOwnProperty(name)) {
                this.Matrix = Game.spawns[name];
            }
        }
    }

    /**
     * Inicializa a la colonia
     */


    _createClass(MatrixService, [{
        key: "init",
        value: function init() {
            this.CreateNewCreeper();
            this.TrabajosCreepers();
        }

        /**
         * Proceso para multiplicar creepers
         * @constructor
         */

    }, {
        key: "CreateNewCreeper",
        value: function CreateNewCreeper() {
            var Matrix = this.Matrix;
            try {
                _CreepWorker2.default.CrearTrabajador(Matrix);
            } catch (e) {
                console.log(e.message);
            }
        }

        /**
         * Manda a trabajar a todos los creepers
         * @constructor
         */

    }, {
        key: "TrabajosCreepers",
        value: function TrabajosCreepers() {
            var creeps = Game.creeps;

            for (var nameCreep in creeps) {
                if (creeps.hasOwnProperty(nameCreep)) {
                    var creep = creeps[nameCreep];

                    if (!!creep) {

                        var creepObject = null;

                        switch (creep.memory.type) {
                            case 'worker':
                                creepObject = new _CreepWorker2.default(creep);
                                break;
                            default:
                                creepObject = new _Creep2.default(creep);
                                break;
                        }
                        creepObject.trabajar();
                    }
                }
            }
        }
    }]);

    return MatrixService;
}();

exports.default = MatrixService;

},{"../models/creeps/Creep":3,"../models/creeps/CreepWorker":4}]},{},[1]);
