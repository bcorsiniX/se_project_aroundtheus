export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  // call on page load to render this._items on the page
  renderItems() {
    this._items.forEach((item) => {
      this.addItem(item, "append");
    });
  }
  // take in data, convert the data to html, and place on the page
  addItem(data, method = "prepend") {
    const element = this._renderer(data);
    this._container[method](element);
  }
}

// const cardSection = new Section(
//   { items: initialCards, renderer: () => {} },
//   "#cards-list"
// );

// const messageSection = new Section(
//   { items: initialMessages },
//   "#message-secletor"
// );
