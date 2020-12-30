<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once('ClassUsuario.php');

$login = new Usuario();


$login->nome = $_POST['nome'];
$login->senha = $_POST['senha'];
$validate = $login->Login();




if($validate){
    echo json_encode([true, $login->nome]);
}else{
    echo json_encode(false);
}