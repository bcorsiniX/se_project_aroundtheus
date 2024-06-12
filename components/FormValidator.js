export default class FormValidator {
  constructor(options, formElement, inputElement) {
    this._formElement = formElement;
    this._inputElement = inputElement;
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
  }

 

 
 
  _showInputError() {
    this._errorMessageEl = this._formElement.querySelector(
      `#${this._inputElement.id}-error`
    );
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = this._inputElement.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError() {
    this._errorMessageEl = this._formElement.querySelector(
      `#${this._inputElement.id}-error`
    );
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorMessageEl.classList.remove(this._errorClass);
    this._errorMessageEl.textContent = "";
  }

  _checkInputValidity() {
    if (!this._inputElement.validity.valid) {
      return this._showInputError();
    }
    this._hideInputError();
  }

  _hasInvalidInput() {
    return !this._inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      return;
    }
    this._enableSubmitButton();
  }

  _enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }


  _setEventListeners() {
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  }





  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}