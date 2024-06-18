// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript

function landPerimeter(arr) {
    let p = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                if (i === 0 || arr[i - 1][j] === 'O') p++;
                if (i === arr.length - 1 || arr[i + 1][j] === 'O') p++;
                if (j === 0 || arr[i][j - 1] === 'O') p++;
                if (j === arr[i].length - 1 || arr[i][j + 1] === 'O') p++;
            }
        }
    }

    return `Total land perimeter: ${p}`;
}