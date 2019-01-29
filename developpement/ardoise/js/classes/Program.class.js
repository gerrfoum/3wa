var Program = function(canvas)
{
    this.pen          = new Pen();
    this.canvas       = new Slate(this.pen, canvas);

    this.start();
    
    
}


Program.prototype.start = function() {

    var penColor = document.querySelectorAll('.pen-color');
    
    for (var i = 0; i < penColor.length; i++) {
    
        penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
    
    }
    

}

Program.prototype.onClickPenColor = function(event)
{

    var penColor = event.currentTarget.dataset.color;   // Avec jQuery cela donnerait $(div).data('color')

    this.pen.color = penColor;
};
var penSize = document.querySelectorAll('.pen-size');

	for (var j = 0; j < penSize.length; j++) {
    
        penSize[j].addEventListener('click', this.onClickPenSize.bind(this));
    
    }


    Program.prototype.onClickPenSize = function(event)
{
	var penSize = event.currentTarget.dataset.size;
    
    this.pen.size = penSize;
}
var paletteButton = document.getElementById('tool-clear-picker');
    palette.addEventListener('click', onClickColorPicker);
   

}

