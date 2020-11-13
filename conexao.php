<?php
    $servername = "localhost";
    $username="root";
    $password="";
    $database = "fseletro";

    // Criando conexao
    $conn = mysqli_connect($servername,$username,$password,$database);

    // Verificando a conexão
    if(!$conn){
        die("A conexão ao BD falhou:".mysqli_connect_error());
    }


?>
