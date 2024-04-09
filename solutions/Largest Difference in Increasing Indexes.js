// https://www.codewars.com/kata/52503c77e5b972f21600000e

function largestDifference(arr) {
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j] && j - i > diff) diff = j - i;
        }
    }
    return diff;
}