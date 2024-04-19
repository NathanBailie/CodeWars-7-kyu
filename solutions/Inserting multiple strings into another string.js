// https://www.codewars.com/kata/52f3eeb274c7e693a600288e

function insertAtIndexes(phrase, word, indexes) {
    for (let i = 0; i < indexes.length; i++)
        phrase = phrase.slice(0, indexes[i] + i * word.length) + word + phrase.slice(indexes[i] + i * word.length);
    return phrase;
}