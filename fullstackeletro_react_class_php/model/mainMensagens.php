<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: json");

    require_once("ClassMensagens.php");

    $comentario = new Mensagem();
    $comentario->nome = $_POST['nome'];
    $comentario->mensagem = $_POST['mensagem'];

    // Inserir Registro
    // echo $comentario->Insert();
    
    $validate = $comentario->Insert();

    if($validate){
        echo json_encode(true);
    }else{
        echo json_encode(false);
    }
    

    