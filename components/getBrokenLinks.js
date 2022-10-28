module.exports = (links) => {
    links.then((res) => {
        const arr = res.map((obj) => obj.href);
        const brokenLinks = res.filter((obj) => obj.statusText === "fail");
        const brokenhref =  brokenLinks.map((obj) => obj.href)
        const okLinks =res.filter((obj) => obj.statusText === "ok")
        const okhref = okLinks.map((obj) => obj.href)
        const data = `Total: ${arr.length}

Ok: ${okLinks.length}
List of ok links:
${String(okhref).replace(/,/g, "\n")}
        
Broken: ${brokenLinks.length}
List of broken links:
${String(brokenhref).replace(/,/g, "\n")}
            `
        //Debe ser return
        console.log(data)
    })
}