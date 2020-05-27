const db = require("../../../config/db")
const {date} = require("../../../lib/utils")

module.exports = {
    all(callback){
        db.query("SELECT * FROM chefs ORDER BY id ASC", function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    create(data, callback){

        let query = `
            INSERT INTO chefs (
                avatar_url,
                name,
                created_at
            ) VALUES ($1, $2, $3)

            RETURNING id
        `

        let values = [
            data.avatar_url,
            data.name,
            date(Date.now(data.name)).iso
        ]

        db.query(query, values, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback()
        })
    }
}   