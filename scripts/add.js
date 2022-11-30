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