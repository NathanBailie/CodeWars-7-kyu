// https://www.codewars.com/kata/58941fec8afa3618c9000184

function growingPlant(upSpeed, downSpeed, height) {
    let count = 0;
    while ((height -= upSpeed) > 0) { count++; height += downSpeed; }
    return count + 1;
}