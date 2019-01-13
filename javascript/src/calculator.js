NEW_LINE_DELIMITER = '\\n';
COMMA_DELIMITER = ',';
MIN_NUMBER = 0;

function add(string) {
    if (!string)
        return MIN_NUMBER;

    const parsed = extractNumbers(string);

    return parsed.reduce((acc, value) => acc + value, MIN_NUMBER);
}

function extractNumbers(string) {
    return sanitize(string).map(item => parseInt(item));
}

function sanitize(string) {
    return string.split(NEW_LINE_DELIMITER)
        .join(COMMA_DELIMITER)
        .split(COMMA_DELIMITER);
}

module.exports = {
    add
};
