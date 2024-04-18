// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

function makeLooper(str) {
    let i = 0;
    return function () {
        const char = str[i];
        i = (i + 1) % str.length;
        return char;
    }
}