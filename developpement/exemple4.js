var animals = ['canard', 'poule', 'vache', 'cochon', 'chèvre'];

animals[1] // poule
animals[0] // canard
animals[4] // chèvre
var kerl = new Array(); 

kerl[0] = "Dimanche";
kerl[1] = "Lundi";
kerl[2] = 'Mardi';
kerl[3] = 'Mercredi';
kerl[4] = 'jeudi';
kerl[5] = 'vendredi';
kerl[6]='samedi'


console.log(kerl[2]);

var sunday = 6;


console.log(kerl[sunday]);
var date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());



moisactue=['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decemnbre'];



var datedujour=new Date();
var dat=datedujour.getDate();
var numjour=datedujour.getDay();
var nummois=datedujour.getMonth();
var annee=datedujour.getFullYear();

var jour=kerl[numjour];
var mois=moisactue[nummois]

document.write('nous sommes le'+jour+dat+mois+annee);


