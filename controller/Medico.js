const Medico = require('../model/Medico')

module.exports = {
    // LER  -> READ
    async index(req, res){
        let medicos = await Medico.find()
        return res.json(medicos)
    },
     // CRIAR -> CREATE
    async store(req, res){
        let medico = req.body
        medico = await Medico.create(medico)
        return res.json(medico)
    }, 
    // MODIFICAR -> UPDATE
    async update(req, res){
        let medico = req.body
        medico.atualizado_em = Date.now()
        medico = await Medico.updateOne({'_id': req.query.id}, medico)
        return res.json(medico)
    },
    // DELETAR -> DELETE
    async delete(req, res){
        let medico = await Medico.findOne({'_id': req.query.id})
        medico = await Medico.deleteOne({'_id': req.query.id}, medico)
        return res.json(medico)
    }

}