const User = require('../model/User')
const Email = require('../services/Email')

// CRUD
module.exports = {
    // CREARE -> CRIAR
    async store (req, res){
        const {name, email, RA, password} = req.body
        const user = await User.create({name, email, RA, password})
        Email.send({
            locals:{
                name: user.name,
            },
            template: 'welcome',
            message:{
                to: user.email
            }
        }).then(console.log)
        .catch(console.error)
        return res.json(user)
    },
    // READ -> LER
    async index(req, res){
        const user = await User.find()
        return res.json(user)
    },
    // UPDATE -> SUBSTITUIR
    async update(req, res){
        const{name, email, RA, password} = req.body
        let id = req.query.id
        let user = await User.findById(id)
        user = await User.updateOne({'_id': id}, {name,email, RA, password})
        return res.status(202).json({
            message : "Atualização realizada com sucesso",
            data : user
        })
    },
    // DELETE -> DELETAR
    async delete(req, res){
        let id = req.query.id
        let user = await User.findById(id);
        user = await User.deleteOne(user);
        return res.status(202).json(user);
    }
}