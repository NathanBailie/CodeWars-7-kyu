// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
    const getSum = s => [...s].reduce((sum, c) => sum + c.charCodeAt() - 96, 0);
    return Math.max(...s.split(/[aeiou]/).map(s => getSum(s)));
};