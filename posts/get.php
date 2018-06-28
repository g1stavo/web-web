<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: false');
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin');
header('Access-Control-Expose-Headers: X-Olaround-Debug-Mode, X-Olaround-Request-Start-Timestamp, X-Olaround-Request-End-Timestamp, X-Olaround-Request-Time, X-Olaround-Request-Method, X-Olaround-Request-Result, X-Olaround-Request-Endpoint');
header("Access-Control-Max-Age: 3600");

require_once("database.php");
$db = new Database();

if (isset($_GET['id']) && !empty($_GET['id'])) { 
    echo $db->BuscaPorID($_GET['id']);
}
else if (isset($_GET['titulo']) && !empty($_GET['titulo'])) {
    echo $db->BuscaEmTitulo($_GET['titulo']);
}
else if (isset($_GET['texto']) && !empty($_GET['texto'])) {
    echo $db->BuscaEmTexto($_GET['texto']);
}
else if (isset($_GET['novos']) && !empty($_GET['novos'])) {
    echo $db->BuscaNovos($_GET['novos']);
}
else {
    echo $db->BuscaTodos();
}