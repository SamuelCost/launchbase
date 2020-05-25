const fs = require("fs")
const data = require("../../data.json")

exports.index = function(req,res){
    return res.render('public/index', {recipes: data.recipes})
}
exports.about = function(req,res){
    return res.render('public/about')
}
exports.show = function(req,res){
    return res.render("public/recipes/recipes", {recipes: data.recipes})
}
exports.detail = function(req,res){
    const id = req.params.id
    console.log(id)

    const recipe = data.recipes.find(function(recipes){
        return recipes.id = id
    })

    if (!recipe) return res.send("Recipe Not Found!")

    return res.render("public/recipes/recipeDetail", {recipes: recipe})
}