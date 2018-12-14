var i;
var j;
var number=parseInt(window.prompt('saisir un chiffre oiur la table d multiplication'));


document.write('<table>');

for(i = 1; i <= number; i++){
	document.write('<tr>');
	for(j=1;j <=number;j++){
		if(i==j){
			document.write('<td> class="carre"</td>');

		}

	  document.write('<td>'+i*j+'</td>');
	  
	}


	document.write('</tr>');

}

document.write('</table>');


