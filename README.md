# String Calculator

The focus is to solve this kata using multiple languages.

# Acceptance Criteria

Create an `add` function that calculates the sum when given a string of numbers. It should be able to perform the following:
 * Calculate the sum when given:
    * An empty string, `""` should return `0`.
    * A string with multiple numbers, `"1,2,3,4,5"` should return `15`.
 * The `add` function should allow for comma or new line delimiters. Examples:
     * `1,2,3,4,5` should return `15`.
     * `1\\n2\\n3\\n4\\n5` should return `15`.
     * `1,2,3,4\\n5` should return `15`.
 * The `add` function should throw an exception when provided with negative numbers. Negative numbers should be present in message.
 * The `add` function should exclude any number greater than `1000`.
