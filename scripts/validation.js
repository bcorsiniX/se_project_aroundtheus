
function setEventListeners (form, options) {
    const {inputSelector} = options;
    inputList = [...form.querySelectorAll(inputSelector)];
    inputList.addEventListener('input', (evt) => {
     console.log(evt);
    });
}

const enableValidation = (options) => {
    const formList = [...document.querySelectorAll(options.formSelector)];
    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, options);
    
    });
}

const options = {
    formSelector: ".modal",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };

enableValidation(options);
setEventListeneres(form, inputList, options);