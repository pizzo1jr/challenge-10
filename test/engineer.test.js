const Engineer = require("../js/lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "testemail@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
  const testValue = "engineer";
  const e = new Engineer("Foo", 1, "testemail@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "testemail@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});