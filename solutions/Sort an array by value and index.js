// https://www.codewars.com/kata/58e0cb3634a3027180000040

function sortByValueAndIndex(arr) {
    return arr.map((v, i) => ({ value: v, indexed: v * (i + 1) })).sort((a, b) => a.indexed - b.indexed).map(obj => obj.value);
}