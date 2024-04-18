// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(0, sum + arr[i]);
        max = Math.max(sum, max);
    }

    return max;
}