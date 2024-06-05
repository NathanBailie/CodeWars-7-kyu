// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    let maxDist = -1;

    for (let n of a1) {
        for (let m of a2) {
            const diff = Math.abs(n.length - m.length);
            if (diff > maxDist) maxDist = diff;
        }
    }

    return maxDist;
}