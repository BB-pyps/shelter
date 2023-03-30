console.log('Самопроверка:\nСтраница Main(60)\n1. Страница Main(+7)\n2. Верстка соответствует макету(+35)\n3. Требования к css(+6)\n 4.Интерактивность элементов(+12) \n Страница Pets\n 5.Проверка вёрстки(+7) \n 6.Вёрстка соответствует макету \n 7. Требования к css(+4) \n 8. Интерактивность элементов(+14)');
//----------------Hamburger-menu-----------------/

const HAMBURGER = document.querySelector('.hamburger-container');
const MENU = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__element__link');
const BODY = document.querySelector('.body');

HAMBURGER.addEventListener('click', function(){
    HAMBURGER.classList.toggle('active-hamburger');
    MENU.classList.toggle('open');
    BODY.classList.toggle('hidden');
})

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link')) {
        HAMBURGER.classList.remove('active-hamburger');
        MENU.classList.remove('open');
        BODY.classList.remove('hidden');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
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
