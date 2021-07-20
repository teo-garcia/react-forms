import { validate } from './validate';

describe('validate tests', function () {
  test('It should catch empty fields', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    expect(result.name).toBeDefined();
    expect(result.lastName).toBeDefined();
    expect(result.email).toBeDefined();
    expect(result.password).toBeDefined();
    expect(result.confirmPassword).toBeDefined();
  });

  test('It should catch invalid emails', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: 'test',
      password: '',
      confirmPassword: '',
    });
    expect(result.email).toBe('Email is not valid');
  });

  test('It should not catch valid emails', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: 'juanmateogarcia96@gmail.com',
      password: '',
      confirmPassword: '',
    });
    expect(result.email).toBeUndefined();
  });

  test('It should catch invalid passwords', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: '',
      password: '123456',
      confirmPassword: '',
    });
    expect(result.password).toBe('Password must be stronger');
  });

  test('It should not catch valid passwords', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: 'juanmateogarcia96@gmail.com',
      password: 'LmX174401',
      confirmPassword: '',
    });
    expect(result.password).toBeUndefined();
  });

  test('It should catch wrong confirmPassword', function () {
    const result = validate({
      name: '',
      lastName: '',
      email: '',
      password: '123456',
      confirmPassword: '123457',
    });
    expect(result.confirmPassword).toBe('Passwords do not match');
  });
});
