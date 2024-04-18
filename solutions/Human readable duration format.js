// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
    if (seconds === 0) return "now";
    const times = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
    let res = Object.entries(times).reduce((acc, [key, v]) => {
        const c = Math.floor(seconds / v);
        if (c > 0) {
            acc.push(`${c} ${key}${c !== 1 ? 's' : ''}`);
            seconds -= c * v;
        }
        return acc;
    }, []).join(', ');
    return res.length > 1 ? res.replace(/,([^,]*)$/, ' and$1') : res;
}