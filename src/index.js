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
/*import axios from "axios";
const url= "http://127.0.0.1:5500/axiosApi/index.html"

Axios.post("http://127.0.0.1:5500/axiosApi/index.html", {
    data: {
        calibre1: calibre, 
        peso1: peso, 
        comprimento1: comprimento,
        tipo1: tipo
    }
}).then((response) => {
        console.log(response)
}).catch(err => console.log(err))*/