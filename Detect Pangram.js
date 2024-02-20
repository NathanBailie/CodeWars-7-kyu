// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(str) {
    const letters = str.split('').reduce((sum, c) => (/[a-zA-Z]/).test(c) ? sum + c.toLowerCase() : sum, '').split('');
    return new Set(letters).size === 26;
}