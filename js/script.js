    
    // Enquiry Form Control

    var enqry = document.querySelector('.enquiry-btn')
    var cancel = document.querySelector('.fa-xmark')
    var showform = document.querySelector('.form-container')

    enqry.addEventListener('click', function(e){
      e.stopPropagation();
      showform.style.display = 'inline';
  })
  cancel.addEventListener('click', function(e){
      e.stopPropagation();
      showform.style.display = 'none';
  })

  window.addEventListener('click', ()=>{

      showform.style.display = 'none';
  })
   showform.addEventListener('click', function(e) {
      e.stopPropagation();
  });

  document.addEventListener('keydown', (e)=>{
      if(e.key === "Escape"){
          showform.style.display = 'none';
      }
  } ) 

    
    
    
    
    
    var nav_item = document.querySelector('.nav-bar')
    var slickContainer = document.querySelector('.slick-container')


    //toggle button control script
    var toggle = document.querySelector('.toggle-section');
    let i=1;
    toggle.addEventListener('click',()=>{
    if(i <= 1){
        document.querySelector('.nav-bar').style.visibility = 'visible';
        document.querySelector('.nav-bar').style.position = 'relative';
        /*slickContainer.style.marginTop = '0px';*/
        i++;
    }else{
        document.querySelector('.nav-bar').style.visibility = 'visible';
        document.querySelector('.nav-bar').style.position = 'absolute';
        i--;
    }
   })


//    script to show big image after click on

 var imageContainer = document.querySelector('.show-big-container');
 var bigImage = document.querySelector('.big-image');
 var smallImages = document.querySelectorAll('.image');

 smallImages.forEach(function(smallImage) 
 {
 smallImage.addEventListener('click',()=>{
 bigImage.src = smallImage.src;
 imageContainer.style.display = 'flex';
 document.body.style.overflow = 'hidden';
 });
 });

bigImage.addEventListener('click',()=>{
    imageContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
 });
    



// Scroll to Top Arrow Function 

let scrollbutton = document.getElementById("scrollbtn");

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//sending email section
function emailsend(){
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "hargovindpal4@gmail.com",
  Password : "CBFEA3312591F0FBBD5DD14F33E1B6E2940D",
  To : 'ecare@mpsjhansi.org',
  From : "hargovindpal4@gmail.com",
  Subject : "This is the subject",
  Body : "And this is the body"
}).then(
message => alert(message)
);
}