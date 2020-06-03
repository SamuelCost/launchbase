const Category = require("../models/category")

module.exports = {
    create(req, res) {
        Category.all()
        .then(function(results){
        const categories = results.rows

            res.render("products/create.njk", {categories})
        }).catch(function(err) {
            throw new Error(err)
        })

    },
    post(req, res){

    }
} 