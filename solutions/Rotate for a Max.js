// https://www.codewars.com/kata/56a4872cbb65f3a610000026

function maxRot(n) {
    let str = String(n), max = n;
    for (let i = 0; i < str.length; i++) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i];
        max = Math.max(max, +str);
    }
    return max;
}