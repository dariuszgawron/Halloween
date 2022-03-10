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