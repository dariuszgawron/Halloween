// MOBILE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Open menu
navToggle.addEventListener('click', () => {
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
const scrollUpBtn = document.getElementById('scroll-up');
function showScrollBtn() {
    this.scrollY >= 200 ? scrollUpBtn.classList.add('scroll-up--show') : scrollUpBtn.classList.remove('scroll-up--show');
}
window.addEventListener('scroll',showScrollBtn);

// SCROLL SECTIONS
const sections = document.querySelectorAll('section[id]');
function changeActiveMenuItem() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionId= section.getAttribute('id');
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 70;
        const menuLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        (sectionTop < scrollY && scrollY <= sectionTop + sectionHeight) 
            ? menuLink.classList.add('nav__link--active')
            : menuLink.classList.remove('nav__link--active');
    })
}
window.addEventListener('scroll',changeActiveMenuItem);

// SWIPER
const newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,  
})

// SCROLL REVEAL
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 1500,
    delay: 200
});
scrollReveal.reveal('.home__img',{delay: 400});
scrollReveal.reveal('.home__data, .favorite__card, .candy__card, .new__container, .newsletter__container');
scrollReveal.reveal('.about__content, .discount__img', {origin: 'left'});
scrollReveal.reveal('.about__img, .discount__box', {origin: 'right'});