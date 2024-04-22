// https://www.codewars.com/kata/56786a687e9a88d1cf00005d

function validateWord(s) {
    const counter = [...s.toLowerCase()].reduce((acc, c) => { acc[c] = (acc[c] || 0) + 1; return acc; }, {});
    return new Set(Object.values(counter)).size === 1;
}