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



