const Clinica = require('../model/Clinica')

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let clinicas = await Clinica.find()
        return res.json(clinicas)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let clinica = req.body
        clinica = await Clinica.create(clinica)
        return res.json(clinica)
    },
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let clinica = req.body
        clinica.atualizado_em = Date.now()
        clinica = await Clinica.updateOne({'_id': req.query.id}, clinica)
        return res.json(clinica)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let clinica = await Clinica.findOne({'_id': req.query.id})
        clinica = await Clinica.deleteOne({'_id': req.query.id}, clinica)
        return res.json(clinica)
    }
    

}