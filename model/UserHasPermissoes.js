const mongoose = require('mongoose')

// Modelo do Usúario ligando com a tabala de permissoes
const UserHasPermissoesSchema = new mongoose.schema({

})

module.exports = mongoose.model('UserHasPermissoes', UserHasPermissoesSchema)
