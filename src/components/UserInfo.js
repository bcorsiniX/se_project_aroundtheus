export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent.trim(),
      description: this._descriptionElement.textContent.trim(),
    };
  }

  setUserInfo(userData) {
    this._nameElement.textContent = userData.title;
    this._descriptionElement.textContent = userData.description;
  }
}
