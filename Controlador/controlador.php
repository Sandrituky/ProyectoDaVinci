<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 header("Content-Type: text/html;charset=UTF-8");
$conexion = new mysqli("localhost", "root", "root", "bd_DaVinci");

if (isset($_REQUEST['caracteristicas'])) { //muestra la historia



    $select = "SELECT * FROM caracteristicas;";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoHistoria = nl2br($fila['caractHistoria']);
        }

echo $textoHistoria;
}

if (isset($_REQUEST['numAlums'])) { //muestra el numero de alumnos



    $select = "SELECT * FROM caracteristicas;";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $numAlums = $fila['caractNumAlums'];
        }

echo $numAlums;
}

if (isset($_REQUEST['fotosHistoria'])) {



    $select = "SELECT * FROM fotos WHERE fotoID LIKE 'hist%';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'].'ç';
        }


}

if (isset($_REQUEST['slider'])) {



    $select = "SELECT * FROM noticias WHERE CURDATE()<newsFechaFin ORDER BY newsFechaFin ASC;";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['newsNombre'].'☺';
            echo $fila['newsDescr'].'☺';
            echo $fila['newsFoto'].'☺';
            echo $fila['newsFechaIni'].'☺'.'☻';
            
            
        }


}

if (isset($_REQUEST['plurilingue'])) { //muestra el proyecto de plurilinguismo



    $select = "SELECT * FROM proyectos WHERE ProyectID='ProyPlur';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoDescr = $fila['proyectDescr'];
        }

echo $textoDescr;
}

if (isset($_REQUEST['fotoPlurilingue'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='proyPlur';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

if (isset($_REQUEST['erasmusES'])) { 



    $select = "SELECT * FROM proyectos WHERE ProyectID='ProyErasmusES';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoDescr = nl2br($fila['proyectDescr']);
        }

echo $textoDescr;
}

if (isset($_REQUEST['fotoErasmusES'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='proyErasmusES';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

if (isset($_REQUEST['erasmusAE'])) { 



    $select = "SELECT * FROM proyectos WHERE ProyectID='ProyErasmusAE';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoDescr = nl2br($fila['proyectDescr']);
        }

 echo $textoDescr;
}

if (isset($_REQUEST['fotoErasmusAE'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='proyErasmusAE';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

if (isset($_REQUEST['erasmusAEan'])) { 



    $select = "SELECT * FROM proyectos WHERE ProyectID='ProyErasmusAEan';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoDescr = nl2br($fila['proyectDescr']);
        }

 echo $textoDescr;
}

if (isset($_REQUEST['fotoErasmusAEan'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='proyErasmusAEan';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

if (isset($_REQUEST['mochilaDig'])) { 



    $select = "SELECT * FROM proyectos WHERE ProyectID='ProyMochilaDig';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            $textoDescr = nl2br($fila['proyectDescr']);
        }

 echo $textoDescr;
}

if (isset($_REQUEST['fotoMochilaDig'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='ProyMochilaDig';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

if (isset($_REQUEST['fotoMochilaDig2'])) {



    $select = "SELECT * FROM fotos WHERE fotoID='ProyMochilaDigP';";
$conexion->query("set names 'utf8'");
    $resultado = $conexion->query($select);


        $totalfilas = $resultado->num_rows;


        for ($i = 0; $i < $totalfilas; $i++) {
            $fila = $resultado->fetch_array();
            echo $fila['fotoLink'];
        }


}

