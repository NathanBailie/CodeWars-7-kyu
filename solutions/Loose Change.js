// https://www.codewars.com/kata/5571f712ddf00b54420000ee

function looseChange(n) {
    const dic = { 'Quarters': 25, 'Dimes': 10, 'Nickels': 5, 'Pennies': 1 };
    let res = { 'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0 };
    for (let c in dic) {
        while (n >= dic[c]) {
            res[c]++;
            n -= dic[c];
        }
    }
    return res;
}