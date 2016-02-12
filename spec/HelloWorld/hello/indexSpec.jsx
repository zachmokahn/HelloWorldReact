import { expect } from 'chai';

import { buildHello } from 'src/HelloWorld/hello/buildHello';
import { HelloService } from 'src/HelloWorld/hello/HelloService';
import * as Index from 'src/HelloWorld/hello';

describe("Hello/index", () => {
  describe("buildHello", () => {
    it("exports buildHello in the index file", () => {
      expect(buildHello).to.equal(Index.buildHello);
    });
  });

  describe("HelloService", () => {
    it("exports HelloService in the index file", () => {
      expect(HelloService).to.equal(Index.HelloService);
    });
  });
});
