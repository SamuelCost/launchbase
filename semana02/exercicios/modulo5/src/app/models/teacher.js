const db = require("../../config/db.js")
const {age, graduation, type, date} = require("../../lib/utils")


module.exports = {
    all(callback) {
        db.query(`
        SELECT * FROM teachers
        `, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
        

    },
    create(data, callback) {
        const query = `
        INSERT INTO teachers (
            avatar_url,
            name,
            birth_date,
            education_level,
            class_type,
            subjects_taught,
            created_at
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7
        )
        
        RETURNING id`

        const values = [
            data.avatar_url,
            data.name,
            date(data.birth).iso,
            data.level,
            data.classType,
            data.subject,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err,results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT * FROM teachers WHERE id = $1`, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter,callback){
        db.query(`
        SELECT teachers.*, count(students) AS total_students
        FROM teachers
        LEFT JOIN students ON (students.fk_teacher = teachers.id)
        WHERE teachers.name ILIKE '%${filter}%'
        OR teachers.subjects_taught ILIKE '%${filter}%'
        GROUP BY teachers.id
        ORDER BY total_students DESC`, function(err,results){
            if(err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
    update(data, callback){
        const query = `UPDATE teachers SET
            avatar_url = ($1),
            name=($2),
            birth_date=($3),
            gender=($4),
            education_level=($5),
            class_type=($6),
            subjects_taught=($7)
            WHERE id = $8`

            const values = [
                data.avatar_url,
                data.name,
                date(data.birth).iso,
                data.gender,
                data.level,
                data.classType,
                data.subject,
                data.id
            ]

            db.query(query,values, function(err, results){
                if (err) throw `Database Error! ${err}`

                callback()
            })
    },
    delete(id, callback){
        db.query(`DELETE FROM teachers WHERE id = $1`, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            return callback()
        })
    },
    paginate(params){
        const {limit, filter, offset, callback} = params

        let query = ``,
        totalQuery = `
            (SELECT count(*) FROM teachers) AS total
        `,
        filterQuery = ``

        if (filter) {
            filterQuery = `
            WHERE teachers.name ILIKE '%${filter}%'
            OR teachers.subjects_taught ILIKE '%${filter}%'`

            totalQuery = `(
                SELECT count(*) FROM teachers ${filterQuery}
            ) AS total`
        }

        query = `
            SELECT teachers.*,${totalQuery}, count(students) AS total_students
            FROM teachers
            LEFT JOIN students ON (students.fk_teacher = teachers.id)
            ${filterQuery}
            GROUP BY teachers.id LIMIT $1 OFFSET $2
        `

        db.query(query, [limit, offset], function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })


    }
}