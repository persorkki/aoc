const util = require("../util");

function Main() {
    const data = util.readLines("./input.txt");
    let depth = 0;
    let horizontal = 0;
    let aim = 0;
    for (let direction of data) {
        const cmd = direction.split(" ");
        const word = cmd[0];
        const num = parseInt(cmd[1]);
        switch (word) {
            case 'forward':
                horizontal += num;
                depth += aim * num;
                break;
            case 'down':
                aim += num;
                break;
            case 'up':
                aim -= num;
                break;
        }
    }
    return depth * horizontal;
}

console.log(Main());

