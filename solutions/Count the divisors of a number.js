// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
    let set = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        n % i === 0 && (set.add(i), set.add(n / i));
    }
    return set.size;
}