<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

// $arr = array("nome"=>$_POST['nome']);


// echo "<pre>";
//     print_r($arr);
// echo "</pre>";

// echo json_encode($arr);

// echo "<pre>";
//     print_r($_POST);
// echo "</pre>";


// echo "<br/> Full Stack Eletro";

/*
    [
        ["nome"] => "Faulano",
        ["mensagem"] => "Etc"
    ]
*/


// Lógica para inserir registro



include_once("ClassConexao.php");

class Mensagem{

    // public $id;
    public $nome;
    public $mensagem;

    public static function getAll()
    {
        $connection = ClassConexao::conectaDB();

        $stmt = $connection->query("SELECT * FROM comentario"); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function Insert()
    {
        $connection = ClassConexao::conectaDB();
        $stmt = $connection->query("INSERT INTO comentario (`nome`, `mensagem`) VALUES ('$this->nome', '$this->mensagem')");
        
        // Retorna quantas linhas foram afetadas
        //return $stmt->rowCount();

        if($stmt->rowCount()>0){
            return true;
        }else{
            return false;
        }
    }


}


    // $comentario = new Mensagem();

    // print_r(json_encode($comentario->getAll()));

    // $comentario->nome = $_POST['nome'];
    // $comentario->mensagem = $_POST['mensagem'];

    // // Inserir Registro
    // // echo $comentario->Update();
    // $comentario->Update();


