# https://www.codewars.com/kata/56b1f01c247c01db92000076

# 1
double_char = lambda s: ''.join(l * 2 for l in s)

# 2
double_char = lambda s: ''.join(map(lambda l: l * 2, s))
