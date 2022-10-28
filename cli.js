#!/usr/bin/env node
const args = process.argv;
const route = process.argv[2];
const {mdLinks} = require("./index.js");
const chalk = require("chalk")

const cli = (path, option) => {
   if(path === undefined ) {
    console.log(chalk.red("Please, enter a path valid"))   
   }
   else if(option[3] === undefined){
      return mdLinks(path, {validate: false}).then(res => {
         res.map((item)=>{
            console.log(chalk.hex("#27F7E7")(
            `href: ${item.href}
text: ${item.text}
file: ${item.file}
`))
               })
      })
   }
   else if(option[3] === "--validate"){
      // console.log("holi")
      return mdLinks(path, {validate: true}).then(res => {
         res.map(item => {
         console.log(item.file,item.href,chalk.hex("#2728F7")(item.statusText, item.status), item.text )
               })
      })
   }
   else if(option[3] === "--stats" && option[4] === undefined){
      return mdLinks(path, {stats: true})
   }
   else if(option[3] === "--stats" && option[4] === "--validate"){
      return mdLinks(path, {stats: true, validate: true})
   }
   
}
cli(route, args)
