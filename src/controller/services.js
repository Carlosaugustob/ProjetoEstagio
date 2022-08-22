const express = require('express');
const app = express();
const {connection} = require('../db/mysql.js');
const comando = 'SELECT * FROM ammo';
const axios = require("axios");
const cors = require('cors');
global.XMLHttpRequest ={} 


axios.get("http://localhost:3000/consulta").then(function(resposta){
  console.log(resposta.data);
}).catch(function(error){
    if(error){
      console.log(error, "Erro ao conectar com axios");
    }
  });

const consulta = (req, res) => { 
  res.header("Access-Control-Allow-Origin", "*");
  return connection.query(comando, function (erro, results) {
  if (erro) throw erro;
  if(!results) console.log("results sem retorno");
res.send(results);
});
}
const cadastro = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    const {calibre,peso,comprimento,tipo} = req.body;
    console.log("body do cadastro", req.body);
    const campos = [calibre, peso, comprimento, tipo];
    for (const campo of campos) {
    if(!campo) console.log('Parâmetros obrigatórios não informados');
  };
    //Formatacao
   // const comprimentoFormatado = comprimento.replace(",",".");
    return connection.query(`INSERT INTO ammo (calibre, peso, comprimento,tipo) VALUES ("${calibre}", "${peso}", "${comprimento}","${tipo}")`, function (erro, results) { 
      if(erro) throw erro;
      if(!results) console.log("Erro no cadastro");
      res.send(req.body);
    });
  }
  const router = new express.Router();
  router.get("/", function(req,res){
    res.send("Hello world!");
})
 //  * TUDO
router.get("/consulta" , consulta);
//Incrementando dados

router.post("/cadastro", cadastro)


  module.exports = {router};
  /*module.exports = {
    async headers() {
      retun [
        {
          source: '/:path*',
          headers: [
            {key: 'Access-Control-Allow-Credentials', value: 'true'},
            {key: 'Access-Control-Allow-Origin', value: '*'},
            {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
            {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token','X-Requested-With'}

          ]
        }
      ]
    }
  }*/