// https://www.codewars.com/kata/5503013e34137eeeaa001648

function diamond(n) {
    if (n % 2 === 0 || n <= 0) return null;
    let res = "", center = Math.floor(n / 2) + 1;
    for (let i = 1; i <= n; i++) {
        let spaceAmount = Math.abs(center - i);
        res += " ".repeat(spaceAmount) + "*".repeat(n - spaceAmount * 2) + "\n";
    }
    return res;
}