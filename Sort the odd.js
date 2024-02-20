// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(arr) {
    let odds = arr.filter(n => n % 2 && n).sort((a, b) => a - b);
    return arr.map(n => n % 2 ? odds.shift() : n);
}