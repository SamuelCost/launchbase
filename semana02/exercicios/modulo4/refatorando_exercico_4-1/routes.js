const express = require("express")
const server = express
const routes = server.Router()

routes.get("/", function(req, res){
    return res.redirect("teachers")
})

routes.get("/teachers", function(req,res){
    return res.render("teachers/index")
})

routes.get("/teachers/register", function(req,res){
    return res.render("teachers/register")
})

routes.post("/teachers", function(req,res){
    console.log(req.body)
})

module.exports = routes