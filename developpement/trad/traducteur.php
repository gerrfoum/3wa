<?php

$dico = [
	'chien' => 'dog',
	'chat' => 'cat'
	'canard'=>'duck'
	'ours'=>'bear'
	'boeuf'=>'ox'
	'singe'=>'monkey'
	'aigle'=>'eagle'






];
translate(){



if(array_key_exists($mot, $_POST) == true)
{



	$tableau=$_POST['mot'];

	var_dump($tableau);

	$lang = $_POST['traduction'];

	var_dump($lang);

	if($lang=='FA'){

		$condition=array_key_exists('mot',$dico);
		switch ($condition) 
		 	case 'true':
		 	 $mottrad=$dico['mot'];
		 	 echo $mottrad;
		 	break;
		 	case 'false':
		 	 echo'votre mot ne peut etre traduit en anglais';
		 	break;
		 } else
		 $condition=array_search('mot', $dico);
		 echo $condition;




	}

	}




}



	





    









include 'traducteur.phtml';


?>