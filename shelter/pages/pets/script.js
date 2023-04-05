const hamburger = document.querySelector('.hamburger-container');
const menu = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__element__link');
const header = document.querySelector('.header');
const body = document.querySelector('.body');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active-hamburger');
    menu.classList.toggle('open');
    body.classList.toggle('hidden');
    body.classList.toggle('overlay');
})

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link') || event.target.classList.contains('overlay')) {
        hamburger.classList.remove('active-hamburger');
        menu.classList.remove('open');
        body.classList.remove('hidden');
        body.classList.remove('overlay');

    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
body.addEventListener('click', closeMenu);