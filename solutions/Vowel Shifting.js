// https://www.codewars.com/kata/577e277c9fb2a5511c00001d

function vowelShift(text, n) {
    if (!/[aeiou]/gi.test(text) || typeof text !== 'string') return text;
    let vowels = text.match(/[aeiou]/gi), index = 0;
    let shiftedVowels = vowels.slice(-n % vowels.length).concat(vowels.slice(0, -n % vowels.length));
    return text.replace(/[aeiou]/gi, v => shiftedVowels[index++]);
}