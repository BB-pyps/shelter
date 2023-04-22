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
  if (HAMBURGER.classList.contains('active-hamburger') &&
     (event.target.classList.contains('navigation__element__link') || 
      event.target.classList.contains('overlay'))) {
      toggleClass();
  }
}

HAMBURGER.addEventListener('click', () => toggleClass());
BODY.addEventListener('click', (event) => closeMenu(event));



const petsData = [
  {
    name: 'Jennifer',
    img: '../../assets/images/jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/scarlett.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Katrine',
    img: '../../assets/images/katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../assets/images/timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../assets/images/freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: '../../assets/images/charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

const CARDS_CONTAINER = document.querySelector('.cards-container');
const PAGINATION_BUTTON_CURR = document.querySelector('.button-active');
const PAGINATION_BUTTONS_CONTAINER = document.querySelector(
  '.pagination-buttons'
);
let randomArr = [];
const firstPaginationButtons = document.querySelectorAll('#inactive-first');
const lastPaginationButtons = document.querySelectorAll('#inactive-last');

function generateRandomNumber(randomArr) {
  let randomNumber = Math.floor(Math.random() * 8);
  if (
    randomArr.length === 0 ||
    (randomArr.length !== 0 && !randomArr.includes(randomNumber))
  ) {
    randomArr.push(randomNumber);
  } else {
    generateRandomNumber(randomArr);
  }
}

function generateArray(randomArr) {
  for (let i = 0; i < 8; i++) {
    generateRandomNumber(randomArr);
  }
  return randomArr;
}

function sliceIntoChunks(arr, chunkSize) {
  const chunksArr = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunksArr.push(chunk);
  }
  return chunksArr;
}

function shuffleArr(arr) {
  console.log(arr);
  const shuffledArr = arr.map((item) => {
    const newItem = [...item];
    newItem.sort(() => Math.random() - 0.5);
    return newItem;
  });
  console.log(shuffledArr);
  return shuffledArr;
}

function removeChunks(arr) {
  const arrAfterRemoveChunks = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arrAfterRemoveChunks.push(arr[i][j]);
    }
  }
  return arrAfterRemoveChunks;
}

function pushInArrOfCards(arr, finalArr) {
  for (let i = 0; i < arr.length; i++) {
    finalArr.push(arr[i]);
  }
}

function finalAssemblyOfArr() {
  const finalArr = [];
  generateArray(randomArr);
  const arrOfChunks = sliceIntoChunks(randomArr, 3);
  for (let i = 0; i < 6; i++) {
    const shuffledArr = shuffleArr(arrOfChunks);
    const shuffledArrAfterRemoveChunks = removeChunks(shuffledArr);
    pushInArrOfCards(shuffledArrAfterRemoveChunks, finalArr);
  }
  return finalArr;
}

const arrOfCards = finalAssemblyOfArr();
console.log(arrOfCards);
let notesOnPage;

//Проверка на размер экрана
function checkScreenSize(notesOnPage, ...args) {
  if (window.innerWidth >= 1279) {
    notesOnPage = 8;
    lastPage = 6;
  } else if (window.innerWidth <= 609) {
    notesOnPage = 3;
    lastPage = 16;
  } else {
    notesOnPage = 6;
    lastPage = 8;
  }
  return [notesOnPage, lastPage];
}

function createCardTemplate(currentCardNumber) {
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

function addClassAndAtribute(arrFirst) {
  arrFirst.forEach((item) => {
    item.classList.add('pagination-button_disabled');
    item.setAttribute('disabled', 'disabled');
  });
}

function removeClassAndAtribute(arrLast) {
  arrLast.forEach((item) => {
    item.classList.remove('pagination-button_disabled');
    item.removeAttribute('disabled', 'disabled');
  });
}

function showFirstPage(arrOfCards) {
  [notesOnPage] = checkScreenSize(notesOnPage);
  let pageNum = 1;
  let start = (pageNum - 1) * notesOnPage;
  let end = start + notesOnPage;
  let notes = arrOfCards.slice(start, end);
  CARDS_CONTAINER.innerHTML = ``;
  for (let i = 0; i < notes.length; i++) {
    CARDS_CONTAINER.append(createCardTemplate(notes[i]));
  }
  addClassAndAtribute(firstPaginationButtons);
  PAGINATION_BUTTON_CURR.innerHTML = `1`;
  removeClassAndAtribute(lastPaginationButtons);
}

showFirstPage(arrOfCards);

function showLastPage(arrOfCards) {
  let lastPage;
  [notesOnPage, lastPage] = checkScreenSize(notesOnPage, lastPage);
  let notes = arrOfCards.slice(-notesOnPage);
  CARDS_CONTAINER.innerHTML = ``;
  for (let i = 0; i < notes.length; i++) {
    CARDS_CONTAINER.append(createCardTemplate(notes[i]));
  }
  addClassAndAtribute(lastPaginationButtons);
  PAGINATION_BUTTON_CURR.innerHTML = `${lastPage}`;
  removeClassAndAtribute(firstPaginationButtons);
}

function showNextPage(arrOfCards) {
  let lastPage;
  [notesOnPage, lastPage] = checkScreenSize(notesOnPage, lastPage);
  let pageNum = +PAGINATION_BUTTON_CURR.textContent;
  if (pageNum === 1) {
    removeClassAndAtribute(firstPaginationButtons);
  }
  if (pageNum < lastPage) {
    let start = pageNum * notesOnPage;
    let end = start + notesOnPage;
    let notes = arrOfCards.slice(start, end);
    console.log(notes);
    CARDS_CONTAINER.innerHTML = ``;
    for (let i = 0; i < notes.length; i++) {
      CARDS_CONTAINER.append(createCardTemplate(notes[i]));
    }
    if (pageNum < lastPage) {
      PAGINATION_BUTTON_CURR.innerHTML = `${pageNum + 1}`;
    }
    pageNum = +PAGINATION_BUTTON_CURR.textContent;
    if (pageNum === lastPage) {
      addClassAndAtribute(lastPaginationButtons);
    }
  }
}

function showPrevPage(arrOfCards) {
  let lastPage;
  [notesOnPage, lastPage] = checkScreenSize(notesOnPage, lastPage);
  let pageNum = +PAGINATION_BUTTON_CURR.textContent;
  if (pageNum === lastPage) {
    removeClassAndAtribute(lastPaginationButtons);
  }
  if (pageNum > 1) {
    let start = (pageNum - 2) * notesOnPage;
    let end = start + notesOnPage;
    let notes = arrOfCards.slice(start, end);
    console.log(notes);
    CARDS_CONTAINER.innerHTML = ``;
    for (let i = 0; i < notes.length; i++) {
      CARDS_CONTAINER.append(createCardTemplate(notes[i]));
    }
    if (pageNum > 1) {
      PAGINATION_BUTTON_CURR.innerHTML = `${pageNum - 1}`;
    }
    pageNum = +PAGINATION_BUTTON_CURR.textContent;
    if (pageNum === 1) {
      addClassAndAtribute(firstPaginationButtons);
    }
  }
}

PAGINATION_BUTTONS_CONTAINER.addEventListener('click', (event) => {
  const name = event.target.dataset.name;
  switch (name) {
    case 'first':
      showFirstPage(arrOfCards);
      break;
    case 'last':
      showLastPage(arrOfCards);
      break;
    case 'right':
      showNextPage(arrOfCards);
      break;
    case 'left':
      showPrevPage(arrOfCards);
      break;
  }
});

window.addEventListener('resize', () => showFirstPage(arrOfCards));

const POPUP = document.querySelector('.popup');
let POPUP__CLOSE__BUTTON;

function generatePopup(cardDataId) {
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

function closePopup() {
  POPUP.classList.remove('show-popup');
  HTML.classList.remove('hidden');
  POPUP__CLOSE__BUTTON.classList.remove('animation-popup');
  POPUP.innerHTML = ``;
}

CARDS_CONTAINER.addEventListener('click', (event) => {
  let cardDataId;
  const classList = event.target.classList;
  if (classList.contains('card')) {
    cardDataId = event.target.dataset.id;
  } else if (
    classList.contains('card__button') ||
    classList.contains('card__title') ||
    classList.contains('card__picture')
  ) {
    cardDataId = event.target.closest('li').dataset.id;
  }
  generatePopup(cardDataId);
  POPUP.classList.add('show-popup');
  HTML.classList.add('hidden');
  POPUP__CLOSE__BUTTON = document.querySelector('.popup__close');
});

POPUP.addEventListener('click', (event) => {
  const classList = event.target.classList;
  if (
    classList.contains('popup') ||
    classList.contains('popup__body') ||
    classList.contains('popup__close-img') ||
    classList.contains('popup__close')
  ) {
    POPUP__CLOSE__BUTTON.classList.add('animation-popup');
    setTimeout(() => {
      closePopup();
    }, 500);
  }
});
