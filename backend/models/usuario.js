const {
    conn
} = require('../db');

const bcrypt = require('bcrypt')



async function criarUsuario(body) {
    const { email, nome, senha } = body


    const saltRounds = 10
    const hash = await bcrypt.hash(senha, saltRounds)

    const sql = `
        INSERT INTO consumidor (email, nome, senha) VALUES ("${email}", "${nome}", "${hash}")
    `

    const db = await conn();
    await db.run(sql)
}

async function verificar(email) {
    const db = await conn()

    const sql = `
        SELECT * FROM consumidor where email = "${email}"
    `

    const userRequested = await db.get(sql)

    return userRequested
}



module.exports = {
 criarUsuario, verificar
}