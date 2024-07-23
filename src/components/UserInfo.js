export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo[this._nameSelector.value] = this._nameSelector.textContent;
    userInfo[this._descriptionSelector.value] =
      this._descriptionSelector.textContent;
    return userInfo;
  }

  setUserInfo() {
    this._nameSelector.textContent = this._nameSelector.value;
    this._descriptionSelector.textContent = this._descriptionSelector.value;
  }
}
