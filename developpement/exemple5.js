var nanard = {}; // new Object()


nanard.name = 'Bernard';
nanard['age'] = 68;
nanard.animal = 'chien';
nanard.voiture = 'Renault 21';
nanard.alcool = 'ricard';


console.log(nanard);
var myCar = new Object();

myCar.brand         = 'Alfa Roméo';
myCar.buyDate       = new Date('2013-06-20');
myCar.passengers    = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year          = 2012;



document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write('<li>Date de' 'l'achat : ' + myCar.buyDate.toDateString() + '</li>');




