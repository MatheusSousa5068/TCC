const {
    conn
} = require('../db');

async function insert(body) {
    const {
        pedido,
        descped,
        tipo_projet
    } = body


    const sql = `
        INSERT INTO pedido (pedido, descped, tipo_projet) VALUES ("${pedido}", "${descped}", "${tipo_projet}")
    `

    const db = await conn();
    await db.run(sql)
}


module.exports = {
    insert
}