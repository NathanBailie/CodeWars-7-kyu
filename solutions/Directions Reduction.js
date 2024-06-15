// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
    let dirs = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };

    let stack = [];

    for (let dir of arr)
        stack.length > 0 && stack[stack.length - 1] === dirs[dir] ? stack.pop() : stack.push(dir);

    return stack;
}