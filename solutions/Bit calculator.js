// https://www.codewars.com/kata/52ece9de44751a64dc0001d9

function calculate(n1, n2) {
    function binaryToDecimal(num) {
        let res = 0;
        for (let i = 0; i < num.length; i++) {
            res += (num[num.length - 1 - i] === "1") && Math.pow(2, i);
        }
        return res;
    }
    return binaryToDecimal(n1) + binaryToDecimal(n2);
}