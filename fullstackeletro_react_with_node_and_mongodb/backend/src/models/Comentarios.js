const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Comentarios = new Schema({
    nome:{
        type: String,
        required:true
    },
    mensagem:{
        type:String,
        required:true
    }

})

// Vai criar a tabela com base no Schema
mongoose.model('comentarios', Comentarios);