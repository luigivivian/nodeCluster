const express = require('express');
const app = express();


app.use(require('./routes'));



const server = require('http').createServer(app);

server.on('listening', () => {
  console.log("Servidor rodando na porta: 8000");
})
server.listen(8000);