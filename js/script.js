    //Enquiry form control script
    
    var enqry = document.querySelector('.enquiry-btn')
    var cancel = document.querySelector('.fa-xmark')
    
    var showform = document.querySelector('.form-container')
    var nav_item = document.querySelector('.nav-bar')
    var slickContainer = document.querySelector('.slick-container')
    


    window.onload = function() {
        // Get the current page path
        var currentPage = window.location.pathname;
    
        // Specifying the target page where you want to show the form
        var targetPage = '';
    
        if (currentPage === targetPage) {
            if (showform) {

               setTimeout(() => {
               showform.style.display = 'inline';
             }, 2000);
             clearTimeout();
        }
            }
        };



    // window.onload =function(){


    //     if (showform) {
    //         setTimeout(() => {
    //             showform.style.display = 'inline';
    //         }, 2000);
    //         clearTimeout();
    //     }

    // };




   
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

var imageContainer = document.querySelector('.container-2');
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
    