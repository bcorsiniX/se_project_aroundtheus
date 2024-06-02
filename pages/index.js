import FormValidator from '/components/FormValidator.js';
import Card from '/components/Card.js';

//\/\/\/\/\/\/\/\/\/\/\/\/\___VARIABLES___/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
const cardSelector = document.querySelector('#card-template');


//const initialCards
const cardData1 = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
}
const card1 = new Card(cardData1, cardSelector, handleImageClick).getView();

const cardData2 =  {
  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
}
const card2 = new Card(cardData2, cardSelector, handleImageClick);

const cardData3 = {
  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
}
const card3 = new Card(cardData3, cardSelector, handleImageClick);

const cardData4 = {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
}
const card4 = new Card(cardData4, cardSelector, handleImageClick);

const cardData5 = {
  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
}
const card5 = new Card(cardData5, cardSelector, handleImageClick);

const cardData6 = {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
}
const card6 = new Card(cardData6, cardSelector, handleImageClick);







const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profileEditModal");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = document.querySelector("#modal-form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardsListEl = document.querySelector("#cards-list");
const newPlaceButton = document.querySelector("#newPlaceButton");
const newPlaceModal = document.querySelector("#newPlaceModal");
const newPlaceTitleInput = document.querySelector("#newPlaceTitle-input");
const newPlaceImageURLInput = document.querySelector("#newPlaceImageURL-input");
const newPlaceModalForm = document.querySelector("#newPlaceModal-form");
const imageModal = document.querySelector("#imageModal");
const imageModalImage = imageModal.querySelector("#modalImage");
const imageModalCaption = imageModal.querySelector("#modalCaption");
const closeButtons = document.querySelectorAll(".modal__close-button");
//\/\/\/\/\/\/\/\/\/\/\___FUNCTIONS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("click", handleClickOverlay);
  document.removeEventListener("keydown", closeModalEsc);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("click", handleClickOverlay);
  document.addEventListener("keydown", closeModalEsc);
}

const modals = [...document.querySelectorAll(".modal")];

function handleClickOverlay(e) {
  if (Array.from(e.target.classList).includes("modal_opened")) {
    modals.forEach(closeModal);
  }
}

const closeModalEsc = (event) => {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
};

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector("#card-image");
  const cardTitleEl = cardElement.querySelector("#card-title");
  const likeButton = cardElement.querySelector("#card-likeButton");
  const deleteButton = cardElement.querySelector("#card-deleteButton");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  cardImageEl.addEventListener("click", () => {
    imageModalImage.src = cardData.link;
    imageModalImage.alt = cardData.name;
    imageModalCaption.textContent = cardData.name;
    openModal(imageModal);
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(item, method = "prepend") {
    //const card = new Card(data, cardSelector, handleImageClick).getView()
  const cardElement = getCardElement(item);
  cardsListEl[method](cardElement);
}

//\/\/\/\/\/\/\/\/\/\/\/\___HANDLERS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\


function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleNewPlaceSubmit(e) {
  e.preventDefault();
  const name = newPlaceTitleInput.value;
  const link = newPlaceImageURLInput.value;
  const cardData = { name, link };
  renderCard(cardData);
  closeModal(newPlaceModal);
  newPlaceModalForm.reset();
}

function handleImageClick(cardData) {
  imageModalImage.src = cardData.link;
  imageModalImage.alt = cardData.name;
  imageModalCaption.textContent = cardData.name;
  openModal(imageModal);
}

//\/\/\/\/\/\/\/\/\/\/\/\/\___LISTENERS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

/*initialCards.forEach((cardData) => {
  renderCard(cardData);
});*/

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

newPlaceButton.addEventListener("click", () => openModal(newPlaceModal));

newPlaceModalForm.addEventListener("submit", handleNewPlaceSubmit);


const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormElement = profileEditModal.querySelector('#modal-form');
const addFormElement = newPlaceModal.querySelector('#newPlaceModal-form');

const editFormValidator = new FormValidator (options, editFormElement);
const addFormValidator = new FormValidator (options, addFormElement);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
