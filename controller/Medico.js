const Medico = require('../model/Medico')

module.exports = {
   // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let medicos = await Medico.find()
        return res.json(medicos)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let medico = req.body
        medico = await Medico.create(medico)
        return res.json(medico)
    }, 
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let medico = req.body
        medico.atualizado_em = Date.now()
        medico = await Medico.updateOne({'_id': req.query.id}, medico)
        return res.json(medico)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let medico = await Medico.findOne({'_id': req.query.id})
        medico = await Medico.deleteOne({'_id': req.query.id}, medico)
        return res.json(medico)
    }

}