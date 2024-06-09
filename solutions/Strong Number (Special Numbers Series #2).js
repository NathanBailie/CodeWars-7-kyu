// https://www.codewars.com/kata/5a4d303f880385399b000001

function strong(num) {
    const factorial = n => n === 0 ? 1 : n * factorial(n - 1);
    let sum = [...String(num)].reduce((acc, n) => acc + factorial(+n), 0);
    return sum === num ? "STRONG!!!!" : "Not Strong !!";
}