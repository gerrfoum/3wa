var RecapValidate = function()
{
	this.basket = new BasketSession();

	this.sendToPhp();
}

RecapValidate.prototype.sendToPhp = function() {
	var order = JSON.stringify(this.basket.items);
    
    $('#orderValidation').val(order);


}
