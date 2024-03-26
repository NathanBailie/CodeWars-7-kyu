// https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(arr, k) {
    let res = [], i = 0;
    while (arr.length > 0) { i = (i + k - 1) % arr.length; res.push(...arr.splice(i, 1)); }
    return res;
}