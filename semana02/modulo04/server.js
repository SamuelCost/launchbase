const express = require('express')
const nunjunks = require('nunjucks')
const routes = require("./routes")

const server = express()

server.use(express.static('public'))
server.use(routes)
server.set("view engine", "njk")

nunjunks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("server is running")
})