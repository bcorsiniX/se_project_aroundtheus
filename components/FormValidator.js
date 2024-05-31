export default class FormValidator {
    constructor(options, formElement) {
        this._formElement = formElement;
        this._formSelector = options.formSelector
        this._inputSelector = options.inputSelector; 
        this._submitButtonSelector = options.submitButtonSelctor;
        this._inactiveButtonClass = options.inactiveButtonClass;
        this._inputErrorClass = options.inputErrorClass;
        this._errorClass = options.errorClass;


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
        this._hideInputError(formElement, inputElement);
    }


    _hasInvalidInput(inputList) {
        return !inputList.every((inputElement) => 
          inputElement.validity.valid
        );
    }


    _toggleButtonState(inputList, submitButton) {
        if (this._hasInvalidInput(inputList)) {
            console.log(this._inactiveButtonClass)
            console.log(submitButton);
          submitButton.classList.add(this._inactiveButtonClass);
          submitButton.disabled = true;
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
        this._submitButton = this._formElement.querySelectorAll(this._submitButtonSelector);
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener("input", () => {
                    this._checkInputValidity(this._formElement, inputElement, this._options);
                    this._toggleButtonState(this._inputList, this._submitButton);
                });
            });
    }
    

    enableValidation() {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        this._setEventListeners(this._formElement, this._options);
    }

}



