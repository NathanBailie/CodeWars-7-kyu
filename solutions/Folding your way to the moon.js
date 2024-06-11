// https://www.codewars.com/kata/58f0ba42e89aa6158400000e

function foldTo(distance) {
    if (distance < 0) return null;
    let thickness = 0.0001, count = 0;
    while (thickness < distance) thickness *= 2, count++;
    return count;
}