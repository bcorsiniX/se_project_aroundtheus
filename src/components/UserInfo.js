export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement,
      description: this._descriptionElement,
    };
  }

  setUserInfo(userData) {
    this._nameElement.textContent = userData.name;
    this._descriptionElement.textContent = userData.description;
  }
}
