# https://www.codewars.com/kata/576bb71bbbcf0951d5000044

def count_positives_sum_negatives(arr):
    if not arr:
        return []
    p, n = 0, 0
    for x in arr:
        p += 1 if x > 0 else 0
        n += x if x < 0 else 0
    return [p, n]
