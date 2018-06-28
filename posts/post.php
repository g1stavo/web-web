<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST,OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin");
require_once("database.php");

$data = json_decode(file_get_contents("php://input"));

if (isset($_POST["titulo"]) && isset($_POST["texto"]) && !empty($_POST["titulo"]) && !empty($_POST["texto"])) {
    $data->titulo = $_POST["titulo"];
    $data->texto = $_POST["texto"];
}

if (isset($data->titulo) && isset($data->texto)) {
    $db = new Database();
    
    //POST com imagem:
    if (getimagesize($_FILES["imagem"]["tmp_name"]) !== false) {
        $uploadDir = "imagens/";
        $ext = pathinfo($_FILES["imagem"]["name"], PATHINFO_EXTENSION);
        $newFilename = md5(time()) . "." . $ext;
        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $uploadDir . $newFilename)) {
            $db->Inserir($data->titulo, $data->texto, $newFilename);
            echo '{"status":"success"}';
        }
        else {
            die('{"status":"error","msg":"Erro ao mover a imagem"}');
        }
    }
    
    //POST sem imagem:
    else {
        $db->Inserir($data->titulo, $data->texto);
        echo '{"status":"success"}';
    }
}
else {
    die('{"status":"error","msg":"Campos obrigatorios nao preenchidos."}');
}