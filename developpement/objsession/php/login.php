<?php
session_start();

include '../class/Database.class.php';
include '../class/User.class.php';


if(empty($_POST) == false) {

	var_dump($_POST);
    
    $user = new User();
    
    $user->conectUser($_POST);


}



$template = 'login';
include 'layout.phtml';

?>

