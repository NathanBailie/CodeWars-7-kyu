// https://www.codewars.com/kata/5650ab06d11d675371000003

const splitInParts = (str, p) => str.match(new RegExp(`.{1,${p}}`, 'g')).join(' ');