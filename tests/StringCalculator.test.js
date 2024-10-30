const add = require('../src/StringCalculator');

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
});

test("returns the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
});

test("returns the sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("ignores trailing delimiters", () => {
    expect(add("1,\n")).toBe(1);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|4")).toBe(9);
    expect(add("//#\n5#6#7")).toBe(18);
});

test("throws an error when negative numbers are present", () => {
    expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});

test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
});

test("supports multi-character custom delimiters", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});