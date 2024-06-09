// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

function min(arr, toReturn) {
    let res = { value: Infinity, index: null };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < res.value) {
            res.value = arr[i];
            res.index = i;
        }
    };

    return res[toReturn];
}