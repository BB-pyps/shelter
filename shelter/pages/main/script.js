console.log('Самопроверка:\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n 3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n 4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n 5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n 6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6 \n 7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n 8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8 \n 9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n 10. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8');
// import data from "./pets.json";
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


//----------------Carousel--------------------/

const BTN_LEFT = document.querySelector('.arrow-left');
const BTN_RIGHT = document.querySelector('.arrow-right');
const CAROUSEL = document.querySelector('.carousel');
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

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


let numberCards;


if(window.innerWidth >= 1279){
   numberCards = 3;
}else if(window.innerWidth <= 767){
    numberCards = 1;
}else {
    numberCards = 2;
}

function generateRandomNumberAndPushElem(firstArr, secondArr){
    let randomNumber = Math.floor(Math.random() * 8);
        if(((secondArr.length === 0) && (firstArr.length === 0)) ||
           ((firstArr.length !== 0) && !(firstArr.includes(petsData[randomNumber].name)) && (secondArr.length === 0)) ||
           ((secondArr.length !== 0) && !(secondArr.includes(petsData[randomNumber].name)) && (firstArr.length === 0)) ||
           (!(firstArr.includes(petsData[randomNumber].name)) && (!(secondArr.includes(petsData[randomNumber].name))))){
            firstArr.push(petsData[randomNumber].name);
        } else {
            generateRandomNumberAndPushElem(firstArr, secondArr);
        }
}

function generateArrays(firstArr, secondArr){
    for(let i=0; i < numberCards; i++){
        generateRandomNumberAndPushElem(firstArr, secondArr);
}
}

function init(){
    let pastArr = [];
    let currArr = [];
    let nextArr = [];
    generateArrays(nextArr, currArr);
    currArr = nextArr.slice();
    nextArr = [];
    generateArrays(nextArr, currArr);
    pastArr = currArr.slice();
    curArr = [];
    currArr = nextArr.slice();
    nextArr = [];
    generateArrays(nextArr, currArr);
    console.log(`pastArr ${pastArr}`);
    console.log(`currArr ${currArr}`);
    console.log(`nextArr ${nextArr}`);
}

init();

//   console.log(Array.isArray(petsData));

// let activeElementsNames = [];
// function getActive(){
//     let activeItem = document.querySelector('#item-active');
//     let activeElements = activeItem.querySelectorAll('.card__title');
//     for(let i = 0; i < activeElements.length; i++){
//         activeElementsNames.push(activeElements[i].textContent);
//     }
//     return activeElementsNames;
// }

// const createCardTemplate = () => {
//     const card = document.createElement('li');
//     card.classList.add('card');
//     let number = Math.floor(Math.random(8));
//     getActive();
//     if(!activeElementsNames.includes(petsData[number].name)){
//         let currentName = petsData[number].name.toLowerCase() ;
//         const cardPicture = document.createElement('img');
//         cardPicture.classList.add('card__picture');
//         cardPicture.src = `../../assets/images/${currentName}.png`;
//         cardPicture.alt = `${petsData[number].type} ${petsData[number].name}`;
//         cardPicture.width = '270';
//         cardPicture.height = '270';
//         card.append(cardPicture);
//         return card;
//     } else {
//         createCardTemplate();
//     }

// }

// const moveLeft = () => {
//   CAROUSEL.classList.add('transition-left'); 
//   BTN_LEFT.removeEventListener('click', moveLeft);
//   BTN_RIGHT.removeEventListener('click', moveRight);
// }

// const moveRight = () => {
//     CAROUSEL.classList.add('transition-right');
//     BTN_RIGHT.removeEventListener('click', moveRight);
//     BTN_LEFT.removeEventListener('click', moveLeft);
//   }

// BTN_LEFT.addEventListener('click', moveLeft);
// BTN_RIGHT.addEventListener('click', moveRight);

// CAROUSEL.addEventListener('animationend', (animationEvent) => {
//     let changedItem;
//     if (animationEvent.animationName === "move-left") {
//         CAROUSEL.classList.remove("transition-left");
//         changedItem = ITEM_LEFT;
//         document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
//     } else {
//         CAROUSEL.classList.remove("transition-right");
//         changedItem = ITEM_RIGHT;
//         document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
//     }

//     changedItem.innerHTML = "";
//     for (let i = 0; i < 3; i++) {
//         changedItem.append(createCardTemplate()); 
//     }

//     BTN_LEFT.addEventListener('click', moveLeft);
//     BTN_RIGHT.addEventListener('click', moveRight);
// } )

