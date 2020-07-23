const User = require('../models/user')

module.exports = {
    registerForm(req, res){
        return res.render("users/register")
    },
    show(req, res) {
        return res.send('ok, cadastrado!')
    },
    async post(req, res) {

        const userID = await User.create(req.body)
        console.log(userID)

        return res.redirect('/users')
        
    }
}