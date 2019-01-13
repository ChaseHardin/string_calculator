NEW_LINE_DELIMITER = '\\n';
COMMA_DELIMITER = ',';
MIN_NUMBER = 0;
MAX_NUMBER = 1000;

function add(string) {
    if (!string)
        return MIN_NUMBER;

    const parsed = extractNumbers(string);
    const negatives = filterBy(parsed, MIN_NUMBER);

    if (negatives.length > 0)
        return `Negatives not allowed: [${negatives}]`;

    return parsed.reduce((acc, value) => acc + value, MIN_NUMBER);
}

function extractNumbers(string) {
    const parsed = sanitize(string).map(item => parseInt(item));
    return filterBy(parsed, MAX_NUMBER);
}

function filterBy(parsed, value) {
    return parsed.filter(item => item < value);
}

function sanitize(string) {
    return string.split(NEW_LINE_DELIMITER)
        .join(COMMA_DELIMITER)
        .split(COMMA_DELIMITER);
}

module.exports = {
    add
};
