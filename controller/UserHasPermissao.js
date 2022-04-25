const UserHasPermissao = require("../model/UserHasPermissao")

module.exports = {
    // Crud - Read, aonde séra feito somente leitura;
    async index(req, res){
        let controler = await UserHasPermissao.find()
        return res.json(controler)
    },
    // Crud - Create, aonde será feito a inclusão;
    async store(req, res){
        let {User, Permissao} = req.body
        controler = await UserHasPermissao.create({User,Permissao})
        return res.json(controler)
    },
    // Crud - Update, aonde será feito a edição;
    async update(req, res){
        let {User, Permissao} = req.body
        controler = await UserHasPermissao.updateOne({User, Permissao})
        return res.json(controler)
    },
    // Crud - Delete, aonde será feito o delete;
    async delete(req, res){
        let {User, Permissao} = await controler.findOne({'_id': req.query._id})
        controler = await UserHasPermissao.deleteOne({User, Permissao})
        return res.json(controler)
    }
}