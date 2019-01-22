var canvas=document.getElementById("my-canvas");
var context=canvas.getContext('2d');

context.fillStyle="#333";
//carre//
context.fillRect(10,10,620,620);
context.strokeStyle="#fff";
context.lineWidth=10;
context.lineJoin='round';
context.lineCap='round';
context.strokeRect(70,70,200,200);
//rond//
context.beginPath();
context.arc(470,170,100,0,Math.PI*2,true);
context.stroke();
context.closePath();
//croix//
context.beginPath();
context.moveTo(370,370);
context.lineTo(570,570);
context.moveTo(570,370);
context.lineTo(370,570);
context.stroke();
context.closePath();

context.save();
context.strokeStyle="#999";
context.lineWidth=5;
context.setLineDash([20,20]);
context.lineDashOffset=10;
context.strokeRect(70,370,200,200);
context.restore();

context.beginPath();
context.moveTo(70,370);
context.bezierCurveTo(70,570,70,570,270,570);
context.stroke();
context.closePath();


