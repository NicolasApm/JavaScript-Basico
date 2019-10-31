//"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Evento =
/*#__PURE__*/
function () {
  function Evento(id, nombre, cantidadAsistentes, precioPorAsistente) {
    _classCallCheck(this, Evento);

    this.id1 = id;
    this.nombre1 = nombre;
    this.cantidadAsistentes1 = cantidadAsistentes;
    this.precioPorAsistente1 = precioPorAsistente;
  }

  _createClass(Evento, [{
    key: "enlace",
    value: function enlace() {
      return "/evento/<".concat(this.id1, ">");
    }
  }, {
    key: "dineroTotalRecaudado",
    value: function dineroTotalRecaudado() {
      return "Se recaudo = ".concat(this.cantidadAsistentes1 * this.precioPorAsistente1);
    }
  }]);

  return Evento;
}();

var evento1 = new Evento(1, "e1", 12, 5);
console.log(evento1.enlace());
console.log(evento1.dineroTotalRecaudado());
/*class Persona{

  constructor(){
    this.nombre = "luis";
    this.apellido = "torres";
  }

}

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);*/

var Persona =
/*#__PURE__*/
function () {
  function Persona() {
    _classCallCheck(this, Persona);

    this.nombre = "luis";
    this.apellido = "torres";
  }

  _createClass(Persona, [{
    key: "nombreCompleto",
    value: function nombreCompleto() {
      return "".concat(this.nombre, " ").concat(this.apellido);
    }
  }]);

  return Persona;
}();

var p = new Persona();
console.log(p.nombre);
console.log(p.apellido);
console.log(p.nombreCompleto());
/*class Mascota{
  constructor(nombreApodo){
    this.apodo = nombreApodo;
  }
}*/

var Mascota =
/*#__PURE__*/
function () {
  function Mascota(nombreApodo) {
    _classCallCheck(this, Mascota);

    this.apodo = nombreApodo;
  }

  _createClass(Mascota, [{
    key: "setPropietario",
    value: function setPropietario(propietario) {
      this.propietario = propietario;
    }
  }]);

  return Mascota;
}();

var m1 = new Mascota("tobby");
console.log(m1.apodo);
m1.setPropietario(p);
console.log(m1.propietario.nombreCompleto());

var Empleado =
/*#__PURE__*/
function (_Persona) {
  _inherits(Empleado, _Persona);

  function Empleado(id) {
    var _this;

    _classCallCheck(this, Empleado);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Empleado).call(this));
    _this.id = id;
    return _this;
  }

  return Empleado;
}(Persona);

var emp = new Empleado(123);
console.log(emp.id);
console.log(emp.nombre);
console.log(emp.nombreCompleto());
