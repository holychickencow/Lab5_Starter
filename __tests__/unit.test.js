// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone Numbers
test("310-980-5028", () => {
  expect(isPhoneNumber("310-980-5028")).toBe(true);
});

test("123-432-3452", () => {
  expect(isPhoneNumber("123-432-3452")).toBe(true);
});

test("1234323452", () => {
  expect(isPhoneNumber("1234323452")).toBe(false);
});

test("1234323452a", () => {
  expect(isPhoneNumber("1234323452a")).toBe(false);
});

// Emails
test("dshao@ucsd.edu", () => {
  expect(isEmail("dshao@ucsd.edu")).toBe(true);
})

test("dshao@gmail.com", () => {
  expect(isEmail("dshao@gmail.com")).toBe(true);
})

test("dshao@ucsd", () => {
  expect(isEmail("dshao@ucsd")).toBe(false);
})

test("dshao.com", () => {
  expect(isEmail("dshao.com")).toBe(false);
})

// Passwords
test("a1234323452", () => {
  expect(isStrongPassword("a1234323452")).toBe(true);
})

test("a1234323452b", () => {
  expect(isStrongPassword("a11234323452b")).toBe(true);
})

test("a12", () => {
  expect(isStrongPassword("a12")).toBe(false);
})

test("123123", () => {
  expect(isStrongPassword("123123")).toBe(false);
})

// Dates
test("01/01/2024", () => {
  expect(isDate("01/01/2024")).toBe(true);
})

test("01/1/2024", () => {
  expect(isDate("01/01/2024")).toBe(true);
})

test("01/01/23456", () => {
  expect(isDate("01/01/23456")).toBe(false);
})

test("01/01/24", () => {
  expect(isDate("01/01/24")).toBe(false);
})

// Hex Codes
test("#123", () => {
  expect(isHexColor("#123")).toBe(true);
})

test("#123123", () => {
  expect(isHexColor("#123123")).toBe(true);
})

test("12#", () => {
  expect(isHexColor("12#")).toBe(false);
})

test("#123123123", () => {
  expect(isHexColor("#123123123")).toBe(false);
})