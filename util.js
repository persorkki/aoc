const fs = require("fs");

function readLines(f) {
    return fs.readFileSync(f, 'utf8').split('\n');
}

function readLinesToInt(f) {
    return fs.readFileSync(f, 'utf8').split('\n').map((x) => { return parseInt(x, 10) });
}


module.exports = {
    readLines,
    readLinesToInt,
}