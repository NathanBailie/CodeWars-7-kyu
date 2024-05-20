// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
    let miniWins = 0;
    ticket.forEach(([chars, n]) => {
        for (let i = 0; i < chars.length; i++) {
            if (chars.charCodeAt(i) === n) { miniWins++; break; }
        }
    });
    return miniWins >= win ? 'Winner!' : 'Loser!';
}