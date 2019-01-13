function add(string) {
    if (!string)
        return 0;

    const parsed = extractNumbers(string);

    return parsed.reduce((acc, value) => acc + value, 0);
}

function extractNumbers(string) {
   return sanitize(string).map(item => parseInt(item));
}

function sanitize(string) {
    return string.split(',');
}

module.exports = {
    add
};
