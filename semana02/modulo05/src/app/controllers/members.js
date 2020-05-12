const members = require("../models/member")
const {age, date} = require("../../lib/utils")


module.exports = {
    index(req,res){
        members.all(function(members){
            return res.render("members/index", {members})
        })
    },
    create(req,res){

        members.instructorsSelectOptions(function(options){
            return res.render("members/create", {instructorOptions: options})

        })

    },
    post(req,res){

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }   
    
        members.create(req.body, function(member) {
            return res.redirect(`/members/${member.id}`)
        })

        return
    },
    show(req,res){
        members.find(req.params.id, function(member){
            if (!member) return res.send("member not found")

            member.birth = date(member.birth).birthDay

            return res.render("members/show", {member})
        })
    },
    edit(req,res){
        

        members.find(req.params.id, function(member){
            if (!member) return res.send("member not found")

            member.birth = date(member.birth).iso

            members.instructorsSelectOptions(function(options){
                return res.render("members/edit", {member,instructorOptions: options})
    
            })

        })

        return
    },
    put(req,res){
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        members.update(req.body, function(){
            return res.redirect(`members/${req.body.id}`)
        })
    },
    delete(req,res){
        members.delete(req.body.id, function(){
            return res.redirect(`members`)
        })
    }
}