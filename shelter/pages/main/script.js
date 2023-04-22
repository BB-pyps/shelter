console.log('Самопроверка:/n 1.Реализация burger menu на обеих страницах: +26/n 2. Реализация слайдера-карусели на странице Main: +36/n 3. Реализация пагинации на странице Pets: +32 (не сделан данный пункт: при изменении ширины экрана (от 1280px до 320px и обратно), пагинация перестраивается и работает без перезагрузки страницы (страница может оставаться той же или переключаться, при этом сформированный массив - общая последовательность карточек - не обновляется, сохраняются все остальные требования к пагинации)) /n 4. Реализация попап на обеих страницах: +12 /n Буду рада подробному фитбеку =)');
// import data from "./pets.json";
//----------------Hamburger-menu-----------------/

const HAMBURGER = document.querySelector('.hamburger-container');
const MENU = document.querySelector('.navigation');
const NAV_LINKS = document.querySelectorAll('.navigation__element__link');
const BODY = document.querySelector('.body');
const HTML = document.querySelector('html');


function toggleClass(){
    HAMBURGER.classList.toggle('active-hamburger');
    MENU.classList.toggle('open');
    BODY.classList.toggle('overlay');
    HTML.classList.toggle('hidden');
}

function closeMenu(event) {
    if (event.target.classList.contains('navigation__element__link') || 
        event.target.classList.contains('overlay')) {
        toggleClass();
    }
}

HAMBURGER.addEventListener('click', () => toggleClass());
BODY.addEventListener('click', (event) => closeMenu(event));


//----------------Carousel--------------------/

const BTN_LEFT = document.querySelector('.arrow-left');
const BTN_RIGHT = document.querySelector('.arrow-right');
const CAROUSEL = document.querySelector('.carousel');
const itemLeft = document.querySelector('#item-left');
const itemActive =  document.querySelector('#item-active');
const itemRight = document.querySelector('#item-right');
let numberCards;
let pastArr = [];
let currArr = [];
let nextArr = [];
let POPUP = document.querySelector('.popup');


const petsData = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];


//Генерация уникального числа 
function generateRandomNumberAndPushElem(firstArr, secondArr){
    const randomNumber = Math.floor(Math.random() * 8);

    const condition1 = secondArr.length === 0 && firstArr.length === 0;
    const condition2 = firstArr.length !== 0 && 
                       !firstArr.includes(randomNumber) && 
                       secondArr.length === 0;
    const condition3 = secondArr.length !== 0 && 
                       !secondArr.includes(randomNumber) && 
                       firstArr.length === 0;
    const condition4 = !firstArr.includes(randomNumber) && 
                       !secondArr.includes(randomNumber);
        if(condition1 || condition2 || condition3 || condition4){
            firstArr.push(randomNumber);
        } else {
            generateRandomNumberAndPushElem(firstArr, secondArr);
        }
        return [firstArr, secondArr];
}

//Генерация массива уникальных чисел
function generateArrays(firstArr, secondArr){
    for(let i = 0; i < 3; i++){
        generateRandomNumberAndPushElem(firstArr, secondArr);
    }
     return [firstArr, secondArr];
}

//Инициализация
function init(){
    generateArrays(nextArr, currArr);
    currArr = nextArr.slice();
    generateArrays(nextArr, currArr);
    pastArr = currArr.slice();
    currArr = nextArr.slice();
    generateArrays(nextArr, currArr);
}


function scrollSlider(next){
    if(next){
        pastArr = currArr.slice();
        currArr = nextArr.slice();
        generateArrays(nextArr, currArr);
    }else{
        nextArr = currArr.slice();
        currArr = pastArr.slice();
        generateArrays(pastArr, currArr);
    }
    return [pastArr, currArr, nextArr];
}


//Создание карточки питомца
function createCardTemplate(currentCardNumber){
    const card = document.createElement('li');
    card.classList.add('card');
    card.dataset.id = currentCardNumber;
    const contentCard = `<img src="${petsData[currentCardNumber].img}" 
    class="card__picture" alt="${petsData[currentCardNumber].type} ${petsData[currentCardNumber].name}"
    width="270" height="270">
    <span class="card__title">${petsData[currentCardNumber].name}</span>
    <button class="card__button">Learn more</button>`;
    card.insertAdjacentHTML('afterbegin', contentCard);
    return card;
}

//Заполнение выбранного элемента карточками
function fillCarouselItem(carouselItem, cardsArr){
    for(let i = 0; i < 3; i++){
        const cardHTML = createCardTemplate(cardsArr[i]);
        (carouselItem).append(cardHTML);
    }
    return carouselItem;
}

//Заполнение массива элементов слайдера карточками
function fillThreeItemsOfCarousel(f){
    carouselItems = [itemLeft, itemActive, itemRight];
    let cardsArrays = f;
    console.log(cardsArrays);
    for(let i=0; i < carouselItems.length; i++){
        fillCarouselItem(carouselItems[i], cardsArrays[i]);
    }
    return [itemLeft, itemActive, itemRight];
}

function clearItems(){
    itemRight.innerHTML = ``;
    itemActive.innerHTML = ``;
    itemLeft.innerHTML = ``;
}

fillThreeItemsOfCarousel(init());

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


//На время анимации прокрутки снимаем слушатель с кнопок и 
//перерисовываем все карточки по окончанию прокрутки 
//не забываем в конце снова повесить слушатель на кнопки

CAROUSEL.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        clearItems();
        fillThreeItemsOfCarousel(scrollSlider());
    } else {
        CAROUSEL.classList.remove("transition-right");
        clearItems();
        fillThreeItemsOfCarousel(scrollSlider(next));
    }

    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});


//ПОПAП
let POPUP__CLOSE__BUTTON;

function generatePopup(cardDataId){
    let contentPopup = `<div class="popup__body">
    <div class="popup__content">
        <button class="popup__close">
            <img src="../../assets/icons/icon-cross.svg" alt="close popup button" class="popup__close-img">
        </button>
        <div class="popup__image">
            <img src="${petsData[cardDataId].img}" alt="${petsData[cardDataId].type} ${petsData[cardDataId].name}" class="popup__image-picture">
        </div>
        <div class="popup__text">
                <div class="popup__text-title">${petsData[cardDataId].name}</div>
                <div class="popup__text-subtitle">${petsData[cardDataId].type} - ${petsData[cardDataId].breed}</div>
                <div class="popup__text-description">${petsData[cardDataId].description}</div>
                <ul class="popup__text-list">
                    <li class="popup__text-list-element"><span class="list-elem__bold">Age:</span>${petsData[cardDataId].age}</li>
                    <li class="popup__text-list-element"><span class="list-elem__bold">Inoculations:</span>${petsData[cardDataId].inoculations}</li>
                    <li class="popup__text-list-element"><span class="list-elem__bold">Diseases:</span>${petsData[cardDataId].diseases}</li>
                    <li class="popup__text-list-element"><span class="list-elem__bold">Parasites:</span>${petsData[cardDataId].parasites}</li>
                </ul>
        </div>
    </div>
</div>`;
    POPUP.insertAdjacentHTML('afterbegin', contentPopup);
}

function closePopup(){
    POPUP.classList.remove('show-popup');
    HTML.classList.remove('hidden');
    POPUP__CLOSE__BUTTON.classList.remove('animation-popup');
    POPUP.innerHTML = ``;
}


itemActive.addEventListener('click', (event) => {
    let cardDataId;
    const classList = event.target.classList;
    if(event.target.classList.contains('card')){
        cardDataId = event.target.dataset.id;
    }else if(classList.contains('card__button') ||
             classList.contains('card__title') ||
             classList.contains('card__picture')){
        cardDataId = event.target.closest('li').dataset.id;
    }
    generatePopup(cardDataId);
    POPUP.classList.add('show-popup');
    HTML.classList.add('hidden');
    POPUP__CLOSE__BUTTON = document.querySelector('.popup__close');
});

POPUP.addEventListener('click', (event) => {
    const classList = event.target.classList;
    if(classList.contains('popup') || 
       classList.contains('popup__body') || 
       classList.contains('popup__close-img') || 
       classList.contains('popup__close')){
        POPUP__CLOSE__BUTTON.classList.add('animation-popup');
        setTimeout(() => {
            closePopup();
        }, 500);
       }
    });


