export default class FormValidator {
    constructor(settings, formElement) {
        this._formElement = formElement;
        this._formSelector = settings.formSelector
        this._inputSelector = settings.inputSelector; 
        this._submitButtonSelector = settings.submitButtonSelctor;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;


    }

    _showInputError(formElement, inputElement) {
        this._errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        this._errorMessageEl.textContent = inputElement.validationMessage;
        this._errorMessageEl.classList.add(this._errorClass);
    }
      

    _hideInputError(formElement, inputElement) {
        this._errorMessageEl = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorMessageEl.classList.remove(this._errorClass);
        this._errorMessageEl.textContent = "";
    }

    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
          return showInputError(formElement, inputElement);
        }
        hideInputError(formElement, inputElement);
    }


    _hasInvalidInput(inputList) {
        return !inputList.every((inputElement) => 
          inputElement.validity.valid
        );
    }


    _toggleButtonState(inputList, submitButton) {
        if (hasInvalidInput(inputList)) {
          submitButton.classList.add(this._inactiveButtonClass);
          submitButton.disable = true;
          return;
        }
        this._enableSubmitButton(submitButton);
    }


    _enableSubmitButton(submitButton) {
        submitButton.classList.remove(this._inactiveButtonClass);
        submitButton.disable = false;
    }


    _setEventListeners() {
        this._inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
            inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                    checkInputValidity(formElement, inputElement, options);
                    toggleButtonState(inputList, submitButton);
                });
            });
    }
    

    enableValidation() {
        formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        setEventListeners(formElement, options);
    }

}



