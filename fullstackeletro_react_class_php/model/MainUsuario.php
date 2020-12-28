<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once('ClassUsuario.php');

$usuario = new Usuario();
$usuario->nome = $_POST['nome'];
$usuario->senha = $_POST['senha'];


$validate = $usuario->Insert();

if($validate){
    echo json_encode(true);
}else{
    echo json_encode(false);
}