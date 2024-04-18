// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hex) {
    let [r, g, b] = hex.match(/([\d\w]{2})/g).map(h => parseInt(h, 16));
    return { r, g, b };
}