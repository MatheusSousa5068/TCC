const express = require('express')
const router = express.Router()


// Controllers
const { pedido, listarPedidos, buscarPedido, deletarPedido } = require('./controllers/pedido')
const { cadastro, login } = require('./controllers/usuario')
const { cadastroFuncionario, loginFuncionario } = require('./controllers/funcionario')


// Rota de criação do pedido
router.post('/pedido', pedido)

// Rota de busca de pedido específico
router.post('/pedidoCod', buscarPedido)

// Rota para marcar projeto como concluído
router.post('/delete', deletarPedido)

// Rotas de cadastro e login
router.post('/cadastro', cadastro)
router.post('/login', login)

// Lista todos os pedidos
router.get('/pedidos', listarPedidos)

// Rota de cadastro e login do funcionário
router.post('/cadastroFunc', cadastroFuncionario)
router.post('/loginFunc', loginFuncionario)


module.exports = router