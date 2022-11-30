const form = document.querySelector('.form');
const formInput = form.querySelector('.form__input');
// console.log(formInput.id);

// включить проверку
const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));

    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
        // Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement);
    })
}

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector('.popup__button');

    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    toggleButtonState(inputList, buttonElement);

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', () => {
            // Внутри колбэка вызовем isValid,
            // передав ей форму и проверяемый элемент
            isValid(formElement, inputElement);

            // Вызовем toggleButtonState и передадим ей массив полей и кнопку
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const showInputError = (formElement, inputElement, errorMesseg) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_error');
    errorElement.classList.add('form__input-error-active');
    errorElement.textContent = errorMesseg;
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_error');
    errorElement.classList.remove('form__input-error-active');
    errorElement.textContent = '';
}

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
// })

// Функция принимает массив полей 
const hasValidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся функция
        // hasInvalidInput вернёт true
        return !inputElement.validity.valid;
    })
}

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonEelment) => {
    // Если есть хотя бы один невалидный инпут
    if (hasValidInput(inputList)) {
        // сделай кнопку неактивной
        buttonEelment.classList.add('popup__button-disabled');
        // отключаем, так как sibmit можно нажать Enter-ом 
        buttonEelment.disabled = true;
    } else {
        // иначе сделай кнопку активной
        buttonEelment.classList.remove('popup__button-disabled');
        buttonEelment.disabled = false;
    }
};

enableValidation();