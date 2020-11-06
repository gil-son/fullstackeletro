<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nossas lojas - Full Stack Eletro</title>
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
                <h1>Nossas Lojas</h1>
            </header>
            
            <hr>
            <section class="lojas">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                        <th scope="col">Cidade</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Número</th>
                        <th scope="col">Proximidade</th>
                        <th scope="col">Telefone</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Rio de Janeiro</th>
                            <td>Avenida Presidente Vargas, 5000</td>
                            <td>10 &ordm; andar</td>
                            <td>Centro</td>
                            <td>(21) 3333-3333</td>
                        </tr>

                        <tr>
                            <th scope="row">São Paulo</th>
                            <td>Avenidade Paulista, 985</td>
                            <td>3 &ordm; andar</td>
                            <td>Jardins</td>
                            <td>(11) 4444-4444</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">Santa Catarina</th>
                            <td>Rua Major &Aacute; vila, 370</td>
                            <td>Vila Mariana</td>
                            <td>Nordeste</td>
                            <td>(47) 5555-5555</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </main>



        
    <footer id="rodape">
        <p id="formas_pagamento">Formas de pagamento</p>
            <img width="300" height="100" src="img/formasPagamento.png" alt="Formas de Pagamento">
        <p>&copy; Recode Pro</p>
    </footer>

    <script src="js/index.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>