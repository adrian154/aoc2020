const data = String(require("fs").readFileSync("../data.txt")).split("\n");

const trees = (dx, dy) => {

    let x = 0;
    let numTrees = 0;
    for(let y = 0; y < data.length; y += dy) {
        
        numTrees += data[y][x % (data[0].length - 1)] == '#';
        x += dx;

    }

    return numTrees;

};

console.log(trees(3, 1));

module.exports = {
    trees: trees
};