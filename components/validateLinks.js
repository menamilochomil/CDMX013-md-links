/*
1. Importar axios
2. Usar axios para hacer una petición a internet  (axios.get())
3. Axios verifica el estado del link
4. Resolver la promesa con un console de la respuesta de internet
5. Buscar dentro de esa nueva data la información de la petición que necesitamos
6. Mapear esa info para su impresión en la terminal
7. Muestra la ruta, el link, ok|fail, estado y texto:
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
8. Modularizar el código obtenido (usa un parámetro al principio para que reciba la info de arrLinks)
*/
const fetch = require("node-fetch")

// const lista = [1,2,3]

// const newLista = lista.map((numero)=>{
//   const promesa = new Promise((resolve,reject)=>{})
//   return promesa
//   // console.log(numero)
// })

// console.log(Promise.all(newLista).then(resultado=>console.log('resultado,', resultado)))

// module.exports = (data, doc, text) => {
// data.forEach((i) => {
//     fetch(i)
//     .then((response) => {
//      console.log(doc, response.url, response.statusText, response.status, text)
//     // console.log(response)
//     })
//     .catch(function (err) {
//       console.log(`We have a problem with your url, please check this ${err}`);
//     });
// })
// }
module.exports = (links) => {
 new Promise ((resolve, reject) => {
    let arrLinks = links.map((obj) => {

      //then -> return -> desde afuera

        return fetch(obj.href)
        .then((res) => {
          const data = {
            ...obj,
            status: res.status,
            statusText: "ok",
          }
          // console.log(data)
          return data
             
        })
        .catch( (err) => {
          const data = {
            ...obj,
            status: err.message,
            statusText: "fail",
          }
          // console.log(data)
          return data
        });
    })

    //resolve mi nueva promesa (valor)
    Promise.all(arrLinks).then(console.log)
    resolve()
  })
}