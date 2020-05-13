const {age, graduation, type, date, grade, gender} = require("../../lib/utils")
const students = require("../models/student")


module.exports = {
    index(req, res){
        students.all(function(students){
            return res.render("students/index", {students})
        })
        
    },
    create(req,res){
        students.teacherSelectOptions(function(options){
            return res.render("students/register", {teacherOptions: options})
        })
    },
    post(req,res){
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }
        
        students.create(req.body, function(student){
            return res.redirect(`/students/${student.id}`)
        })

    },
    show(req,res){
        students.find(req.params.id, function(student){
            if (!student) return res.send("Student not found") 

            student.age = age(student.birth)
            student.year_school = grade(student.year_school)
            student.gender = gender(student.gender)

            return res.render("students/show", {student})
        })
    },
    edit(req,res){
        students.find(req.params.id, function(student){
            if (!student) return res.send("Student not found")

            student.birth = date(student.birth).iso

            students.teacherSelectOptions(function(options){
                return res.render("students/register", {student,teacherOptions: options})
            })
        })
    },
    put(req,res){
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == ""){
                return res.send("Please, fill all fields")
            }
        }

        students.update(req.body, function(){
            return res.redirect(`students/${req.body.id}`) 
        })

    },
    delete(req,res){
        students.delete(req.body.id, function(){
            return res.redirect("/students/")
        })
    }
}