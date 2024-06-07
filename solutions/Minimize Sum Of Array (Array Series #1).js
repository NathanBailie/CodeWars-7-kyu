// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

function minSum(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) sum += arr[i] * arr[j];
    return sum;
}