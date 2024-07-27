import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupElement;
    this._handleFormSubmit = handleFormSubmit;
    this._inputData = {};
  }

  _getInputValues() {
    const inputValues = document.querySelectorAll(".modal__input");
    inputValues.forEach((input) => {
      this._inputData[input.name] = input.value;
    });
    return this._inputData;
  }

  setEventListeners() {
    document
      .querySelectorAll(".modal__save-button")
      .addEventListener("submit", this._handleFormSubmit(this._inputData));
    super.setEventListeners();
  }
}
