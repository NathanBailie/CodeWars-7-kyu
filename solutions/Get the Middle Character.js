// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(str) {
    let mid = str.length >> 1;
    return str.length & 1 ? str[mid] : `${str[mid - 1]}${str[mid]}`;
}