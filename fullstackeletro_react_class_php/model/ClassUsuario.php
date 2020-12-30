<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once('ClassConexao.php');

class Usuario{

    public $nome;
    public $senha;

    public static function getAll()  // Adm //Criar Classe Associativa para Endereco
    {
        $connection = ClassConexao::conectaDB();

        $stmt = $connection->query("SELECT * FROM usuario");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }

    public function cadastroUsuario()
    {
        $connection = ClassConexao::conectaDB();
        $stmt = $connection->query("INSERT INTO usuario (`nome`,`senha`) VALUES ('$this->nome','$this->senha')");

        if($stmt->rowCount()>0){ return true;}else{ return false;}

    }

    public function cadastroEndereco()
    {
        // No momento do cadastro essa tabela pode ser criada obtendo o id do usuario ou após o cadastro, se o usuario preencher
    }

    public function Login()
    {
        $connection = ClassConexao::conectaDB();
        $stmt = $connection->query("SELECT * FROM usuario where nome = '$this->nome' && senha = '$this->senha'");
        
        
        if($stmt->rowCount()>0){ return true;}else{return false;}
    }

}