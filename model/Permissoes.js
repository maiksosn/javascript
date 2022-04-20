const mongoose = require('mongoose')

const PermissoesSchema = new mongoose.Schema({
    controlador : String
})

module.exports =  mongoose.model('permissoes',PermissoesSchema);