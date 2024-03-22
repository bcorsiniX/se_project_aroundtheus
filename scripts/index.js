const initialCards = [
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

            //VARIABLES

const profileEditButton = document.querySelector('#profile-edit-button');
const profileEditModal = document.querySelector('#profileEditModal');
const profileEditCloseButton = document.querySelector('#profileEditClose-Button');
const profileName = document.querySelector('#profile-name');
const profileDescription = document.querySelector('#profile-description');
const profileNameInput = document.querySelector('#profile-name-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');
const profileEditForm = profileEditModal.querySelector('#modal-form');
const cardTemplate = document.querySelector('#card-template').content.firstElementChild;
const cardListEl = document.querySelector('.card__list');

            //FUNCTIONS
function closePopup() {
  profileEditModal.classList.remove('modal_opened');
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector('.card__image');
  const cardTitleEl = cardTitle.querySelector('.card__title'); 
  
  cardTitleEl.textContent = cardData.name;
  cardImagEl.value = cardData.link;
  return cardElement;
}

            //HANDLERS

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

            //LISTENERS

profileEditButton.addEventListener('click', () => {

    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    profileEditModal.classList.add('modal_opened');
  });

profileEditCloseButton.addEventListener('click', closePopup);


  profileEditForm.addEventListener('submit', handleProfileEditSubmit);


initialCards.forEach((cardData) => {

const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});