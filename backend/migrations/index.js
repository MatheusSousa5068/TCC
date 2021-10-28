// Faz a requisição do arquivo para conexão com o Banco
const {
  conn
} = require('../db');


require('dotenv').config();
const bcrypt = require('bcrypt')


async function up() {
  const saltRounds = 10
  const hash = await bcrypt.hash(process.env.password, saltRounds)
  // Variáveis com o código de criação das tabelas
  const sql = `
        CREATE TABLE consumidor (
            email TEXT PRIMARY KEY,
            nome TEXT,
            senha TEXT
        );
    `;

  const sql2 = `
        CREATE TABLE pedido (
            codped INTEGER PRIMARY KEY,
            pedido TEXT,
            descped TEXT,
            tipo_projet TEXT,
            concluido TEXT
        );
    `

  const sql3 = `
        CREATE TABLE cli_ped (
            email TEXT,
            codped INTEGER,
            FOREIGN KEY (email) REFERENCES consumidor(email),
            FOREIGN KEY (codped) REFERENCES pedido(codped)
        );
    `

  const sql4 = `
        CREATE TABLE funcionario (
            id INTEGER PRIMARY KEY,
            email TEXT UNIQUE,
            nome TEXT,
            senha TEXT
        );
  `

  const sql5 = `
        INSERT INTO funcionario (email, nome, senha) VALUES ("${process.env.email}", "${process.env.user}", "${hash}")
  `

  const db = await conn();

  await db.run(sql)
  await db.run(sql2)
  await db.run(sql3)
  await db.run(sql4)
  await db.run(sql5)

}


async function down() {
  const sql = `DROP TABLE consumidor pedido cli_ped`;

  const db = await conn();

  await db.run(sql);
}
module.exports = {
  up,
  down
};