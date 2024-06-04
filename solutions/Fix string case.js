// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s) {
    const u = (s.match(/[A-Z]/g) || []).length
    const l = (s.match(/[a-z]/g) || []).length;
    return u > l ? s.toUpperCase() : s.toLowerCase();
}