const express = require('express');
const app = express();
const {connection} = require('../db/mysql.js');
const comando = 'SELECT * FROM ammo';


const consulta = (req, res) => { 
    return connection.query(comando, function (erro, results) {
    if (erro) throw erro;
    if(!results) console.log("results sem retorno");
  res.send(results);
});
}
const cadastro = (req, res) => {
    //console.log(req);
    const {calibre,peso,comprimento,tipo} = req.body;
    //const campos = [calibre, peso, comprimento, tipo];
//for (const campo of campos) {
//if(!campo) console.log('Parâmetros obrigatórios não informados');
//};
    //Formatacao
    const comprimentoFormatado = comprimento.replace(",",".");
    return connection.query(`INSERT INTO ammo (calibre, peso, comprimento,tipo) VALUES ("${calibre}", "${peso}", "${comprimentoFormatado}","${tipo}")`, function (erro, results) { 
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