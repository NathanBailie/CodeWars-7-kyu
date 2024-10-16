// https://www.codewars.com/kata/57cf50a7eca2603de0000090/javascript

function moveTen(s) {
	let res = '',
		aCode = 'a'.charCodeAt();
	for (let l of s)
		res += String.fromCharCode(((l.charCodeAt() - aCode + 10) % 26) + aCode);
	return res;
}
