// https://www.codewars.com/kata/5a4e3782880385ba68000018

function balancedNum(n) {
    const getSum = arr => arr.reduce((sum, n) => sum + (+n), 0);
    let s = [...String(n)];
    let mid = Math.floor(s.length / 2);
    let x = s.length % 2 === 0 ? 1 : 0;
    let eq = getSum([...s.slice(0, mid - x)]) === getSum([...s.slice(mid + 1)]);
    return eq ? 'Balanced' : 'Not Balanced';
}