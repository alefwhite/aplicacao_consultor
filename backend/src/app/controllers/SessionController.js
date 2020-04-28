const connection = require('../../database/connection');
const bcrypt = require('bcryptjs');

module.exports = {   

    async create(req, res) {        
        const { email, senha} = req.body;

        const senha_hash = await bcrypt.hash(senha, 8);
    
        return res.json({message: "Login efetuado com sucesso!"});
    }

};