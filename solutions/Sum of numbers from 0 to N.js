// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

const SequenceSum = (function () {
    function SequenceSum() { }

    SequenceSum.showSequence = function (count) {
        if (count < 0) return count + "<0";
        if (count === 0) return "0=0";
        let str = Array.from({ length: count + 1 }, (_, i) => i).join('+');
        let sum = (count * (count + 1)) / 2;
        return `${str} = ${sum}`;
    };

    return SequenceSum;
})();