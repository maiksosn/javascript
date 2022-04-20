const mongoose = require('mongoose')

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