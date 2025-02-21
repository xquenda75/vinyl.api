"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;
require("dotenv/config");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Login = exports.Login = function Login(req, res) {
  try {
    var _req$body = req.body,
      UserName = _req$body.UserName,
      Password = _req$body.Password;
    var secretKey = process.env.SECRET_KEY;
    if (!UserName || !Password) return res.status(400).json({
      message: 'Usuario y contraseña requeridos'
    });
    if (UserName === 'jorge.lopez@dock.tech' && Password === 'pass') {
      var token = _jsonwebtoken["default"].sign({
        UserName: UserName
      }, secretKey, {
        expiresIn: '1h'
      });
      return res.status(200).json({
        message: 'Login correcto',
        token: token
      });
    } else {
      return res.status(401).json({
        message: 'Login incorrecto'
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: 'Error al hacer login'
    });
  }
};