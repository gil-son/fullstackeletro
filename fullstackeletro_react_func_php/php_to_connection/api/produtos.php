<?php

    require_once "../actions/db_connect.php";

    $result = query("SELECT * FROM produto");
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    echo json_encode($produtos);
