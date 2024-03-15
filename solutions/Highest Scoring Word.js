// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(str) {
    let codes = str.split(' ').map(word => [...word].reduce((sum, n) => sum + n.charCodeAt(0) - 96, 0));
    return str.split(' ')[codes.indexOf(Math.max(...codes))];
}