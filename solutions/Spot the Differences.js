// https://www.codewars.com/kata/5881460c780e0dd207000084

function spot(s1, s2) {
    let res = [];
    for (let i = 0; i < s1.length; i++) s1[i] !== s2[i] && res.push(i);
    return res;
}