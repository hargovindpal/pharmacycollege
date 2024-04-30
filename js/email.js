function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('contact').value;
    var whatsapp = document.getElementById('whatsapp').value;
	var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
    var message = document.getElementById('message').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Whatsapp " + whatsapp +
    "<br/> Email " + email +
    "<br/> Course " + course +
    "<br/> Message " + message;
    
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "example@gmail.com",
    Password : "password",
    To : 'moderncollegeofpharmacyjhansi@gmail.com',
    From : "example@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "Data Successfully Sent!", "success");
  	}
  	else{
  		swal("Error", "Something Went Wrong!", "Try Again");
  	}
  }
);
}