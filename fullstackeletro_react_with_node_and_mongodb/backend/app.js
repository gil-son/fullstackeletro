const express = require('express');
const cors = require('cors');

// config
const app = express();
app.use(express.json());
app.use(cors());

//intermediador do MongoDB
const mongoose = require('mongoose');

//models - moogose - intermediador do MongoDB
require('./src/models/Produtos');
const Produtos = mongoose.model('produtos');

require('./src/models/Comentarios');
const Comentarios = mongoose.model('comentarios');

//conexao db
require('./src/db/connect');


//routes - produtos
app.get('/product', async (req, res) =>{
    const produtoResponse = await Produtos.find(); // promessa -  Similar ao SELECT
    const produtoJson = await produtoResponse
    
    return res.json(produtoJson);
});


//routes - comentários
app.get('/comment', async (req, res) =>{
    const comentarioResponse = await Comentarios.find(); // promessa -  Similar ao SELECT
    const comentarioJson = await comentarioResponse
    
    return res.json(comentarioJson);
});


app.post('/comment', async (req, res) =>{
    const novoComentario = new Comentarios({
        nome: req.body.nome,
        mensagem: req.body.mensagem
    });

    novoComentario.save();
    
    return res.json({info:"Mensagem cadastrada com sucesso!", detalhes: novoComentario});
});



app.listen( 3333, () => {
    console.log("Servidor!");
})