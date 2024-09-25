# https://www.codewars.com/kata/5672a98bdbdd995fad00000f

def rps(a, b):
    if a == b: return 'Draw!'
    
    if a == 'rock':
        if b == 'scissors': return 'Player 1 won!'
        if b == 'paper': return 'Player 2 won!'
    
    if a == 'scissors':
        if b == 'paper': return 'Player 1 won!'
        if b == 'rock': return 'Player 2 won!'
        
    if a == 'paper':
        if b == 'rock': return 'Player 1 won!'
        if b == 'scissors': return 'Player 2 won!'