//Require filesystem module to read the files
const fs = require('fs');
// const path = require('path');

//Require marked and cheerio library to transform the file into a HTML and manipulate the DOM
const cheerio = require('cheerio');
const marked = require('marked');

module.exports = (doc) => {
let arrLinks =[]

//Read the file
const data = fs.readFileSync(doc, 'utf8')
//Become data in HTML and replace titles like <a href="#9-checklist">
const dataHTML = marked.parse(data).replace(/<a href="#\d+-\D+">\d+. \D+<\/a>/g,"I replace #titles of md");
const $ = cheerio.load(dataHTML);

$('a').each((i, link) => {
    arrLinks[i]= {
        href: link.attribs.href,
        text: $(link).text(),
        file: doc
    }
})

return arrLinks
}