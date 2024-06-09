export default class FormValidator {
  constructor(options, formElement) {
    this._formElement = formElement;
    this._formSelector = options.formSelector;
    this._inputSelector = options.inputSelector;
    this._submitButton = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;
  }

  _showInputError(formElement, inputElement) {
    this._errorMessageEl = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = inputElement.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement) {
    this._errorMessageEl = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    this._errorMessageEl.classList.remove(this._errorClass);
    this._errorMessageEl.textContent = "";
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      return this._showInputError(formElement, inputElement);
    }
    this._hideInputError(formElement, inputElement);
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
        console.log(this._inactiveButtonClass);
        console.log(this._submitButton);
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
      return;
    }
    this._enableSubmitButton(this._submitButton);
  }

  _enableSubmitButton() {
    this._submitButton = this._formElement.querySelector('.modal__save-button');
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }


  _setEventListeners() {
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(
          this._formElement,
          inputElement,
          this._options
        );
        this._toggleButtonState(this._inputList, this._submitButtonSelector);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners(this._formElement, this._options);
  }
}


