const express = require("express")
const nunjunks = require("nunjucks")
const routes = require("./routes")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))
server.use(routes)

nunjunks.configure("views", {
    express:server,
    autoescape: false
})

server.listen(5050, function(){
    console.log("server is runing")
})