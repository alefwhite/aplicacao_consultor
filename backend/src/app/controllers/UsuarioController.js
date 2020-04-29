const connection = require('../../database/connection');
const md5 = require('md5');
const config = require('../../config/global');

module.exports = {
    async index(req, res) {
        const usuarios = await connection('usuario').select("*");    

        return res.json(usuarios);
    },

    async create(req, res) {        
       const { nome, email, senha, tipo_usuario } = req.body;

       const existeEmail = await connection("usuario")
       .select("email")
       .where("usuario.email", email)
       .first();

       if(existeEmail) {
            return res.json({message: "E-mail já cadastrado"});
       }

       const senha_hash = md5(senha + config.SALT_KEY);

        try {
            const retorno = await connection('usuario').insert({ 
                nome,
                email,
                senha: senha_hash,
                tipo_usuario 
            });

            return res.json({message: "Usuário criado com sucesso!", retorno});
            
        } catch (error) {
            return res.json({message: "Erro ao cadastrar usuário!", retorno});
        }
       
    
    }

};