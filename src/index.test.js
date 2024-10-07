import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize first letter of a string", () => {
  expect(capitalize("huj")).toBe("Huj");
});

test("wrong type of input", () => {
  expect(() => capitalize(123)).toThrow("incorrect input");
});

test("wrong type of input", () => {
  expect(() => reverseString(123)).toThrow("incorrect input");
});

test("get reversed string", () => {
  expect(reverseString("huj")).toBe("juh");
});

test("calculator substract", () => {
  expect(calculator.substract(3, 2)).toBe(1);
});

test("calculator divide", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("calculator multiply", () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test("calc exists", () => {
  expect(calculator).toMatchObject({
    divide: expect.any(Function),
    substract: expect.any(Function),
    multiply: expect.any(Function),
  });
});

test("ceaserCipher encrypts", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("test punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("test object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
