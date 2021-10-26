const express = require('express')
const router = express.Router()


// Controllers
const { pedido, listarPedidos, buscarPedido, deletarPedido } = require('./controllers/pedido')


const { cadastro, login } = require('./controllers/usuario')


// Rotas

router.post('/pedido', pedido)

router.post('/cadastro', cadastro)

router.post('/login', login)



router.get('/pedidos', listarPedidos)

router.post('/pedidoCod', buscarPedido)

router.post('/delete', deletarPedido)


module.exports = router