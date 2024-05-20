// https://www.codewars.com/kata/573992c724fc289553000e95

function smallest(n) {
    let str = n.toString(), minNum = n, fromInd = 0, toInd = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i === j) continue;
            let newStr = str.slice(0, i) + str.slice(i + 1);
            let num = parseInt(newStr.slice(0, j) + str[i] + newStr.slice(j));
            if (num < minNum) {
                minNum = num;
                fromInd = i;
                toInd = j;
            }
        }
    }
    return [minNum, fromInd, toInd];
}