// https://www.codewars.com/kata/525d8c20915a399b5600087b

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function (pattern) {
    pattern = new RegExp(`^${pattern.replace(/\?/g, ".")}$`);
    return this.words.filter(word => pattern.test(word));
};