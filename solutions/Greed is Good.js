// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score(arr) {
    let hash = arr.reduce((obj, n) => { obj[n] = (obj[n] || 0) + 1; return obj; }, {});
    return (hash[1] >= 3 ? 1000 : 0) +
        (hash[6] >= 3 ? 600 : 0) +
        (hash[5] >= 3 ? 500 : 0) +
        (hash[4] >= 3 ? 400 : 0) +
        (hash[3] >= 3 ? 300 : 0) +
        (hash[2] >= 3 ? 200 : 0) +
        ((hash[1] || 0) % 3) * 100 +
        ((hash[5] || 0) % 3) * 50;
}