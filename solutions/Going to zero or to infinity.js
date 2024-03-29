// https://www.codewars.com/kata/55a29405bc7d2efaff00007c

function going(n) {
    let res = 0.0, d = 1.0;
    for (let i = 1; i <= n; i++) { d *= i; res /= i; res += 1; }
    return +String(res.toFixed(7)).replace(/\d$/g, '');
}