const express = require('express');
const SessionController = require('./app/controllers/SessionController');
const tipoUsuarioController = require('./app/controllers/TipoUsuarioController');
const UsuarioController = require('./app/controllers/UsuarioController');
const MensagemController = require('./app/controllers/MensagemController');
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

// Login
routes.post('/session', SessionController.create);

// TipoUsuario
routes.get('/tipoUsuario', tipoUsuarioController.index);
routes.post('/tipoUsuario', tipoUsuarioController.create);

// Usuario
routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.create);


routes.use(authMiddleware);
// Mensagem
routes.get('/mensagem', MensagemController.index);
routes.get('/mensagemUsuario/:id', MensagemController.mensagemUsuario);
routes.post('/mensagem', MensagemController.create);
routes.delete('/mensagem/:id', MensagemController.delete);
routes.put('/mensagem/:id', MensagemController.update);

module.exports = routes;