var para1 = document.getElementById('para1');
console.log(para1);

para1.style.color = "red";
para1.style.backgroundColor = "yellow";

var para2=document.getElementById('para2');
para2.style.backgroundColor="purple";
var para = document.querySelectorAll('.para');
var clickMe = document.getElementById('clickMe');


console.log(para);
para[2].style.fontSize="50px";

for (var i = 0; i < para.length; i++) {

	para[i].style.fontSize = "32px";

}

para2.classList.add('hidden');


clickMe.addEventListener('click' , myFunction);

function myFunction() {
	console.log('coucou');
    para2.classList.toggle('hidden');

}