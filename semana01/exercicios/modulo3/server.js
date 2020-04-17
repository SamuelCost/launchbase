const express = require("express")
const nunjunks = require("nunjucks")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))
const data = require("./data")
const dataCourses = data.dataCourses

nunjunks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res){
    return res.render("about", {dataAbout: data.dataAbout})
})

server.get("/courses", function(req, res){
    return res.render("courses", {dataCourses: data.dataCourses})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id
    
    const course = data.dataCourses.courses.find(function(course){
        return course.id == id
    })

    if (!course) {
        return res.status(404).render("not-found")
    }

    return res.render("course", {course: course})
})


server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5050, function(){
    console.log("server is runing")
})