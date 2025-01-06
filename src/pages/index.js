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
  updateAvatarForm,
} from "../pages/utils/constants.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  authToken: "b9cb702e-163c-48e3-b3a3-87283a0a78b9",
});

function changeButtonText() {
  document
    .querySelector(".modal__save-button")
    .addEventListener("click", () => {
      this.textContent = "Saving...";
    });
}

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

api.getInitialCards().then((cards) => {
  cardSection = new Section(
    { items: cards, renderer: renderCard },
    "#cards-list"
  );
  cardSection.renderItems(cards);
});

api.getUserInfo().then((info) => {
  userInfo.setUserInfo({ title: info.name, description: info.about });
});

function handleDeleteCardClick(card) {
  api.deleteCard(card.getId(card));
}

function handleNewPlaceSubmit(inputValues) {
  const cardData = { name: inputValues.title, link: inputValues.link };
  api
    .addCard(cardData)
    .then((newCard) => {
      renderCard(newCard);
      newCardPopup.close();
    })
    .catch((error) => console.error(error));
}

function handleProfileEditSubmit(inputValues) {
  api
    .editUserInfo({ name: inputValues.title, about: inputValues.description })
    .then((userData) => {
      userInfo.setUserInfo(inputValues);
      editProfilePopup.close();
    })
    .catch((err) => console.error(err));
}

function handleUpdateAvatarSubmit(inputValues) {
  changeButtonText();
  const avatar = inputValues.avatarLink;
  api
    .updateAvatar(avatar)
    .then((data) => {
      const profileImage = document.querySelector(".profile__image");
      profileImage.src = data.avatar;
      updateAvatarPopup.close();
    })
    .catch((err) => console.error(err));
}

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

const updateAvatarPopup = new PopupWithForm(
  {
    popupSelector: "#updateAvatarModal",
  },
  handleUpdateAvatarSubmit
);

const popupWithImage = new PopupWithImage({ popupSelector: "#imageModal" });

const editFormValidator = new FormValidator(options, profileEditForm);
const addFormValidator = new FormValidator(options, newPlaceModalForm);
const AvatarFormValidator = new FormValidator(options, updateAvatarForm);

const userInfo = new UserInfo({
  nameSelector: "#profile-name",
  descriptionSelector: "#profile-description",
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();
AvatarFormValidator.enableValidation();

popupWithImage.setEventListeners();
editProfilePopup.setEventListeners();
newCardPopup.setEventListeners();
updateAvatarPopup.setEventListeners();

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

updateAvatarButton.addEventListener("click", () => {
  updateAvatarPopup.open();
});
