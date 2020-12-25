<?php

abstract class ClassConexao{
    
    public function conectaDB()
    {
        try{
            $con = new PDO("mysql:host=localhost;dbname=fullstackeletro","root","");         
            return $con;
        }catch(PDOException $erro){
            return $erro->getMessage();
        }
    }
}