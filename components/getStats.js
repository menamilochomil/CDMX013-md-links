module.exports = (links) => {
    links.then((res) => {
    // Gets the array of validate links with href
        const arrLinks = res.map((obj) => obj.href);
    //Gets the unique links
        const setUnique = [...new Set (arrLinks)];
        let uniqueLinks = "";
        setUnique.forEach((value) => {
            uniqueLinks += value + "\n";
          })
    //Gets the repeat links
        const repeatLinks = arrLinks.filter((elemento, index) => {
            return arrLinks.indexOf(elemento) !== index;
        });
        
        const data = 
        `Total: ${arrLinks.length}

Unique: ${setUnique.length}
List of unique links:
${uniqueLinks}

Repeat: ${repeatLinks.length}
List of repeat links:
${String(repeatLinks).replace(/,/g, "\n")}`

        console.log(data)
    })
}