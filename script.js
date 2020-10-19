// .toggleNavbar

var menuBtn = document.querySelector('.menu-icon');
var navBar = document.querySelector('.nav-bar');
var menuOpen = document.querySelector('.menu-img');
var menuClose = document.querySelector('.menu-close')



menuBtn.addEventListener('click', function(e) {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})