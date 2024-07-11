export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("click", handleClickOverlay);
    document.addEventListener("keydown", closeModalEsc);
  }

  close() {}

  _handleEscClose() {}

  setEventListeners() {}
}
