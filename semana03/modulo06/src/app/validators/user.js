const User = require("../models/user")

async function post(req, res, next) {
    const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.render('users/register', {
                    user: req.body,
                    error: 'Preencha todas as informações.'
                })
            }
        }

        let {email, cpf_cnpj, password, passwordRepeat} = req.body
        
        cpf_cnpj = cpf_cnpj.replace(/\D/g, "")


        const user = await User.findOne({
            where: {email},
            or: {cpf_cnpj}
        })

        if (user) return res.render('users/register', {
            user: req.body,
            error: 'Usuário já cadastrado.'
        })

        if (password != passwordRepeat) {
            return res.render('users/register', {
                user: req.body,
                error: 'A senha e a repetição da senha estão incorretos.'
            })
        }

        next()
}

module.exports = {
    post
}