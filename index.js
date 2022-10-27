const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
// const getBroken = require("./components/getBrokenLinks.js");

const mdLinks = (path, options) => {
  return new Promise (function (resolve, reject) {
    if(options.validate === true){
      resolve (validateLinks(getLinks(path)).then(console.log))
    }
    else if (options.validate === false){
      resolve(console.log(getLinks(path)))
    } 
    else if (options.stats === true){
      let arr = validateLinks(getLinks(path))
      resolve  (getStats(arr))
    }
    else{
      reject()
    }
  }  
  )
}

// module.exports = {
//   mdLinks
// }

mdLinks("./md/x.md", { validate: true})