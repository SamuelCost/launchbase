const Intl = require('intl')
const fs = require('fs')
const data = require("./data.json")
const {age, date} = require("./utils")
// create
exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == ""){
            return res.send("Please, fill all fields")
        }
    }

    let {avatar_url, birth, name, services, gender} = req.body

    birth = Date.parse(birth)
    const create_at = Date.now()
    const id = Number(data.instructors.length + 1)


    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        services,
        gender,
        create_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/instructors")
    })
}
exports.show = function(req,res){
    //req.params.id

    const {id} = req.params

    const foundInstructors = data.instructors.find(function(instructors){
        return instructors.id == id
    })

    if (!foundInstructors) return res.send("Instructors not found")

    const instructor = {
        ...foundInstructors,
        age: age(foundInstructors.birth),
        services: foundInstructors.services.split(","),
        create_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructors.create_at)
    }

    return res.render("instructors/show", {instructor})
}

//edit
exports.edit = function(req,res){

    const {id} = req.params

    const foundInstructors = data.instructors.find(function(instructors){
        return instructors.id == id
    })

    if (!foundInstructors) return res.send("Instructors not found")

    const instructor = {
        ...foundInstructors,
        birth: date(foundInstructors.birth)
    }

    return res.render("instructors/edit", {instructor})
}

//update

//delete