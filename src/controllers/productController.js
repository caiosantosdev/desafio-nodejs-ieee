const database = require('./../database/index.js');

module.exports = {
    async findAll(req, res){
        try{
            const products = await database("produtos").select("*");
            console.log("passou aqui");
            return res.json(products);
        }catch(error){
            return res.json(error);
        }
    },
    async cadastraProduto(req, res){
        const { nome , descricao } = req.body;
        try{
            const product = await database("produtos").select("*").where({nome}).first();
            if(produto){
                throw new Error("Produto ja cadastrado");
            }
            const success = await database("produtos").insert({
                nome,
                descricao
            })
            if(success){
                return res.json({"message":"Produto cadastrado com sucesso"});
            }
        }catch(error){
            return res.json(error);
        }
    },
    async atualizaProduto(req, res){
        const { id } = req.query;
        const upProduct = req.body;
        try{
            const validProduct = await database("produtos").select("*").where({id}).first();
            if(!validProduct){
                throw new Error("produto não existe.");
            }
            await database("produtos").update(upProduct).where({id});
            return res.json({"message":"Usuario atualizado com sucesso"});
        }catch(error){
            return error;
        }
    },
    async deletaProduto(req, res){
        const { id } = req.query;
        try{
            const validProduct = await database("produtos").select("*").where({id});
            if(!validProduct){
                throw new Error("Produto não existe!");
            }
            await database("produtos").delete().where({id});
            return res.json({"message":"Usuario deletado com sucesso!"})
        }catch(error){
            return error;
        }
    }
}