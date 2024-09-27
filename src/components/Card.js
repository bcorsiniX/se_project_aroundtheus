import Api from "./Api";
export default class Card {
  constructor(cardData, cardSelector, handleImageClick, handleDeleteCardClick) {
    this.name = cardData.name;
    this.link = cardData.link;
    this._id = cardData.id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCardClick(this));

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick(this.name, this.link);
      });
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getId() {
    return this._id;
  }

  // _handleDeleteCard() {
  //   this._element.remove();
  // }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = this.link;
    this._element.querySelector(".card__image").alt = this.name;
    this._element.querySelector(".card__title").textContent = this.name;

    this._setEventListeners();

    return this._element;
  }
}
