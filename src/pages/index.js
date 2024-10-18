import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import "./index.css";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import {
  initialCards,
  options,
  profileEditButton,
  profileEditForm,
  newPlaceButton,
  newPlaceModalForm,
  profileNameInput,
  profileDescriptionInput,
} from "../pages/utils/constants.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  authToken: "b9cb702e-163c-48e3-b3a3-87283a0a78b9",
});

function renderCard(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick,
    handleDeleteCardClick
  ).getView();
  cardSection.addItem(card);
  return card;
}

let cardSection;

//getting cards from the server
api.getInitialCards().then((cards) => {
  cardSection = new Section(
    { items: cards, renderer: renderCard },
    "#cards-list"
  );
  //placing the cards on the DOM
  cardSection.renderItems(cards);
});

//const nameEl = document.querySelector("#profile-name");

//getting the userinfo from the server
api.getUserInfo().then((info) => {
  //setting the user info on the DOM
  userInfo.setUserInfo({ title: info.name, description: info.about });
});

function handleDeleteCardClick(card) {
  api.deleteCard(card.getId());
}

function handleNewPlaceSubmit(inputValues) {
  const cardData = { name: inputValues.title, link: inputValues.link };
  renderCard(cardData);
  api.addCard(cardData).then(cardData);
  newCardPopup.close();
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  editProfilePopup.close();
}

// function handleNewPlaceSubmit(inputValues) {
//   api.addCard(cardData).then((cardData) => {
//     const cardData = { name: inputValues.title, link: inputValues.link };
//     renderCard(cardData);
//     newCardPopup.close();
//   });
// }

function handleImageClick(name, link) {
  popupWithImage.open(name, link);
}

const editProfilePopup = new PopupWithForm(
  {
    popupSelector: "#profileEditModal",
  },
  handleProfileEditSubmit
);

const newCardPopup = new PopupWithForm(
  {
    popupSelector: "#newPlaceModal",
  },
  handleNewPlaceSubmit
);

const editFormValidator = new FormValidator(options, profileEditForm);
const addFormValidator = new FormValidator(options, newPlaceModalForm);
const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  descriptionSelector: "#profile-description",
});

const popupWithImage = new PopupWithImage({ popupSelector: "#imageModal" });

editFormValidator.enableValidation();

addFormValidator.enableValidation();

popupWithImage.setEventListeners();

editProfilePopup.setEventListeners();

newCardPopup.setEventListeners();

newPlaceButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();
});

profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileNameInput.value = userData.name;
  profileDescriptionInput.value = userData.description;
  editProfilePopup.open();
});
