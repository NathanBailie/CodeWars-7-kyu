# https://www.codewars.com/kata/5bb904724c47249b10000131

def points(arr):
    res = 0
    for score in arr:
        x, y = score.split(':')
        res += 3 if x > y else 0
        res += 1 if x == y else 0
    return res