// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

function longestRepetition(s) {
    if (s.length === 0) return ['', 0];
    let chars = s.match(/(.)\1*/g);
    let maxRepeat = 0, maxRepeatChar = '';
    chars.forEach(c => c.length > maxRepeat && (maxRepeat = c.length, maxRepeatChar = c[0]));
    return [maxRepeatChar, maxRepeat];
}