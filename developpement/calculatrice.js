var montantht=parseFloat(window.prompt('Bonjour,saisisez un montant ht'));
var reponse=window.prompt('tapez oui si vous voulez une remise ou non si vous ne voulez pas');
 var montanttc;


if (reponse == 'oui') {

	var remise=parseFloat(window.prompt('tapez le pourcentage de votre remise'));
	document.write('vous avez demandé une remise de '+remise+'%');
	var calcul=montantht-(montantht*remise/100);
	montanttc=calcul*1.20;
	document.write('le montant ttc est de '+montanttc);
} else{
document.write('vous navez pas demandé de remise');
montanttc=montantht*1.20
document.write('le montant ttc est de '+montanttc);


}	
    
	


	
        


