const mongoose = require('mongoose')

// Modelo das permissoes
const PermissoesSchema = new mongoose.Schema({
    controlador : String
})

module.exports =  mongoose.model('permissoes',PermissoesSchema);