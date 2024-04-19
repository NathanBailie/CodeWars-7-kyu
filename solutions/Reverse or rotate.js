// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

function revrot(str, s) {
    if (s <= 0 || s > str.length) return '';
    const res = [];
    for (let i = 0; i < str.length; i += s) {
        const slice = str.slice(i, i + s);
        if (slice.length === s) {
            const sum = [...slice].reduce((sum, n) => sum + (+n) ** 3, 0);
            res.push(sum % 2 === 0 ? [...slice].reverse().join('') : slice.slice(1) + slice[0]);
        }
    }
    return res.join('');
}