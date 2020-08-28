function onlyUsers(req, res, next) {
    if (!req.session.userID)
        return res.redirect('/users/login')
    
    next()
}

function isLoggedRedirectToUsers(req, res, next) {
    if (req.session.userID) {
        return res.redirect('/users')
    }

    next()
}

module.exports = {
    onlyUsers,
    isLoggedRedirectToUsers
}