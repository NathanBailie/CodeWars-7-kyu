// https://www.codewars.com/kata/568338ea371e86728c000002

String.prototype.toSeconds = function () {
    if (!/^(\d\d:?){3}$/.test(this)) return null;
    let arr = this.split(':');
    if (arr[1] > 59 || arr[2] > 59) return null;
    return arr[0] * 60 * 60 + arr[1] * 60 + +arr[2];
}