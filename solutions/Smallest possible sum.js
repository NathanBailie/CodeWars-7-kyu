// https://www.codewars.com/kata/52f677797c461daaf7000740

function solution(n) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    let res = n[0];
    for (let i = 1; i < n.length; i++) res = gcd(res, n[i]);
    return res * n.length;
}