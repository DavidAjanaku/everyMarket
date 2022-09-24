'use strict'

const accordionBtn = document.querySelectorAll('.data-accordion-btn');
const accordion = document.querySelectorAll('.data-accordion');

console.log(accordionBtn)
console.log(accordion)



for(let i =0; i<accordionBtn.length; i++){
    accordionBtn[i].addEventListener('click', function(){
        console.log(i)
        const clickedBtn = this.nextElementSibling.classList.contains('active');
        for (let i = 0; i < accordion.length; i++) {

            if (clickedBtn) break;
      
            if (accordion[i].classList.contains('active')) {
      
              accordion[i].classList.remove('active');
              accordionBtn[i].classList.remove('active');
      
            }
      
          }
      
          this.nextElementSibling.classList.toggle('active');
          this.classList.toggle('active');
    });
}

