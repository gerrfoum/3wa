'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
var toolbar = document.getElementById('toolbar-toggle');
var nav = document.querySelector('.toolbar ul');
var icon = document.querySelector('#toolbar-toggle i');
var i = 0;
var images=
[   {image: '1.jpg', legend: 'Street Art'         },
    {image: '2.jpg', legend: 'Fast Lane'          },
    {image: '3.jpg', legend: 'Colorful Building'  }, 
    {image: '4.jpg', legend: 'Skyscrapers'        },
    {image: '5.jpg', legend: 'City by night'      },
    {image: '6.jpg', legend: 'Tour Eiffel la nuit'}

];

console.log(images[1]);

var previous =document.getElementById('slider-previous');
var next = document.getElementById('slider-next');

var slider = document.querySelector('#slider img');
var random = document.getElementById('slider-random');
var play = document.getElementById('slider-toggle');
var index = 0;
var isPlaying = false;
var timer;

var fig = document.querySelector('#slider figcaption');

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}






function onToolbarToggle(){

	nav.classList.toggle('hide');
    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
}



function Mnext(){
	if(i >= 5) {
		i = 0
	} else {
		i++;
	}
	
	slider.src = images[i];
}




function MPrevious(){
	if( i <= 0 ){
		i = 5
	} else {
		
		i--;
	}
	slider.src=images[i];

}

slider.src=images[i];


function goToRandom() {

	index = getRandomInteger(0, images.length -1 );
    
    pict.src = images[index].image;
	fig.textContent = images[index].legend;   

}


function goToPlay() {
	if (isPlaying == false) {
    
    	timer = window.setInterval(Mnext, 2000);
        isPlaying = true;
        
    } else {
    	window.clearInterval(timer);
        isPlaying = false;

    }
    
    var faPlay = document.querySelector('#slider-toggle i');
    faPlay.classList.toggle('fa-play');
    faPlay.classList.toggle('fa-pause');

}

function onPushButtons(event) {
	
    console.log(event);
    
    if (isPlaying == true) {
        goToPlay();	
    }
    
    switch(event.keyCode) {
    	
        case 39:
        goToNext();
        break;
        
        case 37:
        goToPrev();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }


}





toolbar.addEventListener('click', onToolbarToggle);

previous.addEventListener('click', MPrevious);

next.addEventListener('click', Mnext);
random.addEventListener('click', goToRandom);

play.addEventListener('click', goToPlay);







