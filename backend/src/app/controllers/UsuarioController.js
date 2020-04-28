const connection = require('../../database/connection');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res) {
        const usuarios = await connection('usuario').select("*");    

        return res.json(usuarios);
    },

    async create(req, res) {        
        const { nome, email, senha, tipo_usuario } = req.body;

        const senha_hash = await bcrypt.hash(senha, 8);
    
        const retorno = await connection('usuario').insert({ 
            nome,
            email,
            senha: senha_hash,
            tipo_usuario 
        });
       
    
        return res.json({message: "Usuário criado com sucesso!", retorno});
    }

};