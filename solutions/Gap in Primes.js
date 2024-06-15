// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
    let lastPrime = 0;
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            if (i - lastPrime === g) return [lastPrime, i];
            lastPrime = i;
        }
    }
    return null;
}

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) if (num % i === 0) return false;
    return num > 1;
}