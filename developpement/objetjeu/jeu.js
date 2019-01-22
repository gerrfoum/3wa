
var Perso = function(name, hp, attack, defense, magie) {
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.magie = magie;

}


Perso.prototype.attaquer = function(perso) {

	var degats = this.attack - perso.defense;

	if (degats < 10) {
		
		console.log(perso.name +'ne sent plus rien....' );
		degats = 10
	}
	perso.hp -= degats
    
	console.log(this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name )

	console.log(perso.name +' a  '+ perso.hp+ ' hp' );
}


Perso.prototype.defendre = function() {
		var ratio =  Math.round(this.defense * Math.random());

		console.log(this.name+' augmente sa defense de '+ ratio/2 + ' point ');
		this.defense += ratio/2;

		console.log(this.name +'a une defense à :'+ this.defense);
}


Perso.prototype.sort = function(perso) {

	if (this.magie > 0) {
		var degats = getRandomInteger(1, this.magie);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.hp -= degats;
		this.magie -=  degats;
		console.log(perso.name +' a  '+ perso.hp+ ' hp' );
	} else {
		console.log('Vous n avez plus de point de magie....')
	}

}
var prog = new Program();


console.log(prog);


var Program = function(){

	this.gege = new Perso('Gégé', 300, 50, 7, 120);
	this.nanard = new Perso('Nanard', 280, 45, 18, 160);
	
    this.affichage();
    
	$('#attaquer').on('click', this.onClickAttaque.bind('coucou'));
	$('#defendre').on('click', this.onClickDefense.bind(this));
    $('#sort').on('click', this.onClickSort.bind(this));
}

Program.prototype.affichage = function() {

	if(this.gege.hp > 0 && this.nanard.hp > 0) {
    
    	$('#perso1').text(this.gege.name+ ' : '+this.gege.hp+' HP, attaque : ' + this.gege.attack + ', defense : '+ this.gege.defense +', magie : '+ this.gege.magie);
        
		$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP, attaque : ' + this.nanard.attack + ', defense : '+ this.nanard.defense +', magie : '+ this.nanard.magie);
    
    
    } else {
    	$('#commande').css('display', 'none');
    
    	if(this.gege.hp > 0) {
        	$('#affichage').html('<p>Victoire de : '+this.gege.name+'</p>');

        } else {
        	$('#affichage').html('<p>Victoire de : '+this.nanard.name+'</p>');
        }
    
    }


}

Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	this.gege.attaquer(this.nanard);
    this.contre();
    this.affichage();
    
}

Program.prototype.onClickDefense = function(event) {
	event.preventDefault();
	this.gege.defendre();
	this.contre();
	this.affichage();
}

Program.prototype.onClickSort = function(event) {
	event.preventDefault();
	if (this.gege.magie >= 0) {
		this.gege.sort(this.nanard);
        this.contre();
        this.affichage();
    
    } else {
    	console.log('plus de points de magie, veuillez jouer autre chose');

    }


}

Program.prototype.contre = function() {
	var random = getRandomInteger(1, 3);

	if (random == 1) {
		this.nanard.attaquer(this.gege);
	} else if (random == 2) {
    
    	this.nanard.defendre();
    
    } else {
    	if(this.nanard.magie > 0) {
			this.nanard.sort(this.gege);
		} else {
        	console.log('Plus de points de magie, on change de technique');

        	this.contre();
        }
    
    }

}
