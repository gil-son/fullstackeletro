<?php
    include_once('conexao.php');
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos - Full Stack Eletro</title>
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
                <h1>Produtos</h1>
            </header>
            <hr>
                <!-- Categorias-->
                <section class="categorias">                
                    <h3>Categorias</h3>
                        <ul>
                            <li onclick="exibirCategoria('todos');">Todos (12)</li>
                            <li onclick="exibirCategoria('geladeira');">Geladeira (3)</li>
                            <li onclick="exibirCategoria('fogao');">Fogões (2)</li> 
                            <li onclick="exibirCategoria('microondas');">Microondas (3)</li>                     
                            <li onclick="exibirCategoria('lavadoura');">Lavadoura de roupas (2)</li>                     
                            <li onclick="exibirCategoria('lavaLoucas');">Lava louças (2)</li>                     
                        </ul>
            </section>
             <!-- Produtos-->   
            <div class="produtos">

                <?php
                    $sql = "select * from produto";
                    $result = $conn->query($sql);
                    if($result->num_rows > 0){
                        while($rows = $result->fetch_assoc()){
                            
                ?>
                    <div class="box_produto" id="<?php echo $rows['categoria'];?>" >
                        <img src="<?php echo $rows['imagem'];?>"  width="30%" onmouseover="destaque(this);" onmouseout="destaque(this);"> <!-- Passa o elemento como objeto--> 
                        <br>
                        <p class="descricao"><?php echo $rows['descricao'];?></p>
                        <hr>
                        <p class="descricao"><strike>R$ <?php echo $rows['preco'];?></strike></p>
                        <p class="preco">R$ <?php echo $rows['precofinal'];?></p>
                    </div>
                <?php
                        }
                    }else{
                        echo "Nenhum produto cadastrado!";
                    }
                ?>

            </div>    

            <div class="formulario-pedido" id="iformulario-pedido">
                <h3>Realizar Pedido</h3>
                <form action="#" method="post" class="bg-light">
                    <div class="form-group">
                        <label for="nome">Nome Completo:</label>
                        <input  id="nome" type="text" name="nome" value="" size="50" placeholder="Digite o nome..." required><br><br>
                    </div>  

                <div class="form-group">
                    <label for="endereco">Endereço:</label>
                    <input  id="endereco" type="text" name="endereco" value=""  size="50" placeholder="Digite o endereço..." required ><br><br>
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input  id="telefone" type="text" name="telefone" value=""  size="50" placeholder="Digite o telefone..." required><br><br>
                </div> 
                
                <div class="form-group">   
                    <select class="form-control" id="inome_produto" name="nome_produto" onchange="quantidadeProduto();">
                        <optgroup label="Geladeira/Refrigerador">
                            <option value="Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V">Geladeira/Refrigerador Consul Duplex Frost Free 340 litros Branca 110V</option>
                            <option value="Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v">Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v</option>
                            <option value="Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v">Geladeira Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v</option>
                        </optgroup> 
                        <optgroup label="Fogão">
                            <option value="Fogão Brastemp 5 Bocas BFS5N - Inox">Fogão Brastemp 5 Bocas BFS5N - Inox</option>
                            <option value="Fogão de Piso Mesa de Vidro Electrolux 5">Fogão de Piso Mesa de Vidro Electrolux 5</option>
                        </optgroup>
                        <optgroup label="Micro-ondas">
                            <option value="Microondas 25L Espelhado Pme25 Philco 127V">Microondas 25L Espelhado Pme25 Philco 127V</option>
                            <option value="Micro-ondas Consul Espelhado 32 Litros - CMS45 240v">Micro-ondas Consul Espelhado 32 Litros - CMS45 240v</option>
                            <option value="Micro-ondas Brastemp Espelhado Grill 32">Micro-ondas Brastemp Espelhado Grill 32</option>
                        </optgroup>
                        <optgroup label="Máquina/Lavadoura de Roupas">
                            <option value="Máquina De Lavar Roupas Midea Storm">Máquina De Lavar Roupas Midea Storm</option>
                            <option value="Lavadora de Roupas Brastemp 12Kg">Lavadora de Roupas Brastemp 12Kg</option>
                        </optgroup>
						<optgroup label="Lava-Louças">
                            <option value="Lava-Louças Electrolux Inox 14 Serviços LV14X">Lava-Louças Electrolux Inox 14 Serviços LV14X</option>
                            <option value="Lava Louças Brastemp 10 Serviços BLF10 Branca 110V">Lava Louças Brastemp 10 Serviços BLF10 Branca 110V</option>
                    </select><br><br>    
                </div>
                <div class="form-group">
                    <label for="quantidade">Quantidade:</label>
                    <input type="number" min="1" max="10" id="quantidade" name="quantidade" value="" required><br><br>
                </div> 
                    <!-- <label for="valor_unitario">Valor Unitário:</label>
                    <input id="valor_unitario" type="text" id="valor_unitario" name="valor_unitario" value="" disabled><br><br>
                    
                    <label for="valor_total">Valor Total:</label>
                    <input id="valor_total" type="text" id="valor_total" name="valor_total" value="" disabled><br><br> -->

                    <button class="btn btn-danger btn-lg btn-block" id="Enviar" type="submit" value="Confirmar" >Calcular!</button>
                </form>

                <div>
                    <?php
                        
                        // $sqlproduto = $conn->query("select * from produto");
                        // $resultado =  mysqli_fetch_all($sqlproduto);
                        // echo '<pre>';
                        // print_r($resultado);
                        // echo '</pre>';
                        // $i = 0;
                        // for($i = 0; $i<12; $i++){
                        //     echo '<pre>';
                        //             print_r($resultado[$i][2]);
                        //     echo '</pre>'; 
                        // }
                        //$resultado = $conn->query($sqlproduto);
                     
                        if(isset($_POST['nome']) && isset($_POST['endereco']) && isset($_POST['telefone']) && isset($_POST['nome_produto']) && isset($_POST['quantidade'])){
                            $nome = $_POST['nome'];
                            $endereco = $_POST['endereco'];
                            $telefone = $_POST['telefone'];
                            $nome_produto = $_POST['nome_produto'];
                            $quantidade = $_POST['quantidade'];
                            
                           

                                if(isset($_POST['nome_produto']) && $quantidade > 0){
                                    $sql_valor_produto = $conn->query("select preco from produto where descricao = '$nome_produto'");
                                    $resultado =  mysqli_fetch_all($sql_valor_produto);
                                    
                                    $valor_unitario = $resultado[0][0];

                                    // echo '<pre>';
                                    //       print_r($resultado);
                                    // echo '<pre>';

                                    $valor_total = $quantidade * $valor_unitario;

                                    
                                    echo "<hr><b>Nome:</b> $nome <br/>". 
                                    "<b>Endereço:</b> $endereco <br/>" . 
                                    "<b>Telefone:</b> $telefone <br/>" . 
                                    "<b>Nome Produto:</b> $nome_produto <br/>" .
                                    "<b>Quantidade:</b> $quantidade <br/>" .
                                    "<b>Valor Unitário:</b> $valor_unitario <br/>" .
                                    "<b>Valor Total:</b> $valor_total<hr> <br/>";

                                     
                    ?>
                                    <form action="" methodo="post">
                                        
                                        <button class="btn btn-danger btn" id="Enviar" type="submit" value="Confirmar" >Finalizar</button>
                                    </form>

                                    <?php

                                    
                                        
                                        $inserir = "insert into pedido(nome_cliente, endereco, telefone, nome_produto, valor_unitario, quantidade, valor_total) 
                                                                 values('$nome','$endereco','$telefone','$nome_produto','$valor_unitario','$quantidade','$valor_total')";
                                                      
                                        $resultado = $conn->query($inserir);

                                        // mysqli_query ($conn, $inserir);  

                                        if($resultado){


                                            $sql_num_pedido = $conn->query("select num_pedido from pedido where nome_cliente = '$nome' and telefone = '$telefone'");
                                            $sql_conta_pedido = $conn->query("SELECT COUNT(num_pedido) FROM pedido;");
                                            
                                            $resultado =  mysqli_fetch_all($sql_num_pedido);
                                            $conta_pedido = mysqli_fetch_all($sql_conta_pedido);

                                            
                                            $i = 1;
                                            $num_pedido = $conta_pedido[0][0];


                                            // echo '<pre>';
                                            //        print_r($resultado);
                                            // echo '<pre>';

                                            echo "<hr><b>Compra Realizada com Sucesso!</b>" . "<br/>";
                                            echo "<b>Número do Pedido</b>: $num_pedido";

                                          
                                        }else{
                                            echo "Erro ao realizar a compra!";
                                        }
                                        
                                   ?>

                    <?php


                                }else{
                                    echo "Dados inválidos";
                                }
      
                        }                       

                    ?>
                </div>
            </div>
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
