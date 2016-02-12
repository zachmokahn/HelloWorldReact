export class HelloService {
  updateName(event) {
    return new Promise(resolve => {
      resolve(event.target.value)
    });
  }
}
