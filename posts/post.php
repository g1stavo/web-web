<?php
require_once("database.php");

if (isset($_POST["titulo"]) && isset($_POST["texto"]) && !empty($_POST["titulo"]) && !empty($_POST["texto"])) {
    $db = new Database();
    
    //POST com imagem:
    if (getimagesize($_FILES["imagem"]["tmp_name"]) !== false) {
        $uploadDir = "imagens/";
        $ext = pathinfo($_FILES["imagem"]["name"], PATHINFO_EXTENSION);
        $newFilename = md5(time()) . "." . $ext;
        if (move_uploaded_file($_FILES["imagem"]["tmp_name"], $uploadDir . $newFilename)) {
            $db->Inserir($_POST["titulo"], $_POST["texto"], $newFilename);
            echo '{"status":"success"}';
        }
        else {
            die('{"status":"error","msg":"Erro ao mover a imagem"}');
        }
    }
    
    //POST sem imagem:
    else {
        $db->Inserir($_POST["titulo"], $_POST["texto"]);
        echo '{"status":"success"}';
    }
}