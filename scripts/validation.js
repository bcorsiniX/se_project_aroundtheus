// enabling validation by calling enableValidation()
// pass all the settings on call

const setEventListeners = (form, config) => {
    const {inputSelector} = config;
    inputList = [...form.querySelectorAll(inputSelector)];
    console.log(inputList);

}

const enableValidation = (options) => {
    const formList = [...document.querySelectorAll(options.formSelector)];
    console.log(options);
    formList.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, options);
    
    });
}

const config = {
    formSelector: ".modal",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  };

  console.log(config);
  console.log("HELLO");