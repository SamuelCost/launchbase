const Intl = require('intl')
const fs = require('fs')
const data = require("../data.json")
const {date, age, grade, gender} = require("../utils")

exports.index = function(req, res){

    return res.render("students/index", {students: data.students})
}

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    for (key of keys){
        if (req.body[key] == "") {
            return res.send("Please, fill all fields")
        }
    }

    let {avatar_url, name, birth, gender, email, yearSchool, workload} = req.body

    birth = Date.parse(birth)
    const date_create = Date.now()
    let id = 1
    let lastStudents = data.students[data.students.length - 1]

    if (lastStudents) {
        id = lastStudents.id + 1
    }

    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        email,
        yearSchool,
        workload,
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 4), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/students")
    })
}

exports.show = function(req,res){
    const {id} = req.params

    const foundStudent = data.students.find(function(students){
        return students.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: age(foundStudent.birth),
        yearSchool: grade(foundStudent.yearSchool),
        gender: gender(foundStudent.gender)
    }

    return res.render("students/show", {student})
}

exports.edit = function(req,res){

    const {id} = req.params

    const foundStudent = data.students.find(function(students){
        return students.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render("students/edit", {student})
}

exports.put = function(req,res){
    const {id} = req.body
    let index = 0

    const foundStudent = data.students.find(function(students, foundIndex){
        if (students.id == id){
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) return res.send("Student Not Found!")

    const student = {
        ...foundStudent,
        ...req.body,
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data,null,4), function(err){
        if (err) return res.send("Write file erro!")

        return res.redirect(`students/${id}`)
    })
}

exports.delete = function(req,res){
    const {id} = req.body
    
    const filterStudent = data.students.filter(function(students){
        return students.id != id
    })

    data.students = filterStudent

    fs.writeFile("data.json", JSON.stringify(data,null,4), function(err){
        if (err) return res.send("Write file Erro!")

        return res.redirect("/students/")
    })
}