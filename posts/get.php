<?php
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