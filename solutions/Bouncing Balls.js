// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
    let count = 1;
    while (h * bounce > window) { count += 2; h *= bounce; }
    return count;
}