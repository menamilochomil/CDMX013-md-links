const arr = [
    {
href: "https://es.wikipedia.org/wiki/Markdown",
text: "Markdown",
file: "./md/x.md"
    }
]
const arrStats = [
    {
href: "https://es.wikipedia.org/wiki/Markdown",
text: "Markdown",
file: "./md/x.md",
status: 200,
statusText: "ok"
    }
]

const arrFail = [
    {
        href: "https://www.gog.com/error/404",
        text: "https://www.gog.com/error/404",
        file: "./md/x.md"
    }
]
const arrStatsFail = [
    {
href: "https://www.gog.com/error/404",
text: "https://www.gog.com/error/404",
file: "./md/x.md",
status: 404,
statusText: "fail"
    }
]

const stats = "./md/x.md https://es.wikipedia.org/wiki/Markdown ok 200 Markdown"

module.exports = {
arr,
arrStats,
arrFail,
arrStatsFail,
stats
}