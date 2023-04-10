const HAMBURGER = document.querySelector('.hamburger-container');
const MENU = document.querySelector('.navigation');
const NAV_LINKS = document.querySelectorAll('.navigation__element__link');
const BODY = document.querySelector('.body');


HAMBURGER.addEventListener('click', function(){
    HAMBURGER.classList.toggle('active-hamburger');
    MENU.classList.toggle('open');
    BODY.classList.toggle('hidden');
    BODY.classList.toggle('overlay');
})

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link') || event.target.classList.contains('overlay')) {
        HAMBURGER.classList.remove('active-hamburger');
        MENU.classList.remove('open');
        BODY.classList.remove('hidden');
        BODY.classList.remove('overlay');
    }
}

NAV_LINKS.forEach((el) => el.addEventListener('click', closeMenu));
BODY.addEventListener('click', closeMenu);