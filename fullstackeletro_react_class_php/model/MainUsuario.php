<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once('ClassUsuario.php');


if (strlen($_POST['nome']) > 2 && strlen($_POST['senha']) > 2) {

    $usuario = new Usuario();
    $usuario->nome = $_POST['nome'];
    $usuario->senha = $_POST['senha'];

}

    $validate = $usuario->cadastroUsuario();

    if($validate){
        echo json_encode(true);
    }else{
        echo json_encode(false);
    }