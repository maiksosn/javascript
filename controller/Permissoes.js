const Permissoes = require('../model/Especialidade')

module.exports = {
    
    // LER  -> READ
    async index(req, res){
        let permissoes = await Permissoes.find()
        return res.json(permissoes)
    },
    
    // CRIAR -> CREATE
    async store(req, res){
        let permissoes = req.body
        permissoes = await permissoes.create(permissoes)
        return res.json(permissoes)
    },

    // MODIFICAR -> UPDATE
    async update(req, res){
        let permissoes = req.body
        permissoes = await Permissoes.updateOne({'_id': req.query.id},Permissoes)
        return res.json(permissoes)
    },

    // DELETAR -> DELETE
    async delete(req, res){
        let Permissoes = req.body
        permissoes = await Permissoes.deleteOne({'_id': req.query.id},permissoes)
        return res.json(permissoes)
    }

       
}