/**
 * Converts a string to snake_case.
 * Example: "Hello World" -> "hello_world"
 *
 * @param {string} str
 * @returns {string}
 */
function toSnakeCase(str) {
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
}

module.exports = {
    toSnakeCase
};