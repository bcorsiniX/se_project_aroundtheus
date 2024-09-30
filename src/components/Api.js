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

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => {
        return res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! try again ${err}`));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.ok ? res.json : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => console.error(`OOPS! try again: ${err}`));
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! try again: ${err}`));
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! try again: ${err}`));
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
      .catch((err) => console.error(`OOPS! try again ${err}`));
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => {
        return res.ok ? res.json : Promise.reject(`ERROR: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! try again ${err}`));
  }

  updateProfilePic() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
      },
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) => {
        return res.ok ? res.json : Promise.reject(`ERROR: ${res.status}`);
      })
      .catch((err) => console.error(`OOPS! try again ${err}`));
  }
}
