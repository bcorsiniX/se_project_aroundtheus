export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._nameElement = document.querySelector(nameSelector);
  }

  getUserInfo() {
    // const userInfo = {};
    // userInfo[this._nameElement.value] = this._nameElement.textContent;
    // userInfo[this._descriptionSelector.value] =
    //   this._descriptionSelector.textContent;
    // return userInfo;
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  setUserInfo(name, description) {
    this._nameElement.textContent = name;
    this._descriptionElement = description;
  }
}

// userInfo.setInfo('Janet', "Chef")
