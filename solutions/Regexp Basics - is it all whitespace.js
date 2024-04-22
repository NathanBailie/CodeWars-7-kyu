// https://www.codewars.com/kata/567de8823fa5eee02100002a

String.prototype.whitespace = function () {
    return /^\s*$/g.test(this);
}