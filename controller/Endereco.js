const Endereco = require('../model/Endereco')

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let enderecos = await Endereco.find()
        return res.json(enderecos)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let endereco = req.body
        endereco = await Endereco.create(endereco)
        return res.json(endereco)
    },  
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let endereco = req.body
        endereco.atualizado_em = Date.now()
        endereco = await Endereco.updateOne({'_id': req.query.id}, endereco)
        return res.json(endereco)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let endereco = await Endereco.findOne({'_id': req.query.id})
        endereco = await Endereco.deleteOne({'_id': req.query.id}, endereco)
        return res.json(endereco)
    }

}