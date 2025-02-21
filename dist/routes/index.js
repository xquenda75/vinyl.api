"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _indexController = require("../controller/index.controller.js");
var _loginController = require("../controller/login.controller.js");
var _auth = require("../auth/auth.js");
var apiRoutes = (0, _express.Router)();
apiRoutes.get('/health', _indexController.Health);
apiRoutes.get('/albums', _auth.VerifyToken, _indexController.GetAlbums);
apiRoutes.post('/albums', _auth.VerifyToken, _indexController.PostAlbums);
apiRoutes.get('/albums/:id', _auth.VerifyToken, _indexController.GetAlbumsById);
apiRoutes.put("/albums/:id", _auth.VerifyToken, _indexController.PutAlbums);
apiRoutes["delete"]("/albums/:id", _auth.VerifyToken, _indexController.DeleteAlbums);
apiRoutes.get("/movies", _indexController.GetMovies);
apiRoutes.post('/login', _loginController.Login);
apiRoutes.use(function (req, res) {
  res.status(404).json({
    message: 'Ruta no encontrada'
  });
});
var _default = exports["default"] = apiRoutes;