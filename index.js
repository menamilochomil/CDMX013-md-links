const fs = require('fs');

module.exports = (doc) => {
  fs.readFile(doc, "utf8", function (err, data) {
    if(err) {
      return console.log(err);
    }
      return console.log(data);
  });
};
