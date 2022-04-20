const mongoose = require('mongoose')
const MedicoSchema = new mongoose.Schema({
    nome          : String,
    cpf           : Number,
    email         : String,
    cep           : Number,
    numero        : String,
    crm           : Number,
    especialidade : [String],
    criado_em     : String,
    atualizado_em : String,
    status        : Boolean
})

module.exports =  mongoose.model('medico',MedicoSchema); 