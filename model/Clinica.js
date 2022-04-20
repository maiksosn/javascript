const mongoose = require('mongoose')
const ClinicaSchema = new mongoose.Schema({
    nome         : String,
    cnpj         : String,
    email        : String,
    cep          : Number,
    numero       : String,
    site         : String,
    criado_em    : String,
    atualizado_em: String,
    status       : Boolean,
})

module.exports =  mongoose.model('clinica',ClinicaSchema);