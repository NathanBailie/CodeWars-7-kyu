// https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(input, markers) {
    return input.split('\n').map(l => {
        let ind = l.length;
        markers.forEach(m => {
            const markInd = l.indexOf(m);
            markInd !== -1 && markInd < ind && (ind = markInd);
        });
        return l.slice(0, ind).trimRight();
    }).join('\n');
}