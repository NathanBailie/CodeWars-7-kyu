// https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word) {
    let res = [];
    for (let i = 0; i < word.length; i++) {
        /[aeiouy]/gi.test(word[i]) && res.push(i + 1);
    }
    return res;
}