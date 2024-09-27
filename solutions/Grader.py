# https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

# 1
def grader(score):
    if score > 1 or score < 0.6: return 'F'
    
    d = {
        (0.9, 1): 'A',
        (0.8, 0.9): 'B',
        (0.7, 0.8): 'C',
        (0.6, 0.7): 'D',
    }
    
    for (low, high), grade in d.items():
        if low <= score <= high:
            return grade
        


# 2
def grader(score):
    if score > 1 or score < 0.6: return 'F'
    elif score >= 0.9: return 'A'
    elif score >= 0.8: return 'B'
    elif score >= 0.7: return 'C'
    else: return 'D'


# 3 
def grader(s):
    match s:
        case _ if s > 1 or s < 0.6: return 'F'
        case _ if s >= 0.9: return 'A'
        case _ if s >= 0.8: return 'B'
        case _ if s >= 0.7: return 'C'
        case _: return 'D'
