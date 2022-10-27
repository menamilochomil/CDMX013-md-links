module.exports = (links) => {
    links.then((res) => {
        const arr = res.map((obj) => obj.href);
        const brokenLinks = res.filter((obj) => obj.statusText === "fail");
        const okLinks =res.filter((obj) => obj.statusText === "ok")
        const data = `
        Total: ${arr.length}
        Ok: ${okLinks.length}
        Broken: ${brokenLinks.length}
            `
        //Debe ser return
        console.log(data)
    })
}