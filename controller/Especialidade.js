const Especialidade = require('../model/Especialidade')

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let especialidades = await Especialidade.find()
        return res.json(especialidades)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let especialidade = req.body
        especialidade = await Especialidade.create(especialidade)
        return res.json(especialidade)
    },
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let especialidade = req.body
        especialidade.atualizado_em = Date.now()
        especialidade = await Especialidade.updateOne({'_id': req.query.id}, especialidade)
        return res.json(especialidade)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let especialidade = await Especialidade.findOne({'_id': req.query.id})
        especialidade = await Especialidade.deleteOne({'_id': req.query.id}, especialidade)
        return res.json(especialidade)
    }

}