<?php

    include_once("ClassConexao.php");

class ClassRank extends ClassConexao{

    // Exibir em JSON
    public function exibeProdutos()
    {
        $BFetch=$this->conectaDB()->prepare("select * from produto");
        $BFetch->execute();

        $j=[];
        $i=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $j[$i] = [
                "Id_Produto" => $Fetch['idproduto'],
                "Categoria" => $Fetch['categoria'],
                "Descricao" => $Fetch['descricao'],
                "Preco" => $Fetch['preco'],
                "Preco_Final" => $Fetch['precofinal'],
                "Imagem" => $Fetch['imagem']
            ];
            $i++;
        }
        
        header("Access-Control-Allow-Origin:*"); //Liberar o crossing over/ cors / https://stackoverflow.com/questions/46522749/how-to-solve-redirect-has-been-blocked-by-cors-policy-no-access-control-allow
        header("Content-type: application/json"); // Para poder repassar via json
        print_r(json_encode($j));
    }
}

// public function RankCategoria(){
    //     $connection = ClassConexao::conectaDB();

    //     $stmt = $connection->query("SELECT categoria, sum(quantidade) FROM produto
    //                                  INNER JOIN pedido
    //                                  ON idproduto = num_pedido
    //                                  GROUP BY categoria;"); 

    //     return $stmt->fetchAll(PDO::FETCH_ASSOC);

    // }

    // public function MaiorComprador(){
    //     $connection = ClassConexao::conectaDB();

    //     $stmt = $connection->query("SELECT nome_cliente, descricao, max(quantidade) from produto
    //                                 inner join pedido
    //                                 on idproduto = num_pedido;"); 




    //     return $stmt->fetchAll(PDO::FETCH_ASSOC);

    // }

    // {
    //     $BFetch=$this->conectaDB()->prepare(
    //         "SELECT categoria, sum(quantidade) FROM produto
    //          INNER JOIN pedido
    //          ON idproduto = num_pedido
    //          GROUP BY categoria"
    //     );
       
       
    //     $BFetch->execute();

    //     $j=[];
    //     $i=0;

    //     while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
    //         $j[$i] = [
    //             // "Id" => $i +=1,
    //             "Categoria" => $Fetch['categoria'],
    //             "Descricao" => $Fetch['sum(quantidade)'],
                
    //         ];
    //         $i++;
    //     }