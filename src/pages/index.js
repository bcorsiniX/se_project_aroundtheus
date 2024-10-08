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

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick).getView();
  cardSection.addItem(card);
  return card;
}

function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  editProfilePopup.close();
}

function handleNewPlaceSubmit(inputValues) {
  const cardData = { name: inputValues.title, link: inputValues.link };
  renderCard(cardData);
  newCardPopup.close();
}

function handleImageClick(name, link) {
  popupWithImage.open(name, link);
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

const editFormValidator = new FormValidator(options, profileEditForm);
const addFormValidator = new FormValidator(options, newPlaceModalForm);
const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  descriptionSelector: "#profile-description",
});

const popupWithImage = new PopupWithImage({ popupSelector: "#imageModal" });
const newCardPopup = new PopupWithForm(
  {
    popupSelector: "#newPlaceModal",
  },
  handleNewPlaceSubmit
);

cardSection.renderItems();

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
