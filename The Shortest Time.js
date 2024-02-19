// https://www.codewars.com/kata/5950a4bfc6bf4f433f000031

function shortestTime(n, m, speeds) {
    const [a, b, c, d] = speeds;

    const walkTime = Math.abs(n - 1) * d;
    const elevatorComingTime = Math.abs(n - m) * a + b + c;
    const elevatorDescentTime = Math.abs(n - 1) * a + b;
    const elevatorTime = elevatorComingTime + elevatorDescentTime;

    return Math.min(walkTime, elevatorTime);
}
