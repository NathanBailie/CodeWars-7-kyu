# https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023

import re

validate_usr = lambda s: bool(re.search('^[a-z_\d]{4,16}$', s))