<?php
     header("Access-Control-Allow-Origin:*");
     header("Content-type: application/json");
     $arr = array("nome"=>$_POST['nome']); //Vai pegar do formulário e enviar para url desse diretório
     
     echo json_encode($arr);

?>