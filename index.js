const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
const getBroken = require("./components/getBrokenLinks.js");

const mdLinks = (path, options) => {
  return new Promise (function (resolve, reject) {
    if (options.stats === true && options.validate === true){
      resolve (getBroken(validateLinks(getLinks(path))))
    }
    else if(options.validate === true){
      resolve (validateLinks(getLinks(path)))
    }
    else if (options.stats === true ){
      resolve  (getStats(validateLinks(getLinks(path))))
    }
    else if (options.validate === false){
      resolve (getLinks(path))
    }    
    else{
      reject()
    }
  })
}

module.exports = {
  mdLinks
}

// mdLinks("./md/x.md", { validate: true}).then(console.log)