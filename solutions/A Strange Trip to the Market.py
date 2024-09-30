# https://www.codewars.com/kata/55ccdf1512938ce3ac000056

import re

is_loch_ness_monster = lambda s: bool(re.search('tree fiddy|3\.50|three fifty', s))