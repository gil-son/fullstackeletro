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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
    <!-- início Menu -->
        <?php include_once('menu.html') ?>  
    <!-- Fim Menu -->
    <main>
        <div class="container-fluid">
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
         <h3>Formulário de Contato</h3>
        <section class="fomulario-contato bg-light">

            <form action="" method="post">
            <div class="form-group">
                <label for="nome">Nome:</label>
                <input id="nome" name="nome" value="" type="text" size="50" placeholder="Digite o e-mail..."><br><br>
            </div>
            <div class="form-group">    
                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" name="mensagem" value="" rows="5" cols="100" placeholder="Digite a sua mensagem..." maxlength="300"></textarea><br><br>
            </div> 
                <button class="btn btn-danger btn" id="Enviar" type="submit" value="Enviar">Enviar</button>
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
         </div>
    </main>








     <footer id="rodape">
        <p id="formas_pagamento">Formas de pagamento</p>
            <img width="300" height="100" src="img/formasPagamento.png" alt="Formas de Pagamento">
        <p>&copy; Recode Pro</p>
     </footer>

     <script src="js/index.js"></script>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>
