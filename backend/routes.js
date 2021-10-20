const express = require('express')
const router = express.Router()


// Controllers
const { pedido } = require('./controllers/pedido')


const { cadastro } = require('./controllers/usuario')
const { login } = require('./controllers/usuario')


// Rotas

router.post('/pedido', pedido)

router.post('/cadastro', cadastro)

router.post('/login', login)


module.exports = router