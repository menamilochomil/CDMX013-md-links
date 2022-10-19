#!/usr/bin/env node
const myModule = require("./components/getLinks.js");
let doc = process.argv[2];


myModule(doc)
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