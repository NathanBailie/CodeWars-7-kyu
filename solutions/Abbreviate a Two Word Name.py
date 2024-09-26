# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

def abbrev_name(name):
    f, s = name.split(' ')
    return f"{f[0].upper()}.{s[0].upper()}"