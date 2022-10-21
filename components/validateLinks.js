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

module.exports = (data, doc, text) => {
data.forEach((i) => {
    fetch(i)
    .then((response) => {
     console.log(doc, response.url, response.statusText, response.status, text)
    // console.log(response)
    })
    .catch(function (err) {
      console.log(`We have a problem with your url, please check this ${err}`);
    });
})
}