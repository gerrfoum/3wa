var listecourses = new Array();
var nomprod=window.prompt('nomprod');
var i;
var j;
var c;





function AjoutProd(nomprod)
{  
	/*console.log(listecourses);
 i=listecourses.indexOf(nomprod);	
 tab.push(i);*/
 	listecourses.push(nomprod);
  
}

function SupProd(nomprod){
 /*console.log(listecourses)
 i=listecourses.indexOf(nomprod);
 tab.splice(i,1);*/
 	var index = listecourses.indexOf(nomprod);
 	if (index != -1) {
 		listecourses.splice(index, 1);
 	}
	 
}

function SuptoutProd(nomprod){
	listecourses=[];
}
	
AjoutProd(nomprod);

console.log(listecourses);

AjoutProd('bières');
console.log(listecourses);

AjoutProd('riz');
console.log(listecourses);

AjoutProd('fraises');
console.log(listecourses);

AjoutProd('vin');
console.log(listecourses);

SupProd(nomprod);
console.log(listecourses);

SuptoutProd(nomprod);
console.log(listecourses);



