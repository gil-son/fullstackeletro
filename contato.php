<?php
    include_once('conexao.php');

    if(isset($_POST['nome']) && isset($_POST['mensagem'])){
        $nome = $_POST['nome'];
        $mensagem = $_POST['mensagem'];

        $sql = "insert into comentario (nome, mensagem) values('$nome','$mensagem')";
        $result = $conn->query($sql);


   
    }

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato - Full Stack Eletro</title>
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <script src="js/index.js"></script>
</head>
<body>
    <!-- início Menu -->
        <?php include_once('menu.html') ?>  
    <!-- Fim Menu -->
    <main>
        <header>
            <h1>Contato</h1>
        </header>
        <hr>
        <section class="contatos">
            <table border=0 width="100%"cellpading="20">
                <tr>
                    <td width="50%" align="center">
                        <img src="img/email.png" width="10%">
                        contato@fullstackeletro.com
                    </td>
                    <td width="50%" align="center">
                        (11) 99999-9999
                        <img src="img/telefoneWhatsapp.png" width="10%">
                        
                    </td>
                </tr>
            </table>
         </section>
        
        <section class="fomulario-contato">
            <form action="" method="post">
                <label for="nome">Nome:</label>
                <input id="nome" name="nome" value="" type="text" size="50" placeholder="Digite o e-mail..."><br><br>
                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" name="mensagem" value="" rows="5" cols="100" placeholder="Digite a sua mensagem..." maxlength="300"></textarea><br><br>
                <button id="Enviar" type="submit" value="Enviar">Enviar</button>
            </form>
        </section>
     
        <div class="comentarios">
            <h3>Mensagens</h3>
            <?php
                        $sql = "select * from comentario";
                        $result = $conn->query($sql);
                        if($result->num_rows > 0){
                            while($rows = $result->fetch_assoc()){
                                echo "Data: " . $rows['data'] . "<br>" . "Nome: " .$rows['nome'] . "<br>". "Mensagem: " . $rows['mensagem'] . "<hr>";
                            }
                        }else{
                            echo "Nenhum comentário no momento!";
                        }
                ?>
        <div>
    </main>








     <footer id="rodape">
        <p id="formas_pagamento">Formas de pagamento</p>
            <img width="300" height="100" src="img/formasPagamento.png" alt="Formas de Pagamento">
        <p>&copy; Recode Pro</p>
     </footer>
</body>
</html>