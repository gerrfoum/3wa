
'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


function ajaxGetHtmlArticle(response)
{

	$('#target').html(response);
    
}

function ajaxGetJson(response)

{
	console.log(response);
	//$('#target').html('');
	$('#target').empty();

	$('#target').append('<ul>');

	for(var i = 0; i < response.length; i++) {
		$('#target ul').append('<li> Nom : '+response[i].firstName+', Tel : '+response[i].phone+'</li>')
	}

}





