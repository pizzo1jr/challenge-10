
test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "testemail@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "manager";
    const e = new Manager("Foo", 1, "testemail@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "testemail@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });