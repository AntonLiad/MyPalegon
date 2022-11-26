const buttonOpenPopupUser = document.querySelector('.menu-popup__name');
const popupUser = document.querySelector('.popuo_user');
const popupUserClose = popupUser.querySelector('.popup__button-close');
const buttonSevAbout = document.querySelector('.popup__button');
const aboutTitle = document.querySelector('.about__title');

// передача от попап к форме 

const titleName = document.querySelector('.about__title');
const titleJob = document.querySelector('.about__job');

const popupInputName = document.querySelector('.popup__input-name');
const popupInputJob = document.querySelector('.popup__input-job');

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

function closePopupEsc (evt) {
    if (evt.key === 'Escape') {
        buttonClose(popupUser)
    }
}

buttonSevAbout.addEventListener('submit', dataTransmissionPopup)

function dataTransmissionPopup(evt) {
evt.preventDefault();
titleName.textContent = popupInputName.value;
titleJob.textContent = popupInputJob.value
}

