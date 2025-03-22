const { greeting } = require('../src/index');

test('greets user', () => {
  expect(greeting()).toBe('hello world!');
});

test('greets user with any name', () => {
  expect(greeting('bison')).toBe('hello bison!');
});
