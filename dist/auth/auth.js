"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyToken = void 0;
require("dotenv/config");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var VerifyToken = exports.VerifyToken = function VerifyToken(req, res, next) {
  var header = req.header('Authorization') || '';
  var token = header.split(' ')[1];
  var secretKey = process.env.SECRET_KEY;
  console.log(header);
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: 'Token requerido'
    });
  }
  try {
    var payload = _jsonwebtoken["default"].verify(token, secretKey);
    console.log(payload);
    req.UserName = payload.UserName;
    next();
  } catch (e) {
    return res.status(401).json({
      message: 'Token invalido'
    });
  }
};