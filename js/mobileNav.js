'use strict'

const mobileNavIcon = document.querySelector('.mobile-click');

const mobileMenu = document.querySelector('.mobile-bottom-navigations');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.menu-close-button');

const mobileSidebar = document.querySelector('.mobile-sidebar')

const sidebarCategory = document.querySelector('.sidebar-category');


sidebarCategory.addEventListener('click', function(){
    mobileSidebar.classList.add('active')
    overlay.classList.add('active')


})

mobileNavIcon.addEventListener('click', function(){
    console.log(mobileMenu);
    mobileMenu.classList.add('active')
    overlay.classList.add('active')



   
})




closeBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    overlay.classList.remove('active')
    mobileSidebar.classList.remove('active')

    console.log(closeBtn);
})



overlay.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    mobileSidebar.remove('active');
    overlay.classList.remove('active');
   

})


