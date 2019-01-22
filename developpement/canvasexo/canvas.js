var Disk = function()
{
    this.color = 'black';
    this.radius = 10;
    this.position = {x:0, y:0};
}


Disk.prototype.setRadius = function(radius)
{
    this.radius = radius;
}

Disk.prototype.setColor = function(color)
{
    this.color = color;
}

Disk.prototype.setPosition = function(position){
    
    this.position = position;
}


Disk.prototype.draw = function(context)
{
	context.fillStyle = this.color; 
    context.beginPath(); 
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    
}
var canvas = document.querySelector('#masterpiece');
   
var context = canvas.getContext('2d');

function onClickCanvas(event)
{

    var disk = new Disk();
    this. position=function Positionner(){

    }


}


canvas.addEventListener('click', onClickCanvas);
var canvas = document.querySelector('#masterpiece');
   
var context = canvas.getContext('2d');




function onClickCanvas(event)
{
    var offset = canvas.getBoundingClientRect();
    var style = window.getComputedStyle(canvas);
    var border = parseInt(style.borderWidth);
    
    var location = {  x: event.clientX - offset.left - border , y: event.clientY - offset.top - border }

    var disk = new Disk();
    
    disk.setRadius(getRandomInteger(10,100));
    disk.setPosition(location);
    disk.setColor(getRandomColor());
    
    disk.draw(context);
}


canvas.addEventListener('click', onClickCanvas);
