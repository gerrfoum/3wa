'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickExecute(){
	console.log($('input[name=what]:checked').val());


	switch($('input[name=what]:checked').val()){

		case '1':
		$.get('php/1-get-html-article.php', ajaxGetHtmlArticle);
		break;

		case '2':
		$.getJSON('php/2-get-json-data.php', ajaxGetJson);
		break;

		case '3':
		$.get('php/3-get-html-movies.php', ajaxGetHtmlArticle);
		break;

	}


}

