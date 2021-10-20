// Models
const { insert } = require('../models/pedido')


const pedido = async (req, res) => {
    const body = req.body


    await insert(body)

    res.setHeader("content-type", "application/json")
    res.sendStatus(200)
}

module.exports = { pedido }