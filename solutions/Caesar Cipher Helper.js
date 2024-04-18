// https://www.codewars.com/kata/526d42b6526963598d0004db

class CaesarCipher {
    constructor(shift) {
        this.shift = shift;
    }

    encode(string) {
        return string.replace(/[a-zA-Z]/g, char => {
            let code = char.charCodeAt(0) + this.shift;
            let offset = (char >= 'A' && char <= 'Z') ? 65 : 97;
            return String.fromCharCode(((code - offset) % 26) + offset);
        }).toUpperCase();
    }

    decode(string) {
        return string.replace(/[a-zA-Z]/g, char => {
            let code = char.charCodeAt(0);
            let offset = (char >= 'A' && char <= 'Z') ? 65 : 97;
            return String.fromCharCode(((code - offset - this.shift + 26) % 26) + offset);
        }).toUpperCase();
    }
}