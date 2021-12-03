const util = require("../util");

const ins = {
    'forward': (x, subm) => {
        return {
            horizontal: subm.horizontal += x,
            depth: subm.depth += subm.aim * x,
            aim: subm.aim
        }
    },
    'down': (x, subm) => {
        return {
            horizontal: subm.horizontal,
            depth: subm.depth,
            aim: subm.aim += x,
        }
    },
    'up': (x, subm) => {
        return {
            horizontal: subm.horizontal,
            depth: subm.depth,
            aim: subm.aim -= x,
        }
    }
}

function Main() {
    const data = util.readLines("./input.txt");   
    let submarine = {
        depth: 0,
        horizontal: 0,
        aim: 0,
    }
    for (let direction of data) {
        const cmd = direction.split(" ");
        //skip last line
        if (cmd[0].length == 0) { continue; }
        submarine = ins[cmd[0]](parseInt(cmd[1]), submarine);
    }
    return submarine.depth * submarine.horizontal
}

console.log(Main());
