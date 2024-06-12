// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

function switcher(arr) {
    let signs = { '27': '!', '28': '?', '29': ' ' };
    return arr.reduce((res, c) => res + (c >= 27 ? signs[c] : String.fromCharCode(123 - (+c))), '');
}