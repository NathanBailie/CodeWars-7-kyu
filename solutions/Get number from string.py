# https://www.codewars.com/kata/57a37f3cbb99449513000cd8

import re

get_number_from_string = lambda s: int(re.sub('[^\d]', '', s))