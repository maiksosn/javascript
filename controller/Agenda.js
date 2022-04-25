const Agenda = require('../model/Agenda')
const { update } = require('./Especialidade')

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req,res){
        let agendas = await Agenda.find()
        return res.json(agendas)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let agenda = req.body
        agenda = await Agenda.create(agenda)
        return res.json(agenda)
    },
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let agenda = req.body
        agenda = await Agenda.updateOne({'_id': req.query.id}, agenda)
        return res.json(agenda)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let agenda = await Agenda.findOne({'_id': req.query.id})
        agenda = await Agenda.deleteOne({'_id': req.query.id}, agenda)
    }
}  