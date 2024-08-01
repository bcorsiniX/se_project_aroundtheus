import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import "../pages/index.css";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";

//\/\/\/\/\/\/\/\/\/\/\/\/\___VARIABLES___/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

const cardData = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profileEditModal");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = document.querySelector("#modal-form");
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

const modals = [...document.querySelectorAll(".modal")];

/*function handleClickOverlay(e) {
  if (Array.from(e.target.classList).includes("modal_opened")) {
    modals.forEach(closeModal);
  }
}*/

/*const closeModalEsc = (event) => {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
};*/

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick).getView();
  return card;
}

const cardSection = new Section(
  { items: cardData, renderer: renderCard },
  "#cards-list"
);

const editProfilePopup = new PopupWithForm(
  {
    popupSelector: "#profileEditModal",
  },
  handleProfileEditSubmit
);

//\/\/\/\/\/\/\/\/\/\/\/\___HANDLERS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\

function handleProfileEditSubmit() {
  // profileName.textContent = profileNameInput.value;
  // profileDescription.textContent = profileDescriptionInput.value;
  userInfo.setUserInfo();
  editProfilePopup.close();
}

function handleNewPlaceSubmit(inputValues) {
  const cardData = { name: inputValues.name, link: inputValues.link };
  renderCard(cardData);
  cardSection.addItem();
  newCardPopup.close();
  newCardPopup.reset();
}

function handleImageClick(name, link) {
  popupWithImage.open(name, link);
}

//\/\/\/\/\/\/\/\/\/\/\/\/\___LISTENERS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\

profileEditButton.addEventListener("click", () => {
  // profileNameInput.value = profileName.textContent;
  // profileDescriptionInput.value = profileDescription.textContent;
  userInfo.getUserInfo();
  editProfilePopup.open();
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// initialCards.forEach((cardData) => {
//   renderCard(cardData);
// });
cardSection.renderItems();

newPlaceButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();
});

newPlaceModalForm.addEventListener("submit", (e) => {
  handleNewPlaceSubmit(e);
  addFormValidator.disableSubmitButton();
});

const editFormValidator = new FormValidator(options, profileEditForm);
const addFormValidator = new FormValidator(options, newPlaceModalForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  descriptionSelector: "#profile-description",
});

const popupWithImage = new PopupWithImage({ popupSelector: "#imageModal" });
popupWithImage.setEventListeners();

const newCardPopup = new PopupWithForm(
  {
    popupSelector: "#newPlaceModal",
  },
  handleNewPlaceSubmit
);

editProfilePopup.setEventListeners();
newCardPopup.setEventListeners();
