// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

function cubeOdd(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') return undefined;
        let cube = arr[i] ** 3;
        if (cube % 2 !== 0) res += cube;
    };

    return res;
}