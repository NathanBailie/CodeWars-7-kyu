// https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
    let res = '';
    for (let i = a.length - 1, j = b.length - 1, c = 0; i >= 0 || j >= 0 || c; i--, j--) {
        let sum = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + c;
        res = (sum % 10) + res;
        c = sum > 9 ? 1 : 0;
    }
    return res;
}