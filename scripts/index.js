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

const profileEditButton = document.querySelector('#profile-edit-button');
const profileEditModal = document.querySelector('#profileEditModal');
const profileEditCloseButton = document.querySelector('#profileEditClose-Button');
const profileName = document.querySelector('#profile-name');
const profileDescription = document.querySelector('#profile-description');
const profileNameInput = document.querySelector('#profile-name-input');
const profileDescriptionInput = document.querySelector('#profile-description-input');


profileEditButton.addEventListener('click', function () {

  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add('modal_opened');
})

profileEditCloseButton.addEventListener('click', function () {
 
  profileEditModal.classList.remove('modal_opened');
})

function handleProfileFormSubmit(evt) {
  profileEditForm = profileEditModal.querySelector('#modal-form');
  evt.preventDefault();

}



