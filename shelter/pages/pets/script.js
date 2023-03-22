const hamburger = document.querySelector('.hamburger-container');
const menu = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__element__link');
const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

hamburger.addEventListener('click', function(){
    header.classList.toggle('not-sticky-header');
    hamburger.classList.toggle('active-hamburger');
    menu.classList.toggle('open');
    setTimeout(() => logo.classList.toggle('active-logo'), 400);
    body.classList.toggle('hidden');
})

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link')) {
        hamburger.classList.remove('active-hamburger');
        menu.classList.remove('open');
        logo.classList.remove('active-logo');
        header.classList.remove('not-sticky-header');
        body.classList.remove('hidden');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));