const Permissoes = require('../model/Especialidade')
const { store, update } = require('./User')

module.exports = {
    async index(req, res){
        let permissoes = await Permissoes.find()
        return res.json(permissoes)
    },

    async store(req, res){
        let permissoes = req.body
        permissoes = await permissoes.create(permissoes)
        return res.json(permissoes)
    },


       
}