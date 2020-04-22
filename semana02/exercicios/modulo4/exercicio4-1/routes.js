const express = require("express")
const server = express
const routes = server.Router()

routes.get("/", function(req, res){
    return res.render("./teachers/index",)
})

routes.use(function(req, res) {
    res.status(404).render("not-found")
})

module.exports = routes