const express = require("express")
const routes = express.Router()

const SessionController = require("../app/controllers/sessionController")
const UserController = require("../app/controllers/userController")
const UserValidator = require("../app/validators/user")
const SessionValidator = require("../app/validators/session")

/*

routes.get('/forgot-password', SessionController.forgotForm)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/forgot-password', SessionController.forgot)
routes.post('/password-reset', SessionController.reset)

routes.delete('/', UserController.delete) */

routes.get('/login', SessionController.loginForm)
routes.post('/login', SessionValidator.login, SessionController.login)
routes.post('/logout', SessionController.logout)

routes.get('/register', UserController.registerForm)
routes.get('/', UserValidator.show, UserController.show)

routes.post('/register', UserValidator.post, UserController.post)
routes.put('/', UserValidator.update, UserController.update)





module.exports = routes