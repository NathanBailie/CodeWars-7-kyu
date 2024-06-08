// https://www.codewars.com/kata/580755730b5a77650500010c

function sortMyString(s) {
    let e = '', o = '';
    for (let i = 0; i < s.length; i++) i % 2 === 0 ? e += s[i] : o += s[i];
    return `${e} ${o}`;
}