const mongoose = require('mongoose')

// Aonde irá criar o modelo de permissão do usúario
const PermissaoSchema = new mongoose.Schema({
    controlador : String
})

module.exports =  mongoose.model('permissao',PermissaoSchema);