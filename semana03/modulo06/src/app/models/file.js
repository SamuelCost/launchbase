const db = require("../../config/db")

module.exports = {
    create(file) {
        const query = `
            INSERT INTO files (
                name,
                path,
                products_id
            ) VALUES ($1, $2, $3)
            RETURNING id
        `
        const values = [
            file.filename,
            file.path,
            file.product_id
        ]

         return db.query(query, values)
    },
}