var mocha   = require("mocha");
var assert  = require("assert");
var updater = require("../index.js");
var package = require("../package.json");

describe("getting a version", function() {
  it("should find the version of this app", function(done) {
    updater("updater", function(err, d) {
      assert.equal(package.version, d);
      done();
    });
  });

  it("should not bomb when it does not find the package", function(done) {
    updater("1223123213updat12321er", function(err, d) {
      assert.equal('E404', err.code);
      done();
    });
  });
});
