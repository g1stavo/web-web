<?php

class Database {

	//Configurações do banco de dados:
    private $host = '';
    private $dbname = '';
    private $dbuser = '';
    private $dbpw = '';
    private $con;

    function __construct() {
        $this->con = new mysqli($this->host, $this->dbuser, $this->dbpw, $this->dbname);
        if ($this->con->connect_error) {
            die("Erro de conex&atilde;o: " . $this->con->connect_error);
        }
        $this->con->query(("SET NAMES 'utf8'"));
    }

    public function Inserir($titulo, $texto, $imagem = null) {
        $titulo = $this->con->real_escape_string($titulo);
        $texto = $this->con->real_escape_string($texto);
        if ($imagem != null) {
            $imagem = $this->con->real_escape_string($imagem);
            $query = "INSERT INTO posts (titulo, descricao, foto) VALUES ('$titulo', '$texto', '$imagem')";
        }
        else {
            $query = "INSERT INTO posts (titulo, descricao) VALUES ('$titulo', '$texto')";
        }
        $this->con->query($query);
    }
    
    public function BuscaTodos() {
        $query = "SELECT * FROM posts";
        $res = $this->con->query($query);
        return $this->PreparaJSON($res);
    }

    public function BuscaPorID($id) {
        if (!filter_var($id, FILTER_VALIDATE_INT) || $id <= 0) {
            return;
        }
        $id = $this->con->real_escape_string($id);
        $query = "SELECT * FROM posts WHERE id = $id";
        $res = $this->con->query($query);
        return $this->PreparaJSON($res);
    }
    
    public function BuscaEmTitulo($titulo) {
        $titulo = $this->con->real_escape_string($titulo);
        $query = "SELECT * FROM posts WHERE titulo LIKE '%$titulo%'";
        $res = $this->con->query($query);
        return $this->PreparaJSON($res);
    }
    
    public function BuscaEmTexto($texto) {
        $texto = $this->con->real_escape_string($texto);
        $query = "SELECT * FROM posts WHERE descricao LIKE '%$texto%'";
        $res = $this->con->query($query);
        return $this->PreparaJSON($res);
    }
    
    public function BuscaNovos($novos) {
        if (!filter_var($novos, FILTER_VALIDATE_INT) || $novos <= 0) {
            return;
        }
        $novos = $this->con->real_escape_string($novos);
        $query = "SELECT * FROM posts ORDER BY id DESC LIMIT $novos";
        $res = $this->con->query($query);
        return $this->PreparaJSON($res);
    }

    private function PreparaJSON($sql_result) {
        $arr = array();
        while ($row = $sql_result->fetch_array(MYSQLI_ASSOC)) {
            $arr[] = $row;
        }
        return json_encode($arr);
    }

}
