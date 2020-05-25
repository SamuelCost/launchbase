const Chefs = require("../models/Admin/Chefs")

module.exports = {
    index(req, res){
        Chefs.all(function(chefs){
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

        Chefs.create(req.body, function(){
            return res.render("admin/chefs/index")
        })
    }
}