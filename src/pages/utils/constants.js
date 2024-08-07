import FormValidator from "../../components/FormValidator";
import PopupWithForm from "../../components/PopupWithForm";
import PopupWithImage from "../../components/PopupWithImage";
import UserInfo from "../../components/UserInfo";
import Section from "../../components/Section";
import "../index.js";

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
const profileEditForm = document.forms["#modal-form"];
const newPlaceButton = document.querySelector("#newPlaceButton");
const newPlaceModalForm = document.forms["#newPlaceModal-form"];
const imageModal = document.querySelector("#imageModal");

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

const enableValidator = (options) => {
  const formValidators = {};
  const formList = [...document.querySelectorAll(options.formSelector)];
  formList.forEach((formElement) => {
    const validator = new FormValidator(options, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidator();
  });
};
