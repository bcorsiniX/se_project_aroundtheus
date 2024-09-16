export default class Api {
  constructor(options) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) => {
        res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
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
        res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! TRY AGAIN ${err}`));
  }
}
