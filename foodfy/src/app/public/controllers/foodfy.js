const fs = require("fs")
const RecipesPublic = require("../models/RecipesPublic")

exports.index = function(req,res){
    RecipesPublic.index(function(recipes){
        return res.render('public/index', {recipes})
    })
}
exports.about = function(req,res){
    return res.render('public/about')
}