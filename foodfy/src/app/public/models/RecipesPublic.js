const db = require("../../../config/db")

module.exports = {
    index(callback){
        const query = `
        SELECT recipes.*, chefs.id AS id_chef, chefs.name
        FROM recipes
        INNER JOIN chefs ON (chefs.id = recipes.pk_chef_id)
        ORDER BY recipes.id ASC
        `

        db.query(query, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    find(id, callback){
        const query = `SELECT recipes.*, chefs.id AS id_chef, chefs.name
        FROM recipes
        INNER JOIN chefs ON (chefs.id = recipes.pk_chef_id)
        WHERE recipes.id = $1`

        db.query(query, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })

    }
}