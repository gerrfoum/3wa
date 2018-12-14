<?php
$nombre = rand(1, 49);
$tab = [];

do{
	
	$nombre = rand(1, 49);
	array_push($tab, $nombre);

}while(count($tab)<6);
echo $tab;


/*for($j=1;$j<6;$j++){

	$s==$tab[$j];

	if($s=$tab[$j-1]){
		$tab[$j]=rand(1,49);
		$j=1;
	}else{
		$j++;
	
	}

} echo $tab;
*/

	



 










include 'loterie.phtml';
?>
