var choixordi=Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
var nbparties=1;
var i;
var c;

do{
	
	c=parseInt(window .prompt('choississez un autre chiffre'));


	if(choixordi>c){
		alert('votre chiffre est plus petit');

	}else if (choixordi<c) {
		alert('votre chiffre est plus grand');
	} else if (choixordi == c) {
		alert('trouvé');
	}


	nbparties ++;

} while( c != choixordi );

document.write('vous avez le meme chiffre que lordi;');
document.write('nombre de parties jouées'+nbparties);

	







