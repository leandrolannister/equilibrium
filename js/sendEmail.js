$('#btnSendEmail').click(function(){
	
	event.preventDefault();	

	var formData = takeField( form() );	
	
	var errors = [];

	errors = checkFields(formData);

	if( errors.length > 0 ) {

		var ul = document.querySelector("#msgError");
		ul.innerHTML = "";

		errors.forEach( function(error){

			var li = document.createElement("li");
			li.textContent = error;
			ul.appendChild(li);
		});
	
	}else{
		
		var ul = document.querySelector("#msgError");
		ul.innerHTML = "";

		/*Configurar envio de e-mail*/	

	}		
		
	
});


function checkFields(formData){

	var arrayErrors = [];

	if( formData.name == "" ){
		arrayErrors.push("Favor informe o seu nome no campo nome");
	}

	if( formData.email == "" ){
		arrayErrors.push("Favor informe o seu email no campo email");
	}

	if( formData.msgContato == ""){
		arrayErrors.push("Favor deixe uma mensagem que retornaremos em breve");	
	}

	return arrayErrors;

}

function takeField( form ){

	var fields = {
		name:  form.name.value,
		email: form.email.value,
		msgContato: form.msgContato.value
	};

	return fields;
}

function form(){
	var form = document.querySelector('#contact-form');
	return form;
	
}

