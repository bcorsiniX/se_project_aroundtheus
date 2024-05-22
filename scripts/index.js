//\/\/\/\/\/\/\/\/\/\/\/\/\___VARIABLES___/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

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

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profileEditModal");
const profileEditCloseButton = document.querySelector(
  "#profileEditClose-Button"
);
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
const newPlaceCloseButton = document.querySelector("#newPlaceClose-Button");
const newPlaceModalForm = document.querySelector("#newPlaceModal-form");
const imageModal = document.querySelector("#imageModal");
const imageModalImage = imageModal.querySelector("#modalImage");
const imageModalCaption = imageModal.querySelector("#modalCaption");
const imageModalCloseButton = imageModal.querySelector(
  "#imageModal-closeButton"
);
const closeButtons = document.querySelectorAll(".modal__close-button");

//\/\/\/\/\/\/\/\/\/\/\___FUNCTIONS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

function closeModal(modal) {
  const overlay = document.querySelector("#edit-profile-modal");
  console.log(overlay);
  modal.classList.remove("modal_opened");
  document.removeEventListener("click", handleClickOverlay);
  modal.removeEventListener("keydown", closeModalEsc);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("click", handleClickOverlay);
  document.addEventListener("keydown", closeModalEsc);
}

function handleClickOverlay(e) {
  const modals = [...document.querySelectorAll(".modal")];
  modals.forEach((modal) => {
      if(Array.from(e.target.classList).includes('modal_opened')) {
        closeModal(modal);
      }
  });
}

const closeModalEsc = (event) => {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}


/*function closeModalOnEsc(e) {
  const modals = [...document.querySelectorAll(".modal")];
   modals.forEach((modal) => {
       if (e.key === "Escape") {
         closeModal(modal);
       }
   });
 }*/

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

//\/\/\/\/\/\/\/\/\/\/\/\/\___LISTENERS___/\/\/\/\/\/\/\/\/\/\/\/\/\/\

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

newPlaceButton.addEventListener("click", () => openModal(newPlaceModal));

newPlaceModalForm.addEventListener("submit", handleNewPlaceSubmit);
