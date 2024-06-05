// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s) {
    let e = '', o = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) e += s[i].toUpperCase(), o += s[i];
        if (i % 2 !== 0) e += s[i], o += s[i].toUpperCase();
    }
    return [e, o];
}