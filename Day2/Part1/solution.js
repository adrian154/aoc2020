// same running syntax as day 1
// epic one liner!!
console.log(String(require("fs").readFileSync("../data.txt")).split("\n").map(str => ({
    min: Number(str.substr(0, str.indexOf("-"))),
    max: Number(str.match(/-\d*/)[0].substr(1)),
    char: str[str.indexOf(":") - 1],
    pw: str.substr(str.indexOf(":") + 2, str.length)
})).reduce((accum, cur) => accum + Number((cur.pw.split(cur.char).length - 1 <= cur.max && cur.pw.split(cur.char).length - 1 >= cur.min)), 0));