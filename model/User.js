const mongoose = require('mongoose')

// Modelo do Usúario
const userSchema = new mongoose.Schema({
    name         : String,
    email        : String,
    RA           : Number,
    password     : String,
    criado_em    : String,
    atualizado_em: String,
    status       : Boolean
})

module.exports = mongoose.model('User',userSchema) 