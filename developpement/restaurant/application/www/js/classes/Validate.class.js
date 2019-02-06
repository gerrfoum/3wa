var RecapValidate = function()
{
	this.basket = new BasketSession();
	this.shawOrder();

	$('#order-summary').on('click',this.shawOrder.bind(this));
}



RecapValidate.prototype.shawOrder= function(event){
	$('.meal-list tbody').empty();

    for (var i =0; i < this.basket.items.length; i++) {
        var tr = $('<tr>');
        tr.append('<td>'+this.basket.items[i].name +'</td><td class="number">'+this.basket.items[i].quantity+'</td><td >'+this.basket.items[i].+'</strong></td><td class="number">'+this.basket.items[i].salePrice+'</td><td class="number">'+parseFloat(this.basket.items[i].quantity)*parseFloat(this.basket.items[i].salePrice*1.2)+'</td>');

        $('.meal-list tbody').append(tr);
    }

    



   

    }








