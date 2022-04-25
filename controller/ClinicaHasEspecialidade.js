const ClinicaHasEspecialidadeSchema = require('../model/ClinicaHasEspecialidadeSchema')

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let medicoClinica = await ClinicaHasEspecialidadeSchema.find()
        return res.json(medicoClinica)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let {Medico, Clinica, Especialidade, criado_em, atualizado_em, status} = req.body
        medicoClinica = await ClinicaHasEspecialidadeSchema.create({Medico, Clinica, Especialidade, criado_em, atualizado_em, status})
        return res.json(medicoClinica)
    }, 
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let medicoClinica = req.body
        medicoClinica.atualizado_em = Date.now()
        medicoClinica = await ClinicaHasEspecialidadeSchema.updateOne({'_id': req.query.id},ClinicaHasEspecialidadeSchema )
        return res.json(medicoClinica)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let medicoClinica = await ClinicaHasEspecialidadeSchema.findOne({'_id': req.query.id}, ClinicaHasEspecialidadeSchema)
        medicoClinica = await ClinicaHasEspecialidadeSchema.deleteOne({'_id': req.query.id}, ClinicaHasEspecialidadeSchema)
        return res.json(medicoClinica)
    },
}