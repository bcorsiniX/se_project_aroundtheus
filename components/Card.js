export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this.name = data.name;
    this.link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () =>  this._handleLikeIcon());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard());

    this._element.querySelector(".card__image").addEventListener("click", () => this._handleImageClick(this));
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__like-button').classList.toggle("card__like-button_active");
  }
  
  _handleDeleteCard() {
    this._element.remove();
  }
 
  _getTemplate() {
    return document
      .querySelector('#card-template')
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(
      ".card__image"
    ).src = this.link;
    this._element.querySelector(".card__title").textContent = this.name;

    this._setEventListeners();

    return this._element;
  }
}
