<?php

include_once("ClassConexao.php");

class Ranking{

    // public $id;
    public $nome;
    public $mensagem;

    public static function MaiorComprador()
    {
        $connection = ClassConexao::conectaDB();

        $stmt = $connection->query("SELECT nome_cliente, descricao, max(quantidade) from produto
                                   inner join pedido
                                    on idproduto = num_pedido;"); 

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    }


    public static function TopCategoria()
    {
        $connection = ClassConexao::conectaDB();

        $stmt = $connection->query("SELECT categoria, sum(quantidade) FROM produto
                                      INNER JOIN pedido
                                      ON idproduto = num_pedido
                                      GROUP BY categoria;");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
        // $stmt = $connection->query("SELECT * FROM comentario"); 
        // return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }



}