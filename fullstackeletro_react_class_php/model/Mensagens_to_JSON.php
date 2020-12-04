<?php


include_once("ClassMensagens.php");
$comentario = new Mensagem();
print_r(json_encode($comentario->getAll()));

