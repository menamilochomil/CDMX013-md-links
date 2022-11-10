/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

const getLinks = require('./utils/getLinks.js');
const validateLinks = require('./utils/validateLinks.js');
const getStats = require('./utils/getStats.js');
const getBroken = require('./utils/getBrokenLinks.js');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (options.stats === true && options.validate === true) {
    resolve(getBroken(validateLinks(getLinks(path))));
  } else if (options.validate === true) {
    resolve(validateLinks(getLinks(path)));
  } else if (options.stats === true) {
    resolve(getStats(validateLinks(getLinks(path))));
  } else if (options.validate === false) {
    resolve(getLinks(path));
  } else {
    reject();
  }
});

module.exports = {
  mdLinks,
};

// mdLinks("./md/x.md", { validate: true}).then(console.log)
