export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => handleLikeIcon());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => handleDeleteCard());

    this._element.addEventListener("click", () =>
      this._handleImageClick(this)
    );
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleImageClick() {
    this._imageModalImage.src = this._link;
    this._imageModalImage.alt = this._name;
    this._imageModalCaption.textContent = this._name;
    openModal(imageModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();
  }
}
