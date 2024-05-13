// https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(a, c) {
    let counter = c.reduce((obj, chr) => { obj[chr] = 0; return obj; }, {}), empty = true;
    a.forEach(str => counter[str[0]] !== undefined && (empty = false, counter[str[0]] += parseInt(str.match(/\d+/g))));
    return !empty ? Object.entries(counter).map(([chr, n]) => `(${chr} : ${n})`).join(' - ') : '';
}