const db = require("../../config/db.js")
const {age, graduation, type, date} = require("../../lib/utils")


module.exports = {
    all(callback) {
        db.query(`
        SELECT * FROM students
        `, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
        

    },
    create(data, callback) {
        const query = `
        INSERT INTO students (
            avatar_url,
            name,
            email,
            year_school,
            workload,
            birth,
            gender,
            fk_teacher
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8
        )
        
        RETURNING id`

        const values = [
            data.avatar_url,
            data.name,
            data.email,
            data.yearSchool,
            data.workload,
            date(data.birth).iso,
            data.gender,
            data.teacher
        ]

        db.query(query, values, function(err,results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    find(id, callback) {
        db.query(`SELECT students.*, teachers.name AS teacher_name
        FROM students 
        LEFT JOIN teachers ON (students.fk_teacher = teachers.id)
        WHERE students.id = $1`, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },
    update(data, callback){
        const query = `UPDATE students SET
            avatar_url = ($1),
            name=($2),
            email=($3),
            year_school=($4),
            workload=($5),
            birth=($6),
            gender=($7),
            fk_teacher=($8)
            WHERE id = $9`

            const values = [
                data.avatar_url,
                data.name,
                data.email,
                data.yearSchool,
                data.workload,
                date(data.birth).iso,
                data.gender,
                data.teacher,
                data.id
            ]

            db.query(query,values, function(err, results){
                if (err) throw `Database Error! ${err}`

                callback()
            })
    },
    delete(id, callback){
        db.query(`DELETE FROM students WHERE id = $1`, [id], function(err, results){
            if (err) throw `Database Error! ${err}`

            return callback()
        })
    },
    teacherSelectOptions(callback){
        db.query(`SELECT id, name FROM teachers`, function(err, results){
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    }
}