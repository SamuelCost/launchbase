const express = require('express')
const nunjunks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")

nunjunks.configure("views", {
    express:server,
    autoescape: false
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/12562944?s=460&u=27b4d592488c0af727db907f0faee4b8717fae88&v=4",
        name: "Samuel Costa",
        role: "Full Stack Developer",
        description: "Estudante de Tecnologia da Informação",
        links: [
            {name: "GitHub", url: "https://github.com/samukcosta"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/samuel-costa-a58b80181/"},
            {name: "Email", url:"mailto:samu.ks@outlook.com"}
        ]
    }
    return res.render("about", {about})
})

server.get("/portfolio", function(req, res){

    return res.render("portfolio", {items: videos})
})

server.listen(5000, function(){
    console.log("server is running")
})