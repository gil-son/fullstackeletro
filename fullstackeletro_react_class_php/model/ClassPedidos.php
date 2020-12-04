<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

echo "<pre>";
    print_r($_POST);
echo "</pre>";



// Lógica para inserir registro



include_once("ClassConexao.php");

class Pedido{

    // public $id;
    public $nome;
    public $endereco;
    public $telefone;
    public $produto;
    public $preco;
    public $quantidade;
    public $total;

    public static function getAll()
    {
        $connection = ClassConexao::conectaDB();

        $stmt = $connection->query("SELECT * FROM comentario"); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function Update()
    {
        $connection = ClassConexao::conectaDB();
        $stmt = $connection->query("INSERT INTO comentario (`nome`, `mensagem`) VALUES ('$this->nome', '$this->mensagem')");




        $stmt = $connection->query("INSERT INTO `pedido` (`nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`)
                                   VALUES ('$this->nome',
                                            '$this->endereco',
                                           '$this->telefone',
                                           '$this->produto',
                                           '$this->preco',
                                           '$this->quantidade',
                                           '$this->total')");
        
        // Retorna quantas linhas foram afetadas
        return $stmt->rowCount();
    }
}

    // $pedido = new Pedido();
    // $pedido->nome = $_POST['nome'];
    // $pedido->endereco = $_POST['endereco'];
    // $pedido->telefone = $_POST['telefone'];
    // $pedido->produto = $_POST['produto'];
    // $pedido->preco = $_POST['preco'];
    // $pedido->quantidade = $_POST['quantidade'];
    // $pedido->total = $_POST['total'];

    // // Inserir Registro
    // echo $pedido->Update();