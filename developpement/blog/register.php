<?php
session_start();
include 'hashpsw.php';
if(empty($_POST)==false) {
	
    var_dump($_POST);
    $hashPassword = hashPassword($_POST['password']);
     $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

	$pdo->exec('SET NAMES UTF8');
	 	$query = $pdo->prepare
	(
	    'INSERT INTO utilisateurs (mail, password, nom, prenom, pseudo, role) VALUES (?, ?, ?, ?, ?, "user")'
	);

	$query->execute( [ $_POST['email'],$hashPassword , $_POST['lastName'], $_POST['firstName'], $_POST['pseudo'] ] );

	
 	header('Location: index.php');
 	exit();

}

$template = 'register';
include 'layout.phtml';

?>