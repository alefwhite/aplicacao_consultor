const connection = require('../../database/connection');

module.exports = {
    async index(req, res) {
        const tipoUsuario = await connection('tipoUsuario').select("*");    

        return res.json(tipoUsuario);
    },

    async create(req, res) {        
        const { tipo } = req.body;
    
        await connection('tipoUsuario').insert({ tipo });
        console.log(tipo);
    
        return res.json({message: "Tipo de usuário inserido com sucesso!", tipo});
    }

};