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
        SELECT * FROM pedido where concluido = "false" LIMIT 5;
    `

    const pedidos = await db.all(sql)

    return pedidos
}

async function getSpecific(codped) {
    const db = await conn();
    const sql = `
        SELECT * FROM pedido where codped = ${codped};
    `

    const pedidos = await db.get(sql)

    return pedidos
}

async function deleteSpecific(codped) {
    const db = await conn()
    const sql = `
        UPDATE pedido SET concluido = "true" where codped = ${codped}
    `

    await db.run(sql)
}

async function relation(email, codped) {
    const db = await conn()

    const sql = `
        INSERT INTO cli_ped (email, codped) VALUES (${email}, ${codped})
    `

    await db.run(sql)
}

async function getLast() {
    const db = await conn()

    const sql = `
        SELECT codped FROM pedido ORDER BY codped DESC LIMIT 1;
    `

    const result = db.get(sql)

    return result
}

module.exports = {
    insert, getAll, getSpecific, deleteSpecific, relation, getLast
}