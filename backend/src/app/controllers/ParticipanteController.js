const connection = require('../../database/connection');

module.exports = {
    async index(req, res) {
            
        const usuarios = await connection('usuario').select("*");   
            
        //Código para ordenar o Array de forma aletória
        for (let i = 0; i < usuarios.length; i++) {
            const j = Math.ceil(Math.random() * (i + 1));
            [usuarios[i], usuarios[j]] = [usuarios[j], usuarios[i]];
        }
          
        return res.json(usuarios);
    }    
};