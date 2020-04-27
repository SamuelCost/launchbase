const Intl = require('intl')
const fs = require('fs')
const data = require("./data.json")
const {age, graduation, type, date} = require("./utils")

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "") {
            return res.send("Please, fill all fields")
        }
    }

    let {avatar_url, name, birth, gender, level, classType, subject} = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const date_create = Date.now()

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        level,
        classType,
        subject,
        date_create
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/teachers")
    })
}

exports.show = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        level: graduation(foundTeacher.level),
        subject: foundTeacher.subject.split(","),
        classType: type(foundTeacher.classType),
        date_create: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.date_create)
    }

    return res.render("teachers/show", {teacher})
}

exports.edit = function(req,res){

    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", {teacher})
}