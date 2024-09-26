import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import "./index.css";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import {
  cardData,
  options,
  profileEditButton,
  profileEditForm,
  newPlaceButton,
  newPlaceModalForm,
  profileNameInput,
  profileDescriptionInput,
} from "../pages/utils/constants.js";
import Api from "../components/Api.js";

// fetch("https://around-api.en.tripleten-services.com/v1/cards", {
//   headers: {
//     authorization: "00206656-b2a6-4caa-be64-3fba7b3497b8",
//   },
// })
//   .then((res) => {
//     res.ok ? res.json() : Promise.reject;
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(`YOU DID IT WRONG: ${err.status}`));

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  authToken: "00206656-b2a6-4caa-be64-3fba7b3497b8",
});

const cardSection = new Section(
  { items: cardData, renderer: renderCard },
  "#cards-list"
);

api.getInitialCards().then((res) => {
  cardSection.renderItems(res);
});
api.getUserInfo().then();

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

function handleDeleteCardClick() {
  api.deleteCard(card.getId);
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
