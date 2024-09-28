# https://www.codewars.com/kata/56a25ba95df27b7743000016

import re

validate_code = lambda code: bool(re.match(r"^[123]", str(code)))