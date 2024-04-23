// https://www.codewars.com/kata/51f42b1de8f176db5a0002ae

function sortme(courseIds) {
    return courseIds.sort((a, b) => {
        const [n1, d1] = a.split("-"), [n2, d2] = b.split("-");
        return d1 !== d2 ? d1.localeCompare(d2) : n1.localeCompare(n2);
    });
}