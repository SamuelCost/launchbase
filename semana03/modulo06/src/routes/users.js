const express = require("express")
const routes = express.Router()

const SessionController = require("../app/controllers/sessionController")
const UserController = require("../app/controllers/userController")
const Validator = require("../app/validators/user")

/*routes.get('/login', SessionController.loginForm)
routes.post('/login', SessionController.login)
routes.post('/logout', SessionController.logout)

routes.get('/forgot-password', SessionController.forgotForm)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/forgot-password', SessionController.forgot)
routes.post('/password-reset', SessionController.reset)

routes.put('/', UserController.update)
routes.delete('/', UserController.delete) */

routes.get('/register', UserController.registerForm)
routes.post('/register', Validator.post, UserController.post)
routes.get('/', UserController.show)




module.exports = routes