// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f

function calculate(n1, op, n2) {
    switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n2 !== 0 ? n1 / n2 : null;
        default: return null;
    }
}