// https://www.codewars.com/kata/52c4dd683bfd3b434c000292

function isInteresting(num, p) {
    function isNumInteresting(n) {
        if (n < 100) return false;
        let s = String(n);
        return /^(\d)(0)+$/.test(s) ||
            /^(\d)\1+$/.test(s) ||
            '1234567890'.includes(s) ||
            '9876543210'.includes(s) ||
            s === [...s].reverse().join('') ||
            p.includes(n);
    }
    return isNumInteresting(num) ? 2 : (isNumInteresting(num + 1) || isNumInteresting(num + 2) ? 1 : 0);
}