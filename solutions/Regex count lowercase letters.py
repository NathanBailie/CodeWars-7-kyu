# https://www.codewars.com/kata/56a946cd7bd95ccab2000055

import re

lowercase_count = lambda s: len(re.sub('[^a-z]', '', s))