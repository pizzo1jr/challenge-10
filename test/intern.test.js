const Intern = require("../js/lib/intern");

test("Can set school via constructor", () => {
  const testValue = "Michigan State";
  const e = new Intern("Foo", 1, "testemail@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "intern";
  const e = new Intern("Foo", 1, "testemail@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Michigan State";
  const e = new Intern("Foo", 1, "testemail@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});