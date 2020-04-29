const connection = require('../../database/connection');
const md5 = require('md5');
const config = require('../../config/global');
const jwt = require('jsonwebtoken');

module.exports = {   

    async create(req, res) {        
        const { email, senha} = req.body;
       
        const usuario = await connection('usuario')
        .where("email", email)
        .andWhere("senha", md5(senha + config.SALT_KEY))      
        .select("id", "nome", "tipo_usuario")
        .first();       

        if(!usuario) {
            return res.status(401).json({messagem: "E-mail ou senha incorretos!"})
        }        
        
        return res.json({
            usuario,           
            token: jwt.sign({ id: usuario.id, tipo_usuario: usuario.tipo_usuario }, config.SALT_KEY, {
                expiresIn: config.expiresIn,
            }),
        });
    }

};