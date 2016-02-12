import { expect } from "chai";
import { HelloService } from "src/HelloWorld/hello/HelloService";

describe("HelloService", () => {
  describe("#updateName", () => {
    it("returns a promise that resolves the value from the provided event", () => {
      const NAME = "name";
      let mockEvent = { target: { value: NAME } };
      let helloService = new HelloService();

      let promise = helloService.updateName(mockEvent)

      promise.then(name => { expect(name).to.equal(NAME) });
    });
  });
});
