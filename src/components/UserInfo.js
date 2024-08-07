export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
    this._nameInput = document.querySelector("#profile-name-input");
    this._descriptionInput = document.querySelector(
      "#profile-description-input"
    );
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  setUserInfo(name, description) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
  }
}
