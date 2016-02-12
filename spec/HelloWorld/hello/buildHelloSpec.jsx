import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from "chai";

import { MockHelloService } from "spec/mock/HelloWorld/hello/MockHelloService";
import { buildHello } from "src/HelloWorld/hello/buildHello";

describe("buildHello", () => {
  describe("build", () => {
    it("sets the helloService as the provided helloService dependency", () => {
      let helloService = new MockHelloService();
      let Hello = buildHello({helloService: helloService});
      expect(new Hello({}).helloService).to.equal(helloService);
    });
  });

  describe("Hello", () => {
    var helloService;
    var Hello;

    beforeEach(() => {
      helloService = new MockHelloService();
      Hello = buildHello({helloService: helloService});
    });

    describe("#render", () => {
      it("sets the state's name to the provided name prop", () => {
        const NAME = "Foo";
        let hello = new Hello({name: NAME});
        expect(hello.state.name).to.equal(NAME);
      });

      it("sets the text of the 'greeting' to greet the provided name", () => {
        let hello = TestUtils.renderIntoDocument(<Hello name={"Foo"} />);
        expect(hello.refs.greeting.innerText).to.equal("Hello Foo");
      })
    });

    describe("'inputName'", () => {
      describe("#onChange", () => {
        it("sets the values of the 'greeting' to the returned name from the hello service", () => {
          let hello = TestUtils.renderIntoDocument(<Hello name={"Foo"} />);
          helloService.setName("Bar");
          TestUtils.Simulate.change(hello.refs.inputName);
          expect(hello.refs.greeting.innerText).to.equal("Hello Bar");
        });
      });
    });
  });
});
