#!/usr/bin/env node
const getLinks = require("./components/getLinks.js");
const validateLinks = require("./components/validateLinks.js");
const doc = process.argv[2];

let arr = getLinks(doc)
// let arr2 = arr.map((i)=> i.href)
validateLinks(arr, doc, `holis`)
// let directory = process.argv[2]  
// let ext = process.argv[3];

// myModule(directory, ext, function(err, files) {
//     if (err) {
//         return console.error('error:', err);
//     }
    
//     files.forEach(function(file) {
//         console.log(file);
//     });
// });
// // C:/Users/jimel/OneDrive/Escritorio/Laboratoria