import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }, handleConfirmDeleteSubmit) {
    super({ popupSelector });
    this._confirmButton = document.querySelector(
      ".modal__save-button_confirmation"
    );
    this._handleConfirmDeleteSubmit = handleConfirmDeleteSubmit;
  }

  setEventListeners() {
    this._confirmButton.setEventListener("click", (e) => {
      e.preventDefault();
      this._handleConfirmDeleteSubmit();
    });
    super.setEventListeners();
  }
}
