const express = require("express")
const nunjunks = require("nunjucks")
const routes = require("./routes")
const methodOverride = require("method-override")

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(methodOverride("_method"))
server.set("view engine", "njk")
server.use(express.static("public"))
server.use(routes)

nunjunks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.listen(5050, function(){
    console.log("server is runing")
})