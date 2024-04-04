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
const cardsListEl = document.querySelector('#cards-list');
const newPlaceButton = document.querySelector('#newPlaceButton');
const newPlaceModal = document.querySelector('#newPlaceModal');
const newPlaceTitleInput = document.querySelector('#newPlaceTitle-input');
const newPlaceImageURLInput = document.querySelector('#newPlaceImageURL-input');
const newPlaceCloseButton = document.querySelector('#newPlaceClose-Button');
const newPlaceModalForm = newPlaceModal.querySelector('#newPlaceModal-form');

//FUNCTIONS
function closeModal(modal) {
  modal.classList.remove('modal_opened');
}

function openModal(modal) {
  modal.classList.add('modal_opened');
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector('.card__image');
  const cardTitleEl = cardElement.querySelector('.card__title'); 
  const likeButton = cardElement.querySelectorAll('.card__like-button');

    likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  });
 
 
  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;



return cardElement;
}

            //HANDLERS

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
  const cardElement = getCardElement({
    name,
    link,
  });
  cardsListEl.prepend(cardElement);
  closeModal(newPlaceModal);
}

            //LISTENERS

profileEditButton.addEventListener('click', () => {

    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    openModal(profileEditModal);
  });

profileEditCloseButton.addEventListener('click', () => closeModal(profileEditModal));


  profileEditForm.addEventListener('submit', handleProfileEditSubmit);


initialCards.forEach((cardData) => {

const cardElement = getCardElement(cardData);
  cardsListEl.prepend(cardElement);
});

newPlaceButton.addEventListener('click', () => openModal(newPlaceModal));

newPlaceCloseButton.addEventListener('click', () => closeModal(newPlaceModal));

newPlaceModalForm.addEventListener('submit', handleNewPlaceSubmit);



