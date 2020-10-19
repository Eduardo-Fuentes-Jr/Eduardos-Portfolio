// .toggleNavbar

var menuBtn = document.querySelector('.menu-icon');
var navBar = document.querySelector('.nav-bar');
var menuOpen = document.querySelector('.menu-img');
var menuClose = document.querySelector('.menu-close')
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');
var contact = document.getElementById('contact');
var home = document.getElementById('home');

menuBtn.addEventListener('click', function(e) {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})

about.addEventListener('click', function () {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})

portfolio.addEventListener('click', function() {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})
 contact.addEventListener('click', function() {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})
home.addEventListener('click', function() {
    navBar.classList.toggle('toggleNavbar');
    menuOpen.classList.toggle('menu-open')
    menuClose.classList.toggle('menuCloseDisplay')
    e.defaultPrevented;
})