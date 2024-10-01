# https://www.codewars.com/kata/5865918c6b569962950002a1


# 1
str_count = lambda s, l: s.count(l)


# 2
str_count = lambda s, l: sum(1 for le in s if le == l)