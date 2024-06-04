// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        for (let c of String(i ** 2)) {
            if (c === String(d)) count++;
        }
    }
    return count;
}