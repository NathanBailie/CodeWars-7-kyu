// https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
    return list.reduce((sum, d) => /Europe/.test(d.continent) && /JavaScript/.test(d.language) ? ++sum : sum, 0);
}