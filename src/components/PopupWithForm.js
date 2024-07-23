import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupElement;
    this._handleFormSubmit(inputData) = handleFormSubmit;
  }

  _getInputValues() {
    const inputValues = document.querySelectorAll(".modal__input");
    const inputData = {};
    inputValues.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  setEventListeners() {
    document
      .querySelectorAll(".modal__save-button")
      .addEventListener("submit", this._handleFormSubmit(inputData));
    super.setEventListeners();
  }
}

