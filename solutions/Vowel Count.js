// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function highAndLow(numbers) {
    const nums = numbers.split(' ');
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
