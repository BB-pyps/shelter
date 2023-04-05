console.log('Самопроверка:\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n 3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n 4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6 \n 7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8 \n 9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n 10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');
//----------------Hamburger-menu-----------------/

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
/*

//----------------Carousel--------------------/

const BTN_LEFT = document.querySelector('.arrow-left');
const BTN_RIGHT = document.querySelector('.arrow-right');
const CAROUSEL = document.querySelector('.carousel');
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

let petsData;
function getData(){
    fetch('./pets.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        petsData = jsondata;
})
return petsData;
}

let activeElementsNames = [];
function getActive(){
    let activeItem = document.querySelector('#item-active');
    let activeElements = activeItem.querySelectorAll('.card__title');
    for(let i = 0; i < activeElements.length; i++){
        activeElementsNames.push(activeElements[i].textContent);
    }
    return activeElementsNames;
}

const createCardTemplate = () => {
    const card = document.createElement('li');
    card.classList.add('card');
    getData();
    let number = Math.floor(Math.random(8));
    getActive();
    if(!activeElementsNames.includes(petsData[number].name)){
        let currentName = petsData[number].name.toLowerCase() ;
        const cardPicture = document.createElement('img');
        cardPicture.classList.add('card__picture');
        cardPicture.src = `../../assets/images/${currentName}.png`;
        cardPicture.alt = `${petsData[number].type} ${petsData[number].name}`;
        cardPicture.width = '270';
        cardPicture.height = '270';
        card.innerHTML(cardPicture);

    } else {
        createCardTemplate();
    }

}

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left'); 
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTN_RIGHT.removeEventListener('click', moveRight);
    BTN_LEFT.removeEventListener('click', moveLeft);
  }

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        createCardTemplate();
        changedItem.appendChild(card);
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
} )
*/
