// https://www.codewars.com/kata/54d512e62a5e54c96200019e

function primeFactors(n) {
    if (n <= 1) return "";
    let arr = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            arr.push(i);
            n /= i;
        }
    }
    if (n > 1) arr.push(n);
    let hash = arr.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {});
    return Object.entries(hash).map(([n, c]) => c === 1 ? `(${n})` : `(${n}**${c})`).join('');
}