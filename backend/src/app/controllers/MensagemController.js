const connection = require('../../database/connection');

module.exports = {
    async index(req, res) {
        // const tipoUsuario = await connection('mensagem').select("*");    

        // return res.json(mensagem);
    },

    async create(req, res) {        
        const { nome, email, senha, tipo_usuario } = req.body;
    
        const retorno = await connection('mensagem').insert({ 
            nome,
            email,
            senha,
            tipo_usuario 
        });
       
    
        return res.json({message: "Usuário criado com sucesso!", retorno});
    }

};