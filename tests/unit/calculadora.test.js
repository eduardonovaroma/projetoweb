const { sum, divide } = require('../../app/repositories/Calculadora.js');


test('somar 1 + 2 deve ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});