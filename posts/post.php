<?php

require_once("database.php");

if (isset($_POST["titulo"]) && isset($_POST["texto"]) && !empty($_POST["titulo"]) && !empty($_POST["texto"])) {
    $db = new Database();
    $db->Inserir($_POST["titulo"], $_POST["texto"]);
}