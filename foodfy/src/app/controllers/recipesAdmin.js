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
            recipe.information = lineBreak(recipe.information).fh
            return res.render("admin/recipes/recipeDetail", {recipe})
        })  
    },
    edit(req,res){
        const {id} = req.params

        Recipes.find(id, function(recipe){
            Recipes.teacherSelectOptions(function(chefs){

                recipe.information = lineBreak(recipe.information).fu

                return res.render(`admin/recipes/edit`, {recipe, chefs})
            })
        })         
    },
    put(req,res){

        const {id} = req.body
        
        Recipes.update(req.body, function(){
            return res.redirect(`/admin/recipes/${id}`)
        })
    },
    delete(req,res){
        const {id} = req.body

        Recipes.delete(id, function(){
            return res.redirect("/admin/recipes")
        })
    }
}