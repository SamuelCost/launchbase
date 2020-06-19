const express = require("express")
const routes = express.Router()
const multer = require("./app/middlewares/multer")
const ProductControler = require("./app/controllers/productControler")

routes.get("/", function(req, res){
    return res.render("layout.njk")
})

routes.get("/products/create", ProductControler.create)
routes.get("/products/:id", ProductControler.show)
routes.get("/products/:id/edit", ProductControler.edit)

routes.post("/products", multer.array("photos", 6), ProductControler.post)
routes.put("/products", multer.array("photos", 6), ProductControler.put)
routes.delete("/products", ProductControler.delete)

routes.get("/ads/create", function(req, res){
    return res.redirect("/products/create")
})

module.exports = routes