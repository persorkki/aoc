const util = require("../util");

function Main() {
    const data = util.readLines("input.txt").map((x) => { return parseInt(x, 10) });
    let count = 0;
    for (let x = 0; x < data.length; x++) {
        if (data[x] > data[x - 1]) {
            count++;
        }
    }
    console.log(count);
}

Main();
