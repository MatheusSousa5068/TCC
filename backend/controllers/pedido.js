// Models
const { insert, getAll, getSpecific, deleteSpecific, relation, getLast } = require('../models/pedido')


const pedido = async (req, res) => {
    const body = req.body
    await insert(body)

    const resw = await getLast()
    await relation(body.email._W, resw.codped)
    

    res.setHeader("content-type", "application/json")
    res.sendStatus(200)
}

const listarPedidos = async (req, res) => {
    const json = await getAll()

    res.setHeader("content-type", "application/json")
    res.json(json)
}

const buscarPedido = async (req, res) => {
    const { codped } = req.body

    const result = await getSpecific(codped)
    
    
    res.send(result)
}

const deletarPedido = async (req, res) => {
    const { codped } = req.body

    const result = await deleteSpecific(codped)

    res.send("pedido deletado")
}

module.exports = { pedido, listarPedidos, buscarPedido, deletarPedido }