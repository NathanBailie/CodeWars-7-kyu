// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, (char) => {
        let pos = char.toLowerCase() < 'n' ? 13 : -13;
        return String.fromCharCode(char.charCodeAt() + pos);
    });
}