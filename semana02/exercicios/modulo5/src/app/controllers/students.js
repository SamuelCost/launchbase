const Intl = require('intl')
const {date, age, grade, gender} = require("../../lib/utils")

module.exports = {
    index(req, res){
        return res.render("students/index")
    },
    post(req,res){

        const keys = Object.keys(req.body)
    
        for (key of keys){
            if (req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }
    },
    show(req,res){
        return res.render("students/show")
    },
    edit(req,res){    
        return res.render("students/edit")
    },
    put(req,res){
        return res.redirect(`students/${id}`)
    },
    delete(req,res){
        return res.redirect("/students/")
    }
}