const express = require("express")
const server = express
const routes = server.Router()
const teachers = require("./app/controllers/teachers")
const students = require("./app/controllers/students")

routes.get("/", function(req, res){
    return res.redirect("teachers")
})

routes.get("/teachers", teachers.index)
routes.get("/teachers/register", function(req, res){
    return res.render("teachers/register")
})
routes.get("/teachers/:id", teachers.show)
routes.get("/teachers/:id/edit", teachers.edit)
routes.post("/teachers", teachers.post)
routes.put("/teachers", teachers.put)
routes.delete("/teachers", teachers.delete)

routes.get("/students", students.index)
routes.get("/students/register", students.create)
routes.get("/students/:id", students.show)
routes.get("/students/:id/edit", students.edit)
routes.post("/students", students.post)
routes.put("/students", students.put)
routes.delete("/students", students.delete)

module.exports = routes