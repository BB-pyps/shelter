const hamburger = document.querySelector('.hamburger-container');
const menu = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__element__link');
const header = document.querySelector('.header');
const body = document.querySelector('.body');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active-hamburger');
    menu.classList.toggle('open');
    body.classList.toggle('hidden');
})

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link')) {
        hamburger.classList.remove('active-hamburger');
        menu.classList.remove('open');
        body.classList.remove('hidden');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));