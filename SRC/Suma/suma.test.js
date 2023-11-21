const sum = require("./suma")

test("sumar 50 + 35 es igual a 85", () => {

    const result = sum(50, 35);

    expect(result).toBe(85);
  });

  test("sumar -10 + 15 es igual a 5", () => {
    expect(sum(-10, 15)).toBe(5);
  });

  test("sumar 85 + 10 es igual a 95", () => {
    expect(sum(85, 10)).toBe(95)
  });