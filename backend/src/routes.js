const express = require('express');
const tipoUsuarioController = require('./app/controllers/TipoUsuarioController');
const UsuarioController = require('./app/controllers/UsuarioController');
const routes = express.Router();

// TipoUsuario
routes.get('/tipoUsuario', tipoUsuarioController.index);
routes.post('/tipoUsuario', tipoUsuarioController.create);

// Usuario
routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);


module.exports = routes;