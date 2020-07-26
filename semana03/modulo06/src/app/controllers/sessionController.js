module.exports = {
    loginForm(req, res) {
        return res.render("session/index")
    },
    login(req, res) {
        req.session.userID = req.user.id

        return res.redirect("/users")
    },
    logout(req, res) {
        req.session.destroy()

        return res.redirect("/")
    }
}