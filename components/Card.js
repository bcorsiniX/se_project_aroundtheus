export default class Card {
    constructor({ name, link }) {
        this.name = name;
    }

    testMethod() {
        console.log(this.name);
    }
}