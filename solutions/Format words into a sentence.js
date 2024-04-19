// https://www.codewars.com/kata/51689e27fe9a00b126000004

function formatWords(arr) {
    if (!arr) return '';
    if (arr.length === 0) return '';
    arr = arr.filter(w => w !== '');
    return arr.join(', ').replace(/,([^,]*)$/, ' and$1');
}