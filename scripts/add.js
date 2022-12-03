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

buttonOpenPopupUser.addEventListener('click', () => {
    openPopup(popupUser)
});

popupUserClose.addEventListener('click', () =>
    buttonClose(popupUser)
)

function openPopup(window) {
    window.classList.add('popuo_user-activ');
}

function buttonClose(window) {
    window.classList.remove('popuo_user-activ');
}

document.addEventListener('keydown', closePopupEsc);

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        buttonClose(popupUser)
    }
}

const deletePopupUser = (e) => {
    if (e.target === e.currentTarget) {
        buttonClose(popupUser);
    }
}


formUser.addEventListener('submit', inputIvent);

popupUser.addEventListener('click', deletePopupUser);

function inputIvent(evt) {
    evt.preventDefault();
    titleName.textContent = popupInputName.value;
    titleJob.textContent = popupInputJob.value;
    buttonClose(popupUser);
};

const btns = document.querySelectorAll('.btn');

function handleClick(e) {
    console.log(e.target.validity.valid);
}

const inputs = document.querySelectorAll('.popup__input')

inputs.forEach(input => {
    input.addEventListener('click', handleClick)
})

//1
const glaoerea = document.querySelector('.glaoerea-photo');
//2

const buttonSevFoto = document.querySelector('.menu-popup__foto');

const popupFotoSev = document.querySelector('.popuo-foto');
const closePopupFotoSev = popupFotoSev.querySelector('.popup__button-close');
const inputNameFoto = document.querySelector('.popup__input-name-img');
const inputImgFoto = document.querySelector('.popup__input-url');

buttonSevFoto.addEventListener('click', () => {
    openPopup(popupFotoSev);
})

closePopupFotoSev.addEventListener('click', () =>
    buttonClose(popupFotoSev));


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

const template = document.querySelector('#template').content;
template.querySelector('.popup__foto');

initialCards.forEach((dataCard) => {
    renderCard(dataCard);
})

function renderCard(dataCard) {
    glaoerea.prepend(generatCart(dataCard));
}

function generatCart(dataCard) {
    const newCard = template.cloneNode(true);

    const title = newCard.querySelector('.popup__title-name');
    const img = newCard.querySelector('.popup__imag');

    title.textContent = dataCard.name;
    img.src = dataCard.link;

    img.addEventListener('click', () => {
        openPopup(popupFotot);
        addFoto.src = dataCard.link;
        addTitle.textContent = dataCard.name;
    })

    return newCard
}

const buttonPopupFoto = document.querySelector('.popup__imag');

const popupFotot = document.querySelector('.popup__foto__img');
const buttonClosePopupFoto = popupFotot?.querySelector('.popup__button-close');
const submitPopupFoto = popupFotot?.querySelector('.popup__button');

const addFoto = document.querySelector('.img__popup');
const addTitle = document.querySelector('.name__popup');

popupFotot.addEventListener('click', () => {
    buttonClose(popupFotot)
})

popupFotoSev.addEventListener('submit', handleProfileFormSubmit);

function handleProfileFormSubmit(e) {
    e.preventDefault();
    renderCard({ link: inputImgFoto.value, name: inputNameFoto.value })
    inputImgFoto.value = '';
    inputNameFoto.value = '';
    buttonClose(popupFotoSev);
}
