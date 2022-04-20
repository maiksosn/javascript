const mongoose = require('mongoose')
const AgendaSchema = new mongoose.Schema({
    data_hora : Date,
    
})

module.exports =  mongoose.model('agenda',AgendaSchema);