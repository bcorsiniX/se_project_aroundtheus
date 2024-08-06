import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector }, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
  }

  _getInputValues() {
    const inputData = {};
    const inputValues = this._form.querySelectorAll(".modal__input");
    inputValues.forEach((input) => {
      inputData[input.name] = input.value;
    });
    return inputData;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
    });
    super.setEventListeners();
  }
}
