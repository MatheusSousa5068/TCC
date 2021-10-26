const { verificarFuncionario, criarFuncionario } = require('./../models/funcionario')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cadastroFuncionario = async (req, res) => {
    const body = req.body

    console.table(body)


    await criarFuncionario(body)


    res.setHeader("content-type", "application/json")
    res.sendStatus(200)
}


const loginFuncionario = async (req, res) => {
    res.setHeader("content-type", "application/json")

    const {
        email,
        senha
    } = req.body

    const funcionario = await verificarFuncionario(email)

    if (funcionario) {
        const match = await bcrypt.compare(senha, funcionario.senha)

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
            erro: "Funcionário não encontrado"
        })

    }
}



module.exports = { cadastroFuncionario, loginFuncionario }