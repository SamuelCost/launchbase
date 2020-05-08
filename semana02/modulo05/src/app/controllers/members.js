const Intl = require('intl')
const {age, date} = require("../../lib/utils")
const db = require("../../config/db")

module.exports = {
    index(req,res){
        return res.render("members/index")
    },
    create(req,res){
        return res.render("members/create")
    },
    post(req,res){

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }
    
        const query = `
            INSERT INTO members (
                name,
                avatar_url,
                gender,
                services,
                birth,
                create_at
            ) VALUES ($1, $2, $3, $4, $5, $6)

            RETURNING id
        `
        
        const values = [
            req.body.name,
            req.body.avatar_url,
            req.body.gender,
            req.body.services,
            date(req.body.birth).iso,
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results){
            console.log(err)
            console.log(results)
            return
        })

        return
    },
    show(req,res){
        return
    },
    edit(req,res){
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        return
    },
    put(req,res){
    
        return
    },
    delete(req,res){
        return
    }
}