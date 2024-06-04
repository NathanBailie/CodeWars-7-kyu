// https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(a1, a2) {
    let c = 0;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] === a2[i]) c += 4;
        if (a2[i] === '') continue;
        if (a1[i] !== a2[i]) c--;
    };
    return c < 0 ? 0 : c;
}