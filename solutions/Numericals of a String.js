// https://www.codewars.com/kata/5b4070144d7d8bbfe7000001

function numericals(s) {
    let c = {};
    return [...s].map(n => { c[n] = (c[n] || 0) + 1; return c[n] }).join('');
}