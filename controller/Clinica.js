const Clinica = require('../model/Clinica')

module.exports = {
    // LER  -> READ
    async index(req, res){
        let clinicas = await Clinica.find()
        return res.json(clinicas)
    },
    // CRIAR -> CREATE
    async store(req, res){
        let clinica = req.body
        clinica = await Clinica.create(clinica)
        return res.json(clinica)
    },
    // MODIFICAR -> UPDATE
    async update(req, res){
        let clinica = req.body
        clinica.atualizado_em = Date.now()
        clinica = await Clinica.updateOne({'_id': req.query.id}, clinica)
        return res.json(clinica)
    },
    // DELETAR -> DELETE
    async delete(req, res){
        let clinica = await Clinica.findOne({'_id': req.query.id})
        clinica = await Clinica.deleteOne({'_id': req.query.id}, clinica)
        return res.json(clinica)
    }
    

}