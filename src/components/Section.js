export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(item, "append");
    });
  }

  addItem(data, method = "prepend") {
    const element = this._renderer(data);
    this._container[method](element);
  }
}
