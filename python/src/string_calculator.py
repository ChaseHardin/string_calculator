NEW_LINE_DELIMITER = '\\n'
COMMA_DELIMITER = ','
MAX_NUMBER = 1000
MIN_NUMBER = 0


def add(string):
    if not string:
        return MIN_NUMBER

    parsed = _extract_numbers(string)
    negatives = _filter_less_than(parsed, MIN_NUMBER)

    if negatives:
        raise Exception('Negatives not allowed: {numbers}'.format(numbers=negatives))

    return sum(_filter_less_than(parsed, MAX_NUMBER))


def _filter_less_than(parsed, value):
    return [number for number in parsed if number < value]


def _extract_numbers(string):
    return [int(value) for value in (_sanitize(string).split(COMMA_DELIMITER))]


def _sanitize(string):
    return string.replace(NEW_LINE_DELIMITER, COMMA_DELIMITER)
