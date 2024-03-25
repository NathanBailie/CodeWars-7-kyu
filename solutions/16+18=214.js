// https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(n1, n2) {
    let a1 = [...String(n1)], a2 = [...String(n2)], maxLen = Math.max(a1.length, a2.length);
    const normalize = (arr, len) => arr.length < len ? Array.from({ length: len - arr.length }, () => '0').concat(arr) : arr;
    a1 = normalize(a1, maxLen);
    a2 = normalize(a2, maxLen);
    return +a1.map((n, i) => (+n) + (+a2[i])).join('');
}