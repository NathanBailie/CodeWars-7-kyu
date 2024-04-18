// https://www.codewars.com/kata/52756e5ad454534f220001ef

function LCS(x, y) {
    let res = '', n = 0;
    for (let i = 0; i < y.length; i++) {
        let char = y[i], ind = x.indexOf(char, n);
        ind !== -1 && (res += char, n = ind + 1);
    }
    return res;
}