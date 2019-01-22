var Canvas =function(){
	this.canvas=canvas;
	this.pen=pen;
	this.location=null;
	this.context=this.canvasGetcontext('2d');
	this.move=false;
}

Canvas.prototype.CurrentLocation=function(){
	var offset = Canvas.getBoundingClientRect();
	var location = { x: event.clientX - offset.left, y: event.clientY - offset.top };
    
    console.log(location);
    
    return location;


}

   

