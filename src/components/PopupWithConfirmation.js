import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }, handleConfirmDeleteSubmit) {
    super({ popupSelector });
    this._confirmButton = document.querySelector(
      ".modal__save-button_confirmation"
    );
  }

  setSubmitAction(deleteCard) {
    this._handleConfirmDeleteSubmit = deleteCard;
  }

  setEventListeners() {
    this._confirmButton.addEventListener("click", (e) => {
      e.preventDefault();
      this._handleConfirmDeleteSubmit();
    });
    super.setEventListeners();
  }
}
