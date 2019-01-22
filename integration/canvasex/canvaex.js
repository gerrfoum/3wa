
var canvas=document.getElementById("my-canvas");
var context=canvas.getContext('2d');
context.fillStyle="#333";
context.fillRect(20,20,600,600);
context.strokeStyle="#fff";
context.lineWidth=10;
context.lineJoin='round';
context.lineCap='round';



function cross(x,y){
context.beginPath();
context.moveTo(x-50,y-50);
context.lineTo(x+50,y+50);
context.moveTo(x+50,y-50);
context.lineTo(x-50,y+50);
context.stroke();
context.closePath();


}

function circle(x,y){
context.beginPath();
context.arc(x,y,50,100,0,Math.PI*2,true);
context.stroke();
context.closePath();

}
canvas.addEventListener('click',onClickaffichage);


function onClickaffichage(event){
	var joueur1=0;
	var joueur2=0;
	
	if(joueur1<joueur2){

	circle(event.offsetX,event.offsetY);
	joeur1++;

}else cross(event.offsetX,event.offsetY);
joueur2++;
}




	