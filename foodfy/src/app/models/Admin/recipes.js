const {date, lineBreak} = require("../../../lib/utils")
const db = require("../../../config/db")

module.exports = {
    index(callback){
        const query = `SELECT recipes.*, chefs.name AS chef 
        FROM recipes
        LEFT JOIN chefs ON (recipes.pk_chef_id = chefs.id)`

        db.query(query, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){
        const query = `INSERT INTO recipes (
            pk_chef_id,
            image,
            title,
            ingredients,
            preparation,
            information,
            created_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7)
        
        RETURNING id`

        const values = [
            data.id_chef,
            data.image,
            data.title,
            data.ingredients,
            data.preparations,
            lineBreak(data.information).norm,
            date(Date.now(data)).iso
        ]

        db.query(query, values, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback()
        })
    },
    teacherSelectOptions(callback){
        db.query(`SELECT id, name FROM chefs
        ORDER BY name ASC`, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    find(id, callback){
        const query = `SELECT recipes.*, chefs.name AS chef 
        FROM recipes
        LEFT JOIN chefs ON (recipes.pk_chef_id = chefs.id)
        WHERE recipes.id = $1`

        db.query(query, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    }
}