const fs = require("fs")
const {lineBreak} = require("../../../lib/utils")
const RecipesPublic = require("../models/RecipesPublic")

exports.show = function(req,res){
    RecipesPublic.index(function(recipes){
        return res.render("public/recipes/recipes", {recipes})
    })
}
exports.detail = function(req,res){
    const {id} = req.params

    RecipesPublic.find(id, function(recipes){
        recipes.information = lineBreak(recipes.information).fh

        return res.render("public/recipes/recipeDetail", {recipes}) 
    })
}