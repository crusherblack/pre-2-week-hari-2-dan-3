const { expect } = require("@jest/globals");
const { sum, helloWorld, increament } = require("./formula");

test("testing function penjumlahan hasilnya 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("testing textnya hello world gak", () => {
  expect(helloWorld()).toBe("hello world");
});

test("nilai sequence apakah benar array 1-15", () => {
  expect(increament(15)).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
  ]);
});
