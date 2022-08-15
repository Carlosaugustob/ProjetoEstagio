const mysql = require('mysql');

//Criando conexao com mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'inventory_db'
  });
  connection.connect(function (erro) { 
    if(erro) return console.log(erro); 
    console.log('conectado no mysql')
 });
 module.exports = {connection};