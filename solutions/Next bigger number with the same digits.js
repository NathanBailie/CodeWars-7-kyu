// https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
    let arr = [...String(n)], div = -1;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) { div = i - 1; break; }
    }
    if (div == -1) return div;

    let rightPart = arr.splice(div);
    let c = rightPart.shift();
    rightPart.sort((a, b) => a - b);

    let numInd = rightPart.findIndex((x) => x > c);
    let num = numInd !== -1 ? rightPart[numInd] : null;
    if (numInd == null) return -1;

    rightPart[numInd] = c;
    let res = +arr.concat(num, rightPart).join((''));
    return res > n ? res : -1;
}
