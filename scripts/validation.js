const options = {
    formSelector: ".modal",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };


function showInputError(form, inputElement, {inputErrorClass, errorClass}) {

    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    inputElement.classList.add(errorClass);
    errorElement.textContent = validationMessage;
}

function hideInputError() {
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    inputElement.classList.remove(errorClass);
    errorElement.textContent = "";
}

function checkInputValidity(form, inputElement, options) {
    if (!inputElement.validity.valid) {
        showInputError(form, inputElement, inputElement.validationMessage, options);
    } else {
        hideInputError(form, inputElement, options);
    }
}

function setEventListeners (form, options) {
    const {inputSelector} = options;
    inputList = [...form.querySelectorAll(inputSelector)];
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            checkInputValidity(form, inputElement, options);
            toggleButtonState(inputList, buttonElement, options);
           });
    });
   
}

const enableValidation = (options) => {
    const formList = [...document.querySelectorAll(options.formSelector)];
    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, options);
    
    });
}

enableValidation(options);