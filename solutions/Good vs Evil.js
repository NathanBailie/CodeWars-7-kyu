// https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil) {
    let g = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10 }, e = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10 };
    const getSum = (str, powerObj) => str.split(' ').reduce((sum, n, i) => sum + (n * powerObj[i]), 0);
    let goodStr = getSum(good, g), evilStr = getSum(evil, e), res = 'Battle Result: ';
    res += goodStr > evilStr ? 'Good triumphs over Evil' : goodStr < evilStr ? 'Evil eradicates all trace of Good' : 'No victor on this battle field';
    return res;
}