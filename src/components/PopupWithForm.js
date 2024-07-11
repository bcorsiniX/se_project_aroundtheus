import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupElement;
    this._handleFormSubmit = handleFormSubmit;
  }
}
