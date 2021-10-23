const {
    conn
} = require('../db');

async function insert(body) {
    const {
        pedido,
        descped,
        tipo_projet,
        concluido
    } = body



    const sql = `
        INSERT INTO pedido (pedido, descped, tipo_projet, concluido) VALUES ("${pedido}", "${descped}", "${tipo_projet}", "${concluido}")
    `

    const db = await conn();
    await db.run(sql)
}

async function getAll() {
    const db = await conn();
    const sql = `
        SELECT * FROM pedido LIMIT 5;
    `

    const pedidos = await db.all(sql)

    return pedidos
}


module.exports = {
    insert, getAll
}