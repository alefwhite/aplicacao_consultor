const connection = require('../../database/connection');

module.exports = {
    async index(req, res) {
        const { nome = "giovanna", updated_at = "2020-04-28", order = 1} = req.query;
        
        const order_by = order == 1 ? "desc" : "asc";

        let mensagens = "";
              
        if(updated_at && !nome) {
            mensagens = await connection("mensagem")     
            .join("usuario", {"usuario.id": "mensagem.id_usuario"} )
            .select("mensagem.id", "mensagem.msg", "mensagem.updated_at", "usuario.nome", "usuario.email", "mensagem.id_usuario")
            .where("mensagem.updated_at", "like", `%${updated_at.toLowerCase()}%`)
            .orderBy("mensagem.updated_at", order_by);
        }
        else if(nome && !updated_at) {
            console.log("else if 1")
            mensagens = await connection("mensagem")     
            .join("usuario", {"usuario.id": "mensagem.id_usuario"} )
            .select("mensagem.id", "mensagem.msg", "mensagem.updated_at", "usuario.nome", "usuario.email", "mensagem.id_usuario")
            .where("usuario.nome", "like",`%${nome.toLowerCase()}%`)
            .orderBy("mensagem.id", order_by);
        } 
        else if(nome && updated_at) {
            console.log("else if 2")
             mensagens = await connection("mensagem")     
            .join("usuario", {"usuario.id": "mensagem.id_usuario"} )
            .select("mensagem.id", "mensagem.msg", "mensagem.updated_at", "usuario.nome", "usuario.email", "mensagem.id_usuario")
            .where("usuario.nome", "like",`%${nome.toLowerCase()}%`)
            .andWhere("mensagem.updated_at", "like", `%${updated_at.toLowerCase()}%`)
            .orderBy("mensagem.id", order_by);
        }
        else {
            console.log("else")
            mensagens = await connection("mensagem")     
            .join("usuario", {"usuario.id": "mensagem.id_usuario"} )
            .select("mensagem.id", "mensagem.msg", "mensagem.updated_at", "usuario.nome", "usuario.email", "mensagem.id_usuario")
            .orderBy("mensagem.id", order_by);
        }        
        

        return res.json(mensagens);
    },

    async create(req, res) {        
        const { msg } = req.body;
        const id_usuario = req.id;

        let formatter = new Intl.DateTimeFormat('pt-BR', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            year: 'numeric',
            minute: '2-digit'
        });

        const updated_at = formatter.format(Date.now());
        const created_at = formatter.format(Date.now());  

        const [retorno] = await connection('mensagem').insert({ 
            msg,           
            created_at,
            updated_at, 
            id_usuario
        });
       
    
        return res.json({message: "Usuário criado com sucesso!", retorno});
    },

    async delete(req, res) {
        const { id } = req.params;
        const id_usuario = req.id;
       
        const mensagem = await connection("mensagem").where('id', id).select("id_usuario").first();
        const tipoUsuario = await connection("usuario").where('id', id_usuario).select("tipo_usuario").first();
       
        if(mensagem.id_usuario == id_usuario || tipoUsuario.tipo_usuario == 1) {
            await connection('mensagem').where('id', id).delete();
            return res.json({message: "Mensagem deletada com sucesso!"});
        }
        
        return res.status(401).json({messagem: "Operação não permitida apenas usuário que criou a mensagem ou consultor pode deletar!"})
       
    },

    async update(req, res) {
        const { id } = req.params;
        const id_usuario = req.id;
        const { msg } = req.body;

        let formatter = new Intl.DateTimeFormat('pt-BR', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            year: 'numeric',
            minute: '2-digit'
        });

        const updated_at = formatter.format(Date.now());      
       
        const mensagem = await connection("mensagem").where('id', id).select("id_usuario").first();
        const tipoUsuario = await connection("usuario").where('id', id_usuario).select("tipo_usuario").first();
        
        if(mensagem.id_usuario == id_usuario || tipoUsuario.tipo_usuario == 1) {
            await connection('mensagem').where('id', id).update({
                msg,
                updated_at
            });
            return res.json({message: "Mensagem editada com sucesso!"});
        }
        
        return res.status(401).json({messagem: "Operação não permitida apenas usuário que criou a mensagem ou consultor pode deletar!"})
       
    },



};