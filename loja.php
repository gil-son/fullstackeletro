<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossas lojas - Full Stack Eletro</title>
    <link rel="stylesheet" type="text/css" href="css/estilo.css" />
    <script src="js/index.js"></script>
</head>
<body>
    <!-- início Menu -->
      <?php include_once('menu.html') ?>    
    <!-- Fim Menu -->
    <main>
        <header>
            <h1>Nossas Lojas</h1>
        </header>
        
        <hr>
        <section class="lojas">
            <table border=0 width="100%" cellpadding="20">
                <tr>
                    <td width="33%">
                        <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Vargas, 5000</p>
                        <p>10 &ordm; andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                    </td>
                    <td width="33%">
                        <h3>São Paulo</h3>
                        <p>Avenidade Paulista, 985</p>
                        <p>3 &ordm; andar</p>
                        <p>Jardins</p>
                        <p>(11) 4444-4444</p>
                    </td>
                    <td width="33%">
                        <h3>Santa Catarina</h3>
                        <p>Rua Major &Aacute; vila, 370</p>
                        <p>Vila Mariana</p>
                        <p>(47) 5555-5555</p>
                    </td>
                </tr>
            </table>
        </section>
    </main>



        
    <footer id="rodape">
        <p id="formas_pagamento">Formas de pagamento</p>
            <img width="300" height="100" src="img/formasPagamento.png" alt="Formas de Pagamento">
        <p>&copy; Recode Pro</p>
    </footer>

</body>
</html>