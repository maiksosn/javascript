const mongoose = require('mongoose')

// Modelo do Usúario ligando com a tabala de permissoes
const UserHasPermissaoSchema = new mongoose.schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    Permissoes : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Permissao'
    }

});

module.exports = mongoose.model('User', UserHasPermissaoSchema)
