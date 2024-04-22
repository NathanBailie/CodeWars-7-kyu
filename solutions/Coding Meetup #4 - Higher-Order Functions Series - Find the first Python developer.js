// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
    const p = list.find(p => p.language === 'Python');
    return p ? `${p.firstName}, ${p.country}` : 'There will be no Python developers';
}