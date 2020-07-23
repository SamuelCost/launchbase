const express = require("express")
const routes = express.Router()

const HomeControler = require("../app/controllers/homeController")
const products = require('./products')
const users = require('./users')

routes.get("/", HomeControler.index)

routes.use('/users', users)
routes.use('products', products)

routes.get("/ads/create", function(req, res){
    return res.redirect("/products/create")
})

routes.get("/accounts", function(req, res){
    return res.redirect("/users/register")
})

module.exports = routes