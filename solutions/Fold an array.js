// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

function foldArray(arr, runs) {
    let res = [...arr];
    while (runs > 0) {
        const mid = Math.ceil(res.length / 2);
        const p1 = res.slice(0, mid);
        const p2 = res.slice(mid).reverse();
        res = p1.map((n, i) => n + (p2[i] || 0));
        runs--;
    }
    return res;
}