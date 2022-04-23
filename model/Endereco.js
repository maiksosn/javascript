const mongoose = require('mongoose')

// Modelo dos Endereços
const EnderecoSchema = new mongoose.Schema({
    "cep"         : String,
    "state"       : String,
    "city"        : String,
    "neighborhood": String,
    "Street"      : String,
    "service"     : String,
    "location"    : Object,
    criado_em    : String,
    atualizado_em: String,
    status       : Boolean
})

module.exports = mongoose.model('endereco', EnderecoSchema);