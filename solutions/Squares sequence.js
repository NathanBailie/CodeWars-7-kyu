// https://www.codewars.com/kata/5546180ca783b6d2d5000062

function squares(x, n) {
    if (n <= 0) return [];
    let res = [x];
    for (let i = 0; i < n - 1; i++) res.push(res[i] ** 2);
    return res;
}