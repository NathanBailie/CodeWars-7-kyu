// https://www.codewars.com/kata/5635e7cb49adc7b54500001c

function solve(n) {
    let b = [500, 200, 100, 50, 20, 10], count = 0;
    for (let i = 0; i < b.length; i++) {
        count += Math.floor(n / b[i]);
        n %= b[i];
    }
    return n === 0 ? count : -1;
}