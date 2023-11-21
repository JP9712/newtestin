const resta = require("./resta")

test("restar 35 - 10 es igual a 25", () => {

    const result = resta(35, 10);

    expect(result).toBe(25);
  });
  test("restar -80 - 10 es igual a -90", () => {

    const result = resta(-80, 10);

    expect(result).toBe(-90);
  });
  test("restar 15 - 9 es igual a 6", () => {

    const result = resta(15, 9);

    expect(result).toBe(6);
  });



  