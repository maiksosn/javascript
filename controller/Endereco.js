const Endereco = require('../model/Endereco')

module.exports = {
    async index(req, res){
        let enderecos = await Endereco.find()
        return res.json(enderecos)
    },
    async store(req, res){
        let endereco = req.body
        endereco = await Endereco.create(endereco)
        return res.json(endereco)
    },  
    async update(req, res){
        let endereco = req.body
        endereco.atualizado_em = Date.now()
        endereco = await Endereco.updateOne({'_id': req.query.id}, endereco)
        return res.json(endereco)
    },
    async delete(req, res){
        let endereco = await Endereco.findOne({'_id': req.query.id})
        endereco = await Endereco.deleteOne({'_id': req.query.id}, endereco)
        return res.json(endereco)
    }

}