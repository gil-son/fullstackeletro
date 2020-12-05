<?php


include_once("ClassRanking.php");
$ranking = new Ranking();

print_r(json_encode($ranking->MaiorComprador()));