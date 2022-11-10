// const fs = require('fs');
// const Path = process.argv[2]
// // module.exports = (doc) => {
// //   fs.readFile(doc, "utf8", function (err, data) {
// //     if(err) {
// //       return console.log(err);
// //     }
// //       return console.log(data);
// //   });
// // };
// const traverseSync = dir => ({
//     path:dir,
//     children: fs.readdirSync(dir).map(file => {
//         const path = Path.join(dir, file);
//         return fs.lstatSync(path).isDirectory()? traverseSync(path): (path)
//     })
// })

// traverseSync("./md"./md)