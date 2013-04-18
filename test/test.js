var mocha   = require("mocha");
var assert  = require("assert");
var updater = require("../index.js");
var package = require("../package.json");

describe("getting a version", function() {
  it("should fine the version of this app", function(done) {
    updater("updater", function(err, d) {
      assert.equal("0.0.0", d);
      done();
    });
  });
});
