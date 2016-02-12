export class MockHelloService {
  constructor() {
    this.name = "";
  }

  setName(name) {
    this.name = name;
  }

  updateName(name) {
    return this;
  }

  then(callback) {
    callback(this.name);
  }
}
