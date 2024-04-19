// https://www.codewars.com/kata/5a6761be145c4691ee000090

function solve(n) {
    let res = [1], index = 2;
    let arr = Array.from({ length: n - 1 }, (_, i) => i + 2);
    while (arr.length > index) {
        res.push(arr[0]);
        arr = arr.filter((_, i) => i % index !== 0);
        index = arr[0];
    }
    res.push(...arr);
    return res.reduce((sum, n) => sum + n, 0);
}