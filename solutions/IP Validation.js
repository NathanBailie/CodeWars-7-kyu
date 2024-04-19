// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str) {
    if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(str)) return false;
    return str.split('.').every(n => parseInt(n) >= 0 && parseInt(n) <= 255 && String(parseInt(n)) === n);
}