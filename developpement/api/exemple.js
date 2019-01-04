const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
const url_img='https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    
   // 'https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c'

	$.getJSON('https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBack);
    
    function callBack(response) {
    	
        console.log(response);
  
    }

 function callBack(response) {
    	
        console.log(response);
        console.log(response.id);
        document.write('<img src="'+url_img+response.backdrop_path+'" />')
  
    }

    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query=avengers', myFunc);
    
    function myFunc(response) {
    
    	console.log(response);
    
    }

