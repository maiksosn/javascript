const mongoose = require('mongoose')

// Modelo do Usúario ligando com a tabala de permissoes
const UserHasPermissoesSchema = new mongoose.schema({
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    Permissoes : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Permissoes'
    }

});

module.exports = mongoose.model('UserHasPermissoes', UserHasPermissoesSchema)
