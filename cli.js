#!/usr/bin/env node
const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
const getBroken = require("./components/getBrokenLinks.js");
const args = process.argv;
const path = process.argv[2];

const cli = (path, option) => {
 if(option[3] === undefined){
    getLinks(path).map((item)=>{
    console.log(`
href: ${item.href}
text: ${item.text}
file: ${item.file}
        `)
       })
 }
    
 if (option[3] === "--validate"){
    validateLinks(getLinks(path)).then((res) => res.map((item) =>
    {console.log(`${item.file} ${item.href} ${item.statusText} ${item.status} ${item.text}`)
    }))
 }

 if(option[3] === "--stats" && option[4] === undefined){
    getStats(validateLinks(getLinks(path)))
 } 

 if(option[3] === "--stats" && option[4] === "--validate"){
    getBroken(validateLinks(getLinks(path)))
 }
}

cli(path, args)
