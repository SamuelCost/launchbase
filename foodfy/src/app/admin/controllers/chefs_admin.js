const ChefsAdmin = require("../models/ChefsAdmin")

module.exports = {
    index(req, res){
        ChefsAdmin.all(function(chefs){
            return res.render("admin/chefs/index", {chefs})
        })
    },
    create(req, res){
        return res.render("admin/chefs/create")
    },
    post(req,res){

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        ChefsAdmin.create(req.body, function(){
            return res.render("admin/chefs/index")
        })
    },
    detail(req,res){
        const {id} = req.params

        ChefsAdmin.find(id, function(chef){
            return res.render("admin/chefs/details", {chef})
        })
    }
}