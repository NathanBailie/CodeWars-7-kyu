// https://www.codewars.com/kata/534ffb35edb1241eda0015fe

function scoreHand(cards) {
    const values = {
        "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
        "J": 10, "Q": 10, "K": 10, "A": 11
    };
    let res = cards.reduce((sum, c) => sum + values[c], 0);
    let acesAmount = cards.filter(c => c === "A").length;
    while (res > 21 && acesAmount > 0) { res -= 10; acesAmount--; }
    return res;
}