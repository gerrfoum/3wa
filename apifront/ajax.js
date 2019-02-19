


    
    $.getJSON('http://10.10.109.33/apiback/employees.php',myFunction);
    

        	
    function myFunction (response){
    	console.log(response);
    }



    


$(document).on('click', 'li', myNewfunction);

function myNewFunction (response){

	 $.getJSON('http://10.10.109.33/apiback/employees.php');
	 
    
    
    
    

}

