// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s) {
    let uc = (s.match(/[A-Z]/g) || []).length;
    let lc = (s.match(/[a-z]/g) || []).length;
    let nums = (s.match(/\d/g) || []).length;
    let sp = (s.match(/[^a-z0-9]/gi) || []).length;

    return [uc, lc, nums, sp];
}