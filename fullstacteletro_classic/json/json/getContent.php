<?php
    $servername = "localhost";
    $username="root";
    $password="38013051Q!1qqqqqqq";
    $database = "fseletro";
    //$tabela = "produto";
    $tabela = $_GET['table']; 
    /* P/ testar digita ao final da URL: ?table=produto. No entanto, não é seguro.
        para ter segurança, é interessante criar uma key com criptografia que seria validade no php para que não fosse acessado os dados sem autorização
    */


    // Criando conexao
    $conn = mysqli_connect($servername,$username,$password,$database);

    // Verificando a conexão
    if(!$conn){
        die("A conexão ao BD falhou:".mysqli_connect_error());
    }


    $sql = "select * from $tabela";
    $result = $conn->query($sql);

    //print_r($rows = $result->fetch_all()); // Não trás os nomes dos campos


    //print_r($result->fetch_all(MYSQLI_ASSOC)); //Trás os nomes dos Campos
    
    print_r(json_encode($result->fetch_all(MYSQLI_ASSOC))); // Converteu para JSON

    // O JSON está retornando a tabela. Logo é possível obter qualquer tabela. Olha a variável $tabela

    
?>