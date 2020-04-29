const connection = require('../../database/connection');

module.exports = {
    async index(req, res) {
            
        const usuarios = await connection('usuario').select("*");   
         
        let j = 0;

        //Código para ordenar o Array de forma aletória
        for (let i = 0; i < usuarios.length; i++) {
            
            if(i == 0){
                 const aux = Math.ceil(Math.random() * usuarios.length);
                 j = Math.ceil(Math.random() * (aux + 1));
            }else {
                 j = Math.ceil(Math.random() * ((i + 1) + 1));
            }


            [usuarios[i], usuarios[j]] = [usuarios[j], usuarios[i]];
        }
          
        return res.json(usuarios);
    }    
};