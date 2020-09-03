const express = require("express")
const routes = express.Router()

const multer = require("../app/middlewares/multer")
const ProductControler = require("../app/controllers/productController")
const SearchControler = require("../app/controllers/searchController")
const Validator = require('../app/validators/product')

const {onlyUsers} = require('../app/middlewares/session')


routes.get('/search', SearchControler.index)

routes.get("/create", onlyUsers, ProductControler.create)
routes.get("/:id", ProductControler.show)
routes.get("/:id/edit", onlyUsers, ProductControler.edit)

routes.post("/", onlyUsers, multer.array("photos", 6), Validator.post, ProductControler.post)
routes.put("/", onlyUsers, multer.array("photos", 6), Validator.put, ProductControler.put)
routes.delete("/", onlyUsers, ProductControler.delete)

module.exports = routes