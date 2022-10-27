#!/usr/bin/env node
const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
const getBroken = require("./components/getBrokenLinks.js");
const args = process.argv;
const path = process.argv[2];

//  let arr = getLinks(path);
// // let arr2 = ["oK", "OK"]
// // let arr2 = arr.map((i)=> i.href)

//Cases
/*
function cli (path, option) {
    if(!option[3]){
        console.log(getLinks(path))
     }
     
    if (option[3] === "--validate"){
       validateLinks(getLinks(path))
    }
    
    if(option[3] === "--stats"){
        console.log("aiuda")
        // console.log(getStats(validateLinks(getLinks(path))))
    } 
    if(option[3] === "--stats" && option[4] === "--validate"){
        console.log({
            "total": 3,
            "Unique": 3,
            "broken": 1
        })
    }
}

cli(path, option)
*/

if(args[3] === undefined){
    console.log(getLinks(path))
 }
 
if (args[3] === "--validate"){
   validateLinks(getLinks(path)).then(console.log)
}

if(args[3] === "--stats" && args[4] === undefined){
    // console.log("aiuda")
    getStats(validateLinks(getLinks(path)))
} 
if(args[3] === "--stats" && args[4] === "--validate"){
    getBroken(validateLinks(getLinks(path)))
}
// validateLinks(getLinks(path)).then(console.log)

// getStats(validateLinks(getLinks(path)))