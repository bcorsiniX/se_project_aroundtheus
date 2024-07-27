export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("click", handleClickOverlay);
    document.addEventListener("keydown", closeModalEsc);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("click", handleClickOverlay);
    document.removeEventListener("keydown", closeModalEsc);
  }

  _closeModalEsc(e) {
    if (e.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closeModal(openedModal);
    }
  }

  _handleClickOverlay(e) {
    if (Array.from(e.target.classList).includes("modal_opened")) {
      modals.forEach(closeModal);
    }
  }

  setEventListeners() {
    document
      .querySelector(".modal__close-button")
      .addEventListener("click", () => this.close);
  }
}
