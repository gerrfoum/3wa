'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/



/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/


var button = document.getElementById('firingButton');
var firingButton=document.querySelector('#billboard span');
var rocket = document.getElementById('rocket');
var timer;
var count = 10;

function pushFireButton() {
	console.log('coucou');
	timer = window.setInterval(chronoCounter, 1000);
	rocket.src = "images/rocket2.gif";

}

function chronoCounter() {
	firingButton.textContent = count;
	count --;
	if (count < 0) {
		window.clearInterval(timer);
		rocket.src = "images/rocket3.gif";
		rocket.classList.toggle('tookOff');
	}

}

button.addEventListener('click',pushFireButton);











