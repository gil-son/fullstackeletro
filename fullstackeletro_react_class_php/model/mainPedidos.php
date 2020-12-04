<?php

include_once("ClassPedidos.php");


    $pedido = new Pedido();
    $pedido->nome = $_POST['nome'];
    $pedido->endereco = $_POST['endereco'];
    $pedido->telefone = $_POST['telefone'];
    $pedido->produto = $_POST['produto'];
    $pedido->preco = $_POST['preco'];
    $pedido->quantidade = $_POST['quantidade'];
    $pedido->total = $_POST['total'];

    // Inserir Pedido
    // echo $pedido->Update();
    $pedido->Update();