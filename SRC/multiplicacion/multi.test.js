const multi = require('./multi');

test('multipicacion de 5*3 es 15', () => {
  expect(multi(5, 3)).toBe(15);
});
test("multiplicar 0 * 25 es igual a 0", () => {
  expect(multi(0, 25)).toBe(0);
});
test('multipicacion de 55*3 es 165', () => {
  expect(multi(55, 3)).toBe(165);
});

