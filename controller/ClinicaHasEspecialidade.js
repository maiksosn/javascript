const ClinicaHasEspecialidadeSchema = require('../model/ClinicaHasEspecialidadeSchema')

module.exports = {
    // LER  -> READ
    async index(req, res){
        let medicoClinica = await ClinicaHasEspecialidadeSchema.find()
        return res.json(medicoClinica)
    },
    // CRIAR -> CREATE
    async store(req, res){
        let {Medico, Clinica, Especialidade, criado_em, atualizado_em, status} = req.body
        medicoClinica = await ClinicaHasEspecialidadeSchema.create({Medico, Clinica, Especialidade, criado_em, atualizado_em, status})
        return res.json(medicoClinica)
    }, 
    // MODIFICAR -> UPDATE
    async update(req, res){
        let medicoClinica = req.body
        medicoClinica.atualizado_em = Date.now()
        medicoClinica = await ClinicaHasEspecialidadeSchema.updateOne({'_id': req.query.id},ClinicaHasEspecialidadeSchema )
        return res.json(medicoClinica)
    },
    // DELETAR -> DELETE
    async delete(req, res){
        let medicoClinica = await ClinicaHasEspecialidadeSchema.findOne({'_id': req.query.id}, ClinicaHasEspecialidadeSchema)
        medicoClinica = await ClinicaHasEspecialidadeSchema.deleteOne({'_id': req.query.id}, ClinicaHasEspecialidadeSchema)
        return res.json(medicoClinica)
    },
}