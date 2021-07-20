import { SignUpData } from './types';

function validate(values: SignUpData) {
  const errors: Partial<SignUpData> = {};
  const isEmpty = /^$|\s+/;
  const isEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // email validation with unicode support
  const isPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // 6 characters at least, 1 lowercase, 1 uppercase, 1 digit
  const { name, lastName, email, password, confirmPassword } = values;

  if (isEmpty.test(name)) {
    errors.name = 'Name is required';
  }

  if (isEmpty.test(lastName)) {
    errors.lastName = 'Last name is required';
  }

  if (isEmpty.test(email)) {
    errors.email = 'Email is required';
  }

  if (isEmpty.test(password)) {
    errors.password = 'Password is required';
  }

  if (isEmpty.test(confirmPassword)) {
    errors.confirmPassword = 'Confirm Password is required';
  }

  if (!isEmailRegex.test(email)) {
    errors.email = 'Email is not valid';
  }

  if (!isPasswordRegex.test(password)) {
    errors.password = 'Password must be stronger';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

export { validate };
