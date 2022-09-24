'use strict'

const mobileNavIcon = document.querySelector('.mobile-click');

const mobileMenu = document.querySelector('.mobile-bottom-navigations');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.menu-close-button');

mobileNavIcon.addEventListener('click', function(){
    console.log(mobileMenu);
    mobileMenu.classList.add('active')
    overlay.classList.add('active')



   
})



closeBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    overlay.classList.remove('active')
    console.log(closeBtn);
})

overlay.addEventListener('click', function(){
    overlay.classList.remove('active');
    mobileMenu.classList.remove('active')

})