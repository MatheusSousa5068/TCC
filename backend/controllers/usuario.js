const { criarUsuario, verificar } = require('../models/usuario')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const cadastro = async (req, res) => {
    const body = req.body


    await criarUsuario(body)


    res.setHeader("content-type", "application/json")
    res.sendStatus(200)
}


const login = async (req, res) => {
    res.setHeader("content-type", "application/json")

    const {
        email,
        senha
    } = req.body

    const usuario = await verificar(email)

    if (usuario) {
        const match = await bcrypt.compare(senha, usuario.senha)

        if (!match) {
            res.json({
                erro: "senha incorreta"
            })
        }

        const token = jwt.sign({
            email
        }, 'secret', {
            expiresIn: 10 * 60
        })

        res.json({
            "auth": true,
            token,
            "email": email
        })

    } else {

        res.json({
            erro: "usuário não encontrado"
        })

    }
}


module.exports = { cadastro, login }