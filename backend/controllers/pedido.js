// Models
const { insert, getAll } = require('../models/pedido')


const pedido = async (req, res) => {
    const body = req.body


    await insert(body)

    res.setHeader("content-type", "application/json")
    res.sendStatus(200)
}

const listarPedidos = async (req, res) => {
    const json = await getAll()

    res.setHeader("content-type", "application/json")
    res.send(json)
}

module.exports = { pedido, listarPedidos }