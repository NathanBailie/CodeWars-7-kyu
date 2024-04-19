// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    let counter = {};
    for (let l of string) l in counter ? counter[l] += 1 : counter[l] = 1;
    return counter;
}