const {
    conn
} = require('../db');

const bcrypt = require('bcrypt')



async function criarFuncionario(body) {
    const { email, nome, senha } = body


    const saltRounds = 10
    const hash = await bcrypt.hash(senha, saltRounds)

    const sql = `
        INSERT INTO funcionario (email, nome, senha) VALUES ("${email}", "${nome}", "${hash}")
    `

    const db = await conn();
    await db.run(sql)
}

async function verificarFuncionario(email) {
    const db = await conn()

    const sql = `
        SELECT * FROM funcionario where email = "${email}"
    `

    const workerRequested = await db.get(sql)

    return workerRequested
}



module.exports = {
 criarFuncionario, verificarFuncionario
}