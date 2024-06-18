// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

function buddy(start, limit) {
    for (let i = start; i <= limit; i++) {
        let m = getSum(i) - 1;
        if (m > i && getSum(m) - 1 === i) return [i, m];
    }
    return "Nothing";
}

function getSum(n) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) sum += i + (n / i === i ? 0 : n / i);
    }
    return sum;
}