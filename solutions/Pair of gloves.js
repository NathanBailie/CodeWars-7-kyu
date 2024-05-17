// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

function numberOfPairs(g) {
    let hash = g.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {});
    return Object.values(hash).reduce((sum, n) => sum + Math.trunc(n / 2), 0);
}