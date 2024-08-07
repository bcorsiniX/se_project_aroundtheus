import FormValidator from "../components/FormValidator";
import Card from "../components/Card";
import "../pages/index.css";
import Section from "../components/Section";
import UserInfo from "../components/UserInfo";
import PopupWithForm from "../components/PopupWithForm";
import PopupWithImage from "../components/PopupWithImage";
import "../pages/utils/constants";

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick).getView();
  cardSection.addItem(card);
  return card;
}

function handleProfileEditSubmit() {
  userInfo.setUserInfo();
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

cardSection.renderItems();

editFormValidator.enableValidation();

addFormValidator.enableValidation();

enableValidator(options);

formValidators["profileForm"].resetValidation();

formValidators["newPlaceModalForm"].resetValidation();

popupWithImage.setEventListeners();

editProfilePopup.setEventListeners();

newCardPopup.setEventListeners();

newPlaceButton.addEventListener("click", () => {
  newCardPopup.open();
  addFormValidator.toggleButtonState();
});

profileEditButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  editProfilePopup.open();
});
