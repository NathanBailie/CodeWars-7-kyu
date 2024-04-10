// https://www.codewars.com/kata/52dd72494367608ac1000416

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = (s, f) => {
    const [low, high] = s < f ? [s, f] : [f, s];
    return Array.from({ length: high - low + 1 }, (_, i) => i + low).filter(isPrime);
};