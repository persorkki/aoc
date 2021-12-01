const util = require("../util");
const { performance } = require("perf_hooks");

function Main() {
    const data = util.readLinesToInt("./input.txt");

    let count = 0;
    for (let x = 0; x < data.length; x ++) {
        const now = data[x] + data[x + 1] + data[x + 2]
        const after = now - data[x] + data[x+3]
        if (now < after) {
            count++;
        }        
    }
    console.log(count);
}

const t1 = performance.now();
Main();
const t2 = performance.now();

console.log(`performance: ${t2-t1}`);
