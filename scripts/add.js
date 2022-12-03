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

buttonSevFoto.addEventListener('click', () => {
    openPopup(popupFotoSev);
})

closePopupFotoSev.addEventListener('click', () =>
    buttonClose(popupFotoSev));


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
