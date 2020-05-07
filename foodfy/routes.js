const express = require('express')
const server = express
const routes = express.Router()
const recipes = require("./controllers/recipesAdmin")
const recipesPublic = require("./controllers/recipesPublic")

///ROTAS PUBLICAS

routes.get('/', function(req,res){
    return res.redirect('foodfy')
})

routes.get("/foodfy", recipesPublic.index)
routes.get("/foodfy/about", recipesPublic.about)
routes.get("/foodfy/recipes", recipesPublic.show)
routes.get("/foodfy/recipes/:id", recipesPublic.detail)



///ROUTES ADMIN

routes.get('/admin', function(req,res){
    return res.redirect('admin/recipes')
})


routes.get("/admin/recipes", recipes.index)
routes.get("/admin/recipes/create", recipes.create);
routes.get("/admin/recipes/:id", recipes.detail)
routes.get("/admin/recipes/:id/edit", recipes.edit)

routes.post("/admin/recipes", recipes.post)
routes.put("/admin/recipes", recipes.put)
routes.delete("/admin/recipes", recipes.delete)

routes.use(function(req, res) {
    res.status(404).render("not-found")
})

module.exports = routes