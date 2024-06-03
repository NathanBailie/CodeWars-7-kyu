// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
    let sum = 0;
    for (let i = 0, d = 1; i < n; i++, d += 3) sum += 1 / d;
    return sum.toFixed(2);
}