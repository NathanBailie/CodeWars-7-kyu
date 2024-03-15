// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(b) {
    let res = b;
    while (/\(\)|\{\}|\[\]/g.test(res)) res = res.replace(/\(\)|\{\}|\[\]/g, '');
    return res.length === 0;
}