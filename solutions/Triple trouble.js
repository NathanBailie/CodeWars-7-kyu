// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

function tripledouble(n1, n2) {
    let test = (n, r, x) => new RegExp(`${n}{${r}}`).test(x);
    for (let i = 0; i <= 9; i++) if (test(i, 3, n1) && test(i, 2, n2)) return 1;
    return 0;
}