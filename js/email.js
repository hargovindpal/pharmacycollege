function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('contact').value;
    var whatsapp = document.getElementById('whatsapp').value;
	var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
    var message = document.getElementById('message').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + whatsapp;
    "<br/> Email " + email;
    "<br/> Email " + course;
    "<br/> Email " + message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hargovindpal4@gmail.com",
    Password : "CBFEA3312591F0FBBD5DD14F33E1B6E2940D",
    To : 'ecare@mpsjhansi.org',
    From : "hargovindpal4@gmail.com",
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