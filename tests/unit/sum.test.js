const sum = require('../../app/repositories/Sum.js');

test('Testando se o ceu é azul', function() {
  let cordoceu = 'azul';

  expect(cordoceu).toBe('azul');
});

test('somar 1 + 2 deve ser igual a 3', () => {
  let resultado = sum(1, 2);
  expect(resultado).toBe(3);
});

test('somar 10 + 20 deve ser igual a 30', () => {
  expect(sum(10, 20)).toBe(30);
});

test('Outro teste de soma', function(){
  const resultado = sum(8, 6);
  expect(resultado).toBe(14);
  expect(resultado).toBeGreaterThan(10);
})
