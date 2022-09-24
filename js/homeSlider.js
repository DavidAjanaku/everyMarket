let slideindex = 1;
showSlides(slideindex);

function plusSlides(n){
    showSlides(slideindex += n);
}

function currentSlide(n){
    showSlides(slideindex = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    if(n > slides.length){
        slideindex = 1
    }

    if( n < 1){
        slideindex = slides.length
    }

    for(i =0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }

    slides[slideindex - 1].style.display = "block";
    dots[slideindex - 1].className += "active";
}

//AutoSlide

let slideindexs = 0;

showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i=0;i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slideindex++;
    if(slideindex > slides.length){
        slideindex = 1;
    }

    slides[slideindex - 1].style.display = "block"

    setTimeout(showSlides, 2000)
}
