<?php

$nombre;
$tab = [];

do{
	
	do {
		$nombre = rand(1, 49);
	} while(in_array($nombre, $tab) == true);
	


	array_push($tab, $nombre);

}while(count($tab)<6);




	



 










include 'loterie.phtml';
	
?>

	

