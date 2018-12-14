'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */


/**************************************************************************************************/


var game= new Object();

 var niv=requestInteger("choisir niveau de difficulté : 1-facile / 2-moyen / 3-difficile", 1, 3);
 document.write('votre niveau de difficulté est de '+niv);

var armure=requestInteger("choisir une armure : 1-cuivre / 2-fer / 3-magique", 1, 3);

var arme=requestInteger("choisir une arme: 1-bois / 2-fer / 3-magique", 1, 3);


 function initializeGame(){

 	var play;
 	var drag;

 	switch (niv) {
	
		case 1:
			play=getRandomInteger(200,250);
			drag=getRandomInteger(150,200);
			game.player=play;
			game.dragon=drag;
		break;
		case 2:
			play=getRandomInteger(200,250);
			drag=getRandomInteger(200,250);
			game.player=play;
			game.dragon=drag;
		break;
		case 3:
			play=getRandomInteger(150,200);
			drag=getRandomInteger(200,250);
			game.player=play;
			game.dragon=drag;
		break;
	}



 	switch (armure) {
	
		case 1:
			game.armorRatio=1;

		break;
		case 2:
			game.armorRatio=1.25;
		break;
		case 3:
			game.armorRatio=2;
		break;
	}

 	switch (armure) {
	
		case 1:
			game.weaponRatio=0.5;

		break;
		case 2:
			game.weaponRatio=1;
		break;
		case 3:
			game.weaponRatio=2;
		break;
	}

}



initializeGame();

console.log(game);



function damagePlayer(){
		var points;
			
		document.write('chevalier attaque,le dragon defend');

		switch(niv){
			case 1:
				points=getRandomInteger(25,30)*game.weaponRatio;
			break;

			case 2:
				points=getRandomInteger(15,20)*game.weaponRatio;
			break;

			case 3:
				points=getRandomInteger(5,10)*game.weaponRatio;
			break;
		} 

		return points;
}

 

   	   

function damageDragon(){
		var points
		document.write('le dragon attaque,le chevalier defend');

		switch(niv){
			case 1:
			points=getRandomInteger(25,30)/game.armorRatio;
			break;

		
			case 2:
			points=getRandomInteger(15,20)/game.armorRatio;
			break;

			case 3:
			var points=getRandomInteger(5,10)/game.armorRatio;
			break;
		}

		return points;

} 

function gameLoop(){
	var modjeu=requestInteger(1,2)
	


}



			

				

		

	









	




	



