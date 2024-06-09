// https://www.codewars.com/kata/57a62154cf1fa5b25200031e

function alternateCase(s) {
    let res = '';
    for (let char of s) res += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    return res;
}