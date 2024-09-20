# https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/python

# first
def even_or_odd(n):
    return {0: 'Even', 1: 'Odd'}[n%2]

# second
def even_or_odd(n):
    return 'Even' if n%2==0 else 'Odd'
