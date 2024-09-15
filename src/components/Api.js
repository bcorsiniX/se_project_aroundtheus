export default class Api {
  constructor(options) {
    //add options
  }

  loadPage() {}

  loadUserInfo() {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "61322752-a713-4792-a562-1df58527e066",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => console.log(res));
  }

  getInitialCards() {}
}
