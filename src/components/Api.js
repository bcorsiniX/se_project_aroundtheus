export default class Api {
  constructor(options) {
    this._baseUrl = "https://around-api.en.tripleten-services.com/v1";
    this._authToken = "00206656-b2a6-4caa-be64-3fba7b3497b8";
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! TRY AGAIN ${err}`));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) => {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! TRY AGAIN ${err}`));
  }
}
