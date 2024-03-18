// Add commas to a number
// https://www.codewars.com/kata/56a115cadb39a2faa000001e

function commas(num) {
    let parts = String(+num.toFixed(3)).split('.');
    let decimal = parts.length > 1 ? `.${parts[1]}` : '';
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decimal;
}


// the best
const commas = num => (+num.toFixed(3)).toString().replace(/\B(?=(\d{3})+(\.|$))/g, ',');