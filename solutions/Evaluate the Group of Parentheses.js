// https://www.codewars.com/kata/64b6722493f1050058dc3f98

function evalParentheses(s) {
    let stack = [], res = 0;
    [...s].forEach(c => c === '(' ? (stack.push(res), res = 0) : (res = stack.pop() + Math.max(2 * res, 1)));
    return res;
}