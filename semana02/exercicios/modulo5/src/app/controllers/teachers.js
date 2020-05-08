const {age, graduation, type, date} = require("../../lib/utils")

module.exports = {
    index(req, res){
        return res.render("teachers/index")
    },
    post(req,res){
        return res.redirect("/teachers")
    },
    show(req,res){
        return res.render("teachers/show")
    },
    edit(req,res){
        return res.render("teachers/edit")
    },
    put(req,res){
        return res.redirect(`teachers/${id}`)
    },
    delete(req,res){
            return res.redirect("/teachers/")
    }
}