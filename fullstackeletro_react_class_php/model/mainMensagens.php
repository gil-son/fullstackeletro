<?php

    include_once("ClassMensagens.php");

    $comentario = new Mensagem();
    $comentario->nome = $_POST['nome'];
    $comentario->mensagem = $_POST['mensagem'];

    // Inserir Registro
    // echo $comentario->Update();
    $comentario->Update();

    