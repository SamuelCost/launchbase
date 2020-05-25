const fs = require("fs")
const data = require("../../data.json")

/*ADMIN*/

module.exports = {
    index(req,res){
        return res.render('admin/recipes/index', {recipes: data.recipes})
    },
    create(req,res){
        return res.render('admin/recipes/create')
    },
    post(req,res){

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        Chefs.create(req.body, function(){
            return res.render("admin/chefs/index")
        })

        let {image, title, author, ingredients, preparation, information} = req.body
    
        data.recipes.push({
            id,
            image,
            title,
            author,
            ingredients,
            preparation,
            information
        })
    
        fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
            if (err) return res.send("Write file error!")
    
            return res.redirect('/')
        })
    },
    detail(req, res) {
        const {id} = req.params
    
        const foundRecipe = data.recipes.find(function(recipes){
            return recipes.id == id
        })
    
        if (!foundRecipe) {
            return res.status(404).render("not-found")
        }
    
        return res.render("admin/recipes/recipeDetail", {recipes: foundRecipe})
    },
    edit(req,res){
        const {id} = req.params
    
        const foundRecipe = data.recipes.find(function(recipes){
            return recipes.id == id
        })
    
        if (!foundRecipe) return res.send("Recipes not found")
    
        const recipe = {
            ...foundRecipe,
        }
    
        return res.render(`admin/recipes/edit`, {recipe})
    },
    put(req,res){
        const {id} = req.body
        let index = 0
    
        const foundRecipe = data.recipes.find(function(recipes, foundIndex){
            if (recipes.id == id){
                index = foundIndex
                return true
            }
        })
    
        if (!foundRecipe) return res.send("Recipe not found")
    
        const recipe = {
            ...foundRecipe,
            ...req.body,
        }
    
        data.recipes[index] = recipe
    
        fs.writeFile("data.json", JSON.stringify(data,null,4), function(err){
            if(err) return res.send("Write error!")
    
            return res.redirect(`/admin/recipes/${id}`)
        })
    },
    delete(req,res){
        const {id} = req.body
    
        const filteredRecipe = data.recipes.filter(function(recipes){
            return recipes.id != id
        })
    
        data.recipes = filteredRecipe
    
        fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
            if (err) return res.send("write file ERRO!")
            
            return res.redirect("/admin/recipes")
        })
    }
}