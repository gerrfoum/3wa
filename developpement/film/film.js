 const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';


 function onClickrecherche(event){
	event.preventDefault();
	var recherche=$('#wher').val();
	console.log(recherche);
	$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+recherche, myFunc);
}


function myFunc(response) {
    console.log(response);

    $('#listSearched').empty();
    $('#listSearched').append('<ul>');

    for(var i = 0; i < response.results.length; i++) {
    	$('#listSearched ul').append('<li data-id="'+response.results[i].id+'">'+response.results[i].title+'</li>');
    }
}

$('#search').on('click', onClickrecherche);



///////////////////////////////////////////////////////////////////////////

$(document).on('click', 'li', myFunction);

function myFunction (response){
    var id = $(this).data('id');
    $.getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', afficheFilm);
    

}


function afficheFilm(response) {

    console.log(response);

    var result = $('<div>');

    var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
    var title = $('<h1>').append(response.title);
    var year = $('<h2>').append(response.release_date);
    var desc = $('<p>').append( response.overview );
    var note = $('<p>').append( response.vote_average );
    var companies = $('<div>').append('<h2>Companies</h2>')
    companies.append('<ul>');
    
    result.append(img).append(title).append(year).append(desc).append(note).append(companies);
    
    $('#listSearched').html(result);
    
}



   


    /*response.results[i].id;
    response.results[i].name[id];*/



    










