const division = require("./division")

test("Dividir 50 / 2 es igual a 25", () => {
    expect(division(50, 2)).toBe(25);
});

test('dividir 0 por cualquier otro número distinto a cero es igual a 0', () => {
    expect(division(0, 7)).toBe(0);
});

test("Dividir no acepta numeros decimales", () => {
    expect(division(3.5, 2)).toBeNaN();
});