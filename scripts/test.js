// enableValidation
// setEventListeners
// showInputError
// hideInputError
// isValid

function enableValidationOne() {
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((formElement) => {
        setEventListenersOne(formElement);
    })
};

function setEventListenersOne(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const btn = formElement.querySelector('.popup__button');

    activeBtn(inputList, btn);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValidOne(formElement, inputElement);
            activeBtn(inputList, btn);
        });
    })
};

function showInputErrorOne(formElement, inputElement, Message) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_error');
    errorElement.textContent = Message;
    errorElement.classList.add('form__input-error-active');
};

function hideInputErrorOne(formElement, inputElement) {
    const erroeElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_error');
    erroeElement.textContent = '';
    erroeElement.classList.remove('form__input-error-active');
}

function isValidOne(formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputErrorOne(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputErrorOne(formElement, inputElement);
    }
};

function activeBtn(inputList, btn) {
    if (isValidBtn(inputList)) {
        btn.classList.add('popup__button-disabled');
        btn.disabled = true;
    } else {
        btn.classList.remove('popup__button-disabled');
        btn.disabled = false;
    }
}

function isValidBtn(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

enableValidationOne();