// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
    let chars = str1.split('').reduce((res, c) => { res[c] ? res[c]++ : res[c] = 1; return res }, {});
    return str2.split('').map(c => chars[c] ? chars[c]-- : false).indexOf(false) === -1;
}