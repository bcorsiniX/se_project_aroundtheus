export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("click", this._handleClickOverlay);
    document.addEventListener("keydown", this._closeModalEsc);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("click", this._handleClickOverlay);
    document.removeEventListener("keydown", this._closeModalEsc);
  }

  _closeModalEsc = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  _handleClickOverlay = (e) => {
    if (e.target === this._popupElement) {
      this.close();
    }
  };

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
  }
}
