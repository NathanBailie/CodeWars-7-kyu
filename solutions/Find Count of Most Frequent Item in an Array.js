// https://www.codewars.com/kata/56582133c932d8239900002e

function mostFrequentItemCount(arr) {
    if (arr.length === 0) return 0;
    let hash = {}, maxCount = 0;

    arr.forEach(n => {
        hash[n] = (hash[n] || 0) + 1;
        maxCount = Math.max(maxCount, hash[n]);
    })

    return maxCount;
}