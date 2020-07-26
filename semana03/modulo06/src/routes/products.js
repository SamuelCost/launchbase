const express = require("express")
const routes = express.Router()

const multer = require("../app/middlewares/multer")
const ProductControler = require("../app/controllers/productController")
const SearchControler = require("../app/controllers/searchController")
const {onlyUsers} = require('../app/middlewares/session')


routes.get('/search', SearchControler.index)

routes.get("/create", onlyUsers, ProductControler.create)
routes.get("/:id", ProductControler.show)
routes.get("/:id/edit", ProductControler.edit)

routes.post("/", multer.array("photos", 6), ProductControler.post)
routes.put("/", multer.array("photos", 6), ProductControler.put)
routes.delete("/", ProductControler.delete)

module.exports = routes