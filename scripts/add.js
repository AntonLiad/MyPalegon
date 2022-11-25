const buttonOpenPopupUser = document.querySelector('.menu-popup__name');
const popupUser = document.querySelector('.popuo_user');
const popupUserClose = popupUser.querySelector('.popup__button-close');

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