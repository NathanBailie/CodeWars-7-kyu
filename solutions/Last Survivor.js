// https://www.codewars.com/kata/609eee71109f860006c377d1

function lastSurvivor(str, arr) {
    arr.forEach(n => str = str.slice(0, n) + str.slice(n + 1));
    return str;
}