
var button = document.getElementById('ToggleRectangle');
var ToggleRectangle=document.querySelector('.rectangle');

button.addEventListener('click', myClique);


function myClique() {
ToggleRectangle.classList.toggle('hidden');
}

ToggleRectangle.addEventListener('dblclick', coulVert);

function coulVert(){
	ToggleRectangle.classList.toggle('good');

}


ToggleRectangle.addEventListener('mouseover', coulRouge);

function coulRouge(){
	ToggleRectangle.classList.toggle('important');

}


ToggleRectangle.addEventListener('mouseout', coulOrigine);

function coulOrigine(){
	ToggleRectangle.classList.remove('important');
	ToggleRectangle.classList.remove('good');
}









