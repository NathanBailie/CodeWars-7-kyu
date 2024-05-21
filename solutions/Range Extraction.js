// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
        let start = list[i];
        while (i < list.length - 1 && list[i + 1] - list[i] === 1) i++;
        let end = list[i];
        res.push(end - start >= 2 ? `${start}-${end}` : (end === start ? String(start) : `${start},${end}`));
    }
    return res.join(",");
}