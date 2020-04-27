const express = require("express")
const server = express
const routes = server.Router()
const teachers = require("./teachers")

routes.get("/", function(req, res){
    return res.redirect("teachers")
})

routes.get("/teachers", function(req, res){
    return res.render("teachers/index")
})

routes.get("/teachers/register", function(req, res){
    return res.render("teachers/register")
})

routes.get("/teachers/:id", teachers.show)

routes.get("/teachers/:id/edit", teachers.edit)

routes.post("/teachers", teachers.post)

module.exports = routes