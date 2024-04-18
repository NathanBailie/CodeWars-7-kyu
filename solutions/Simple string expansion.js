// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5

function solve(str) {
    while (/\d/g.test(str)) str = str.replace(/(\d*)\(([a-z]+)\)/gi, (_, n, c) => c.repeat(n || 1));
    return str.replace(/[^a-z]/g, '');
}