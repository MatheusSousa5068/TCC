// Requisições do Express
const express = require('express')
const app = express()

// Requisições adicionais
const fs = require('fs');
const { db } = require('./db');
const routes = require('./routes')

// Migrations
const Migration = require('./migrations/index')

// Porta HTTP
const PORT = 3000

// Usando as rotas importadas
app.use(express.json());
app.use('/', routes);


// Se o banco de dados não existe, o código abaixo faz a criação das tabelas
(async () => {
    if (!fs.existsSync(db)) {
      await Migration.up();
    }
})();


// Ouvindo na porta 3000
app.listen(PORT, console.log(`server is running at http://localhost:${PORT}`))