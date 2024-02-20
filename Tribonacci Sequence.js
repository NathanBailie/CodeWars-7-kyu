// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
    let arr = [...signature];
    for (let i = 3; i < n; i++) arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    return arr.slice(0, n);
}