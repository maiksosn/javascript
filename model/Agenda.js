const mongoose = require('mongoose')

// Modelo da Agenda
const AgendaSchema = new mongoose.Schema({
    data_hora : Date,
    
})

module.exports =  mongoose.model('agenda',AgendaSchema);