const express = require('express');
const app = express();
const {router} = require("../src/controller/services");
app.use(express.json());
app.use(router);
const porta = 3000;


app.listen(porta, function(erro){
    if(erro) console.log(erro);
    console.log("Server rodando na porta: ", porta);
})


//req = requisicao que o usuario esta fazendo na rota raiz 
//res = Resposta da API

//connection.end();
