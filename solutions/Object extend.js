// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb

function extend(...args) {
    const isObject = o => typeof o === 'object' && !Array.isArray(o);
    return args.reduce((obj, n) => {
        if (isObject(n)) for (let key in n) if (!obj.hasOwnProperty(key)) obj[key] = n[key];
        return obj;
    }, {});
}