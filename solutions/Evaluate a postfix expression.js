// https://www.codewars.com/kata/577e9095d648a15b800000d4

function postfixEvaluator(str) {
    const arr = str.split(' ');
    let res = [];
    for (const elem of arr) {
        if (!isNaN(elem)) {
            res.push(parseInt(elem, 10));
        } else {
            const n2 = res.pop(), n1 = res.pop();
            res.push(
                elem === '+' ? n1 + n2 :
                    elem === '-' ? n1 - n2 :
                        elem === '*' ? n1 * n2 :
                            Math.floor(n1 / n2)
            );
        }
    }
    return res[0];
}