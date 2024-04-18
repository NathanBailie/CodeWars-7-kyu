// https://www.codewars.com/kata/535bfa2ccdbf509be8000113

class Primes {
    static first(n) {
        let res = [2], ind = 3;
        while (res.length < n) {
            if (Primes.isPrime(ind)) res.push(ind);
            ind++;
        }
        return res;
    }

    static isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}