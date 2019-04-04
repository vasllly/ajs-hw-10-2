import Validator from '../src/js/Validator';

test('validate is "Vasia"', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia');
  const expected = true;
  expect(received).toBe(expected);
});

test('validate is "Vasia."', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia.');
  const expected = false;
  expect(received).toBe(expected);
});

test('validate is "Vasia1"', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia1');
  const expected = false;
  expect(received).toBe(expected);
});

test('validate is "Vasia s"', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia s');
  const expected = true;
  expect(received).toBe(expected);
});

test('validate is "Vasia        "', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia        ');
  const expected = false;
  expect(received).toBe(expected);
});

test('validate is "Vasia "', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasia ');
  const expected = false;
  expect(received).toBe(expected);
});

test('validate is " Vasia"', () => {
  const validator = new Validator();
  const received = validator.validateUsername(' Vasia');
  const expected = false;
  expect(received).toBe(expected);
});

test('validate is "Vasya-s"', () => {
  const validator = new Validator();
  const received = validator.validateUsername('Vasya-s');
  const expected = true;
  expect(received).toBe(expected);
});

test('validate is "-V---a-"', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-V---a-');
  const expected = true;
  expect(received).toBe(expected);
});
