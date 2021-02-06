const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Produtos = new Schema({
    idproduto:{
        type: Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    preco:{
        type:Number,
        required:true
    },
    precofinal:{
        type:Number,
        required:true
    },
    imagem:{
        type:String,
        required:true
    }

})

// Vai criar a tabela com base no Schema
mongoose.model('produtos', Produtos);