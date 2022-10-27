#!/usr/bin/env node
const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const getStats = require("./components/getStats.js");
const getBroken = require("./components/getBrokenLinks.js");
const args = process.argv;
const route = process.argv[2];
// const mdLinks = require("./index.js");

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
cli(route, args)


//Tratando de usar mdLinks
// const cli = (path, option) => {
//    if(option === undefined){
//       // console.log("holi")
//       return mdLinks(path, {validate: false}).then(res => {
//          return res.map(item => {
//             (`
//         href: ${item.href}
//         text: ${item.text}
//         file: ${item.file}
//                 `)
//                })
//       })
//    }
// }
// cli(route, args).then(res => console.log(res))
// mdLinks("./md/x.md", { validate: false}).then(console.log)