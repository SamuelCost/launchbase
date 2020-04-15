const express = require("express")
const nunjunks = require("nunjucks")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))

nunjunks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("about")
})

server.get("/courses", function(req, res){
    return res.render("courses")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5050, function(){
    console.log("server is runing")
})