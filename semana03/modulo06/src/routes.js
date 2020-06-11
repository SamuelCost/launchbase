const express = require("express")
const routes = express.Router()
const ProductControler = require("./app/controllers/productControler")

routes.get("/", function(req, res){
    return res.render("layout.njk")
})

routes.get("/products/create", ProductControler.create)
routes.get("/products/:id/edit", ProductControler.edit)
routes.post("/products", ProductControler.post)
routes.put("/products", ProductControler.put)
routes.delete("/products", ProductControler.delete)

routes.get("/ads/create", function(req, res){
    return res.redirect("/products/create")
})

module.exports = routes