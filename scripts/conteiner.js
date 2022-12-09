const buttonOpenPopupUser = document.querySelector('.menu-popup__name');
const popupUser = document.querySelector('.popuo_user');
const popupUserClose = popupUser.querySelector('.popup__button-close');
const button = document.querySelector('.popup__button');

const formUser = document.querySelector('.form-user');
// передача от попап к форме 

const titleName = document.querySelector('.about__title');
const titleJob = document.querySelector('.about__job');

const popupInputName = document.querySelector('.popup__input-name');
const popupInputJob = document.querySelector('.popup__input-job');

const popupSpan = document.querySelector('.popup__span');


const glaoerea = document.querySelector('.glaoerea-photo');
const buttonSevFoto = document.querySelector('.menu-popup__foto');

const popupFotoSev = document.querySelector('.popuo-foto');
const closePopupFotoSev = popupFotoSev.querySelector('.popup__button-close');
const popupTitle = document.querySelector('.popup__input-img');
const popupImg = document.querySelector('.popup__input-url');


const buttonPopupFoto = document.querySelector('.popup__imag');

const popupFotot = document.querySelector('.popup__foto__img');
const buttonClosePopupFoto = popupFotot?.querySelector('.popup__button-close');
const submitPopupFoto = popupFotot?.querySelector('.popup__button');

const addFoto = document.querySelector('.img__popup');
const addTitle = document.querySelector('.name__popup');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];