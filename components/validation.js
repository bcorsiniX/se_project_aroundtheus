/*function enableValidation(options) {
  const formList = [...document.querySelectorAll(options.formSelector)];
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
  });
}

/*function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputList = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(options.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputList, submitButton, options);
    });
  });
}*/


/*function hasInvalidInput(inputList) {
  return !inputList.every((inputElement) => 
    inputElement.validity.valid
  );
}

/*function enableSubmitButton(submitButton, options) {
  submitButton.classList.remove(options.inactiveButtonClass);
  submitButton.disable = false;
}

/*function toggleButtonState(inputList, submitButton, options) {
  const { inactiveButtonClass } = options;
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disable = true;
    return;
  }
  enableSubmitButton(submitButton, options);
}*/

f/*unction showInputError(formElement, inputElement) {
  const { inputErrorClass, errorClass } = options;
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputElement.validationMessage;
  errorMessageEl.classList.add(errorClass);
}*/

/*function hideInputError(formElement, inputElement) {
  const { inputErrorClass, errorClass } = options;
  const errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorMessageEl.classList.remove(errorClass);
  errorMessageEl.textContent = "";
}*/

/*function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    return showInputError(formElement, inputElement);
  }
  hideInputError(formElement, inputElement);
}*/

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(options);
