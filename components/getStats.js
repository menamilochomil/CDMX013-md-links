module.exports = (links) => {
    links.then((res) => {
        const arr = res.map((obj) => obj.href);
        const setU = new Set (arr);
        // const brokenLinks = res.filter((obj) => obj.statusText === "fail");
        const data = `
        Total: ${arr.length}
        Unique: ${setU.size}
            `
        //Debe ser return
        console.log(data)
    })
}