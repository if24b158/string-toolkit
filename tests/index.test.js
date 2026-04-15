const { toSnakeCase, toKebabCase } = require("../src/index");

test("converts a string to snake_case", () => {
    expect(toSnakeCase("Hello World")).toBe("hello_world");
});

test("converts a string to kebab-case", () => {
    expect(toKebabCase("Hello World")).toBe("hello-world");
});