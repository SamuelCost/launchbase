const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))
const data = require('./data')

nunjucks.configure('views',{
    express: server
})

server.get('/', function(req,res){
    return res.render('index', {dataRecipes: data})
})

server.get('/about', function(req,res){
    return res.render('about')
})

server.get('/recipes', function(req,res){
    return res.render('recipes', {dataRecipes: data})
})

server.get("/recipes/:id", function(req, res) {
    const id = req.params.id
    
    const recipe = data.find(function(recipe){
        return recipe.id == id
    })

    if (!recipe) {
        return res.status(404).render("not-found")
    }

    return res.render("recipeDetail", {recipeData: recipe})
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(3000, function(){
    console.log("server is runing")
})