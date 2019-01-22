var allContacts = load();
refreshAddressBook(allContacts);

function onClickAddContact()
{
	$('#forms').removeClass('hide');
    
   // $('#contact-form').fadeIn('fast');  retire un display none avec un transition fondu au noir
}


function onCickEnregistrer()
{
	var title = $('#title').val();
	var lastName = $('#nom').val();
	var firstName = $('#prenom').val();
	var phone = $('#phone').val();

	var contact = { civility: title, firstName: firstName, lastName: lastName, phone: phone }
	console.log(contact);
	allContacts.push(contact);
	saveDataToDomStorage('carnet-adresse', allContacts);
	refreshAddressBook(allContacts);

}

$('#ajout').on('click', onClickAddContact);
$('#save-contact').on('click', onCickEnregistrer);
$(document).on('click',  '#address-book li', onClickShowContactDetails);
$(document).on('click',  '#address-book li', onClickShowContactDetails);
('#contact-details a').on('click', onClickEditContact);
 $('#clear-address-book').on('click', onClickClearAddressBook);






function load() {

	var addressBook = loadDataFromDomStorage('carnet-adresse');
    
    if(addressBook == null)
    {
    	addressBook = []
    }
    
    return addressBook;

}


function refreshAddressBook(addressBook)
{
	 $('#carnet-adresse').empty();
     
     var addressBookList = $('<ul>');
     
    for(var index = 0; index < addressBook.length; index++)
    {
    	var li = $('<li data-id="'+index+'">');
        li.append(addressBook[index].firstName+' '+addressBook[index].lastName);
        
        addressBookList.append(li);
    
    }
    
    $('#carnet-adresse').html(addressBookList);
    


}
function onClickShowContactDetails() {

	var id = $(this).data('id');
    
	$('#contact-details h3').text(addressBook[id].title+' '+addressBook[id].firstName+' '+addressBook[id].lastName);
    $('#contact-details p').text(addressBook[id].phone);
    
    $('#contact-details').removeClass('hide');
    $('#contact-details').data('id', id);
    
}
function onClickEditContact() {

	var id =  $('#contact-details').data('id');
     $('#title').val(addressBook[id].title);
    $('#firstName').val(addressBook[id].firstName);
    $('#lastName').val(addressBook[id].lastName);
    $('#phone').val(addressBook[id].phone);
    
	$('#contact-form').data('mode', 'edit');
    $('#contact-form').removeClass('hide');
}

function onClickClearAddressBook(event) {
	event.preventDefault();
    
    addressBook = [];
    saveDataToDomStorage('carnet-adresse', []);
    refreshAddressBook(addressBook);

}






/*	var tab=[];
loadDataFromDomStorage(allContacts);

	function Afficher(){

		tab=JSON.parse(jsonData);
		console.log('carnet-adresse',tab);
		for(var i=0;i<tab.length;i++)
		{
			var titre=tab[i].title;
			var  nom=tab[i].lastName;
			var prenom=tab[i].firstName;
			var telephone=tab[i].phone;


		}$('#contact-details').append(titre).append(nom).append(prenom).append(telephone);


	}*/
	



