var Pen=function(){
	this.couleur='red';
	this.taille=1;

}
Pen.prototype.init=function(context){
	context.strokeStyle='red';
	context.lineWidth=1;

	

}
