const {Pool} = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "M**",
    host: "localhost",
    port: 5432,
    database: "launchstoredb"
})