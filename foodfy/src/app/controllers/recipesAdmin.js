const fs = require("fs")
const Recipes = require("../models/Admin/Recipes")
const {lineBreak} = require("../../lib/utils")

/*ADMIN*/

module.exports = {
    index(req,res){
        Recipes.index(function(recipes){
        return res.render('admin/recipes/index', {recipes})

        })
    },
    create(req,res){
        Recipes.teacherSelectOptions(function(chefs){
            return res.render('admin/recipes/create', {chefs})
        })
    },
    post(req,res){

        Recipes.create(req.body, function(){
            return res.redirect("/admin/recipes")
        })
    },
    detail(req, res) {
        const {id} = req.params

        Recipes.find(id, function(recipe){
            return res.render("admin/recipes/recipeDetail", {recipe})
        })  
    },
    edit(req,res){
        const {id} = req.params

        Recipes.find(id, function(recipe){
            Recipes.teacherSelectOptions(function(chefs){

                recipe.information = lineBreak(recipe.information).inv

                return res.render(`admin/recipes/edit`, {recipe, chefs})
            })
        })         
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