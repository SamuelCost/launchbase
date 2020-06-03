const express = require("express")
const routes = express.Router()
const ProductControler = require("./app/controllers/productControler")

routes.get("/", function(req, res){
    return res.render("layout.njk")
})

routes.get("/products/create", ProductControler.create)
routes.post("/products", ProductControler.post)

routes.get("/ads/create", function(req, res){
    return res.redirect("/products/creat")
})

module.exports = routes