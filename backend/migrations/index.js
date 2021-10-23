// Faz a requisição do arquivo para conexão com o Banco
const {
  conn
} = require('../db');

async function up() {
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
        CREATE TABLE cli_ped(
            email varchar(20),
            codped serial,
            FOREIGN KEY (email) REFERENCES consumidor(email),
            FOREIGN KEY (codped) REFERENCES pedido(codped)
        );
    `

  const db = await conn();

  await db.run(sql)
  await db.run(sql2)
  await db.run(sql3)

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