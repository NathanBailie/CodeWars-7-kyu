// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    const sortArr = arr => arr.slice().sort((a, b) => a - b);
    const a1 = sortArr(a), a2 = sortArr(b);
    return a1.every((n, i) => n ** 2 === a2[i]);
}