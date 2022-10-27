const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
const getBroken = require("./components/getBrokenLinks.js");

const mdLinks = (path, options) => {
  return new Promise (function (resolve, reject) {
    if(options.validate){
      resolve (validateLinks(getLinks(path)).then(console.log))
    }
    if(!options.validate){
      resolve(console.log(getLinks(path)))
    } 
    if(options.stats){
      resolve (getStats(getLinks(path)).then(console.log))
    }
  }
  )
}

module.exports = {
  mdLinks
}

// mdLinks("./md/x.md", { stats: true})