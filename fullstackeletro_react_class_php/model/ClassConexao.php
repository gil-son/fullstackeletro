<?php

abstract class ClassConexao{
    
    public function conectaDB()
    {
        try{ 
            $con = new PDO("mysql:host=localhost;dbname=fullstackeletro","root","38013051Q!1qqqqqqq");         
            return $con;
        }catch(PDOException $erro){
            return $erro->getMessage();
        }
    }
}