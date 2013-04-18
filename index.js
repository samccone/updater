var npm = require("npm");

module.exports = function(packageName, cb) {
  npm.load({}, function() {
    npm.commands.show([packageName, "version"], function(err, d) {
      if (err) {
        cb(err, null);
      } else {
        cb(null, Object.keys(d)[0]);
      }
    });
  });
}
