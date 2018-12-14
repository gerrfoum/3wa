var num1 =parseFloat(window.prompt('Bonjour,saisisez un chiffre '));
var num2=parseFloat(window.prompt('saisisez un autre chiffre'));
var operation=window.prompt('quelle operation voulez vous faire');
var resultat;


switch (operation) {

	case '+':
	case 'addition':
	resultat=num1+num2;
	document.write('le resultat de votre operation est '+resultat);
   	break;
    
    case '-':
    case 'soustraction':
    resultat=num1-num2;
    document.write('le resultat de votre operation est '+resultat);
    break;

	case '*':
	case 'multiplication':
	resultat=num1*num2;
	document.write('le resultat de votre operation est '+resultat);
    break;
    
    case '/':
    case 'division':
    if(num2 == 0){
    document.write('division impossible,votre deuxieme chiffre est 0');
    } else
    resultat=num1/num2;
       
    break;

    case '^':
    case 'puissance':
    resultat=num1**num2;
    document.write('le resultat de votre operation est'+resultat);
    break;
        
    default:
    document.write("operation arithmetique inconnue")
    break;


}


 


