const config = require('../config/global');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("token", authHeader)
  if(!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido!' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, config.SALT_KEY);

    req.id = decoded.id;
    req.tipo_usuario = decoded.tipo_usuario;
    
    return next();

  } catch (error) {
    console.log(authHeader);
    return res.status(401).json({ error: 'Token inválido!' });
  }

};