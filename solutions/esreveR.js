// https://www.codewars.com/kata/5413759479ba273f8100003d

function reverse(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) res.push(arr[i]);
    return res;
}