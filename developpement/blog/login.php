<?php
session_start();
include 'hashpsw.php';
var_dump($_POST);


$error = false;
$message = '';

if(empty($_POST) === false) {

	include 'applibdconexion.php';
	$query = $pdo->prepare
	(
	    'SELECT
	        *
	     FROM utilisateurs Where mail = ?'
	);

	$query->execute( [ $_POST['email'] ]);
	$utilisateur = $query->fetch(PDO::FETCH_ASSOC);
    
    
	if ($utilisateur == false) {
    	
        $error = true;
		$message = "Votre adresse mail n'existe pas...";
    
    } else if ( verifyPassword($_POST['password'], $utilisateur['password'])==true ) {
    
    	$_SESSION['email'] = $utilisateur['email'];
		$_SESSION['firstName'] = $utilisateur['prenom'];
		$_SESSION['lastName'] = $utilisateur['nom'];
		$_SESSION['pseudo'] = $utilisateur['pseudo'];
		$_SESSION['role'] = $utilisateur['role'];

		header('Location: index.php');
		exit();
    
    
    } else {
    
    	$error = true;
		$message = "Votre mot de passe est incorrect...";
    
    }



}






$template = 'login';
include 'layout.phtml';

?>
        