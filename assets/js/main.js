// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Open menu
navToggle.addEventListener('click', () => {
    console.log('ok');
    navMenu.classList.add('nav__menu--show');
})

// Close menu
const closeMenu = () => {
    navMenu.classList.remove('nav__menu--show');
}
navClose.addEventListener('click', () => {
    closeMenu();
})
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        closeMenu();
    })
})

// ACTIVE HEADER
const header = document.getElementById('header');
function scrollHeader() {
    this.scrollY > 40 ? header.classList.add('header--active') : header.classList.remove('header--active');
}
window.addEventListener('scroll',scrollHeader);

// SCROLL UP

// SCROLL SECTIONS

// SWIPER
const newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 30,
    loop: true,
    
})