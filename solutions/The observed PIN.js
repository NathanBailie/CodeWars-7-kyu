// https://www.codewars.com/kata/5263c6999e0f40dee200059d

function getPINs(o) {
    const variants = {
        '0': ['0', '8'],
        '1': ['1', '2', '4'],
        '2': ['1', '2', '3', '5'],
        '3': ['2', '3', '6'],
        '4': ['1', '4', '5', '7'],
        '5': ['2', '4', '5', '6', '8'],
        '6': ['3', '5', '6', '9'],
        '7': ['4', '7', '8'],
        '8': ['5', '7', '8', '9', '0'],
        '9': ['6', '8', '9']
    };

    const findVariations = d => {
        if (d.length === o.length) return [d.join('')];
        const current = o[d.length];
        return variants[current].reduce((acc, next) => {
            return acc.concat(findVariations([...d, next]));
        }, []);
    };

    return findVariations([]);
}