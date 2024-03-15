// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    let arr = Array(n).fill(0);
    customers.forEach(time => arr[arr.indexOf(Math.min(...arr))] += time);
    return Math.max(...arr);
}