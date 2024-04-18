// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

function findUniq(arr) {
    const cleaned = arr.map(w => w.replace(/\s/g, '').toLowerCase().split('').sort().join('').replace(/(.)\1+/g, '$1'));
    return arr.find((_, i) => cleaned.indexOf(cleaned[i]) === cleaned.lastIndexOf(cleaned[i]));
}