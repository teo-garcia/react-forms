import { render, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';
import { FormFormik } from './FormFormik';

describe('<FormFormik /> tests', function () {
  test('It should match with the component snapshot', function () {
    const { asFragment } = render(<FormFormik />);
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <section>
    <h2>
      Formik
    </h2>
    <form>
      <label
        for="name"
      >
        name
        <input
          aria-errormessage="name1"
          aria-invalid="false"
          id="name"
          type="text"
          value=""
        />
      </label>
      <label
        for="lastName"
      >
        last name
        <input
          aria-errormessage="lastName1"
          aria-invalid="false"
          id="lastName"
          type="text"
          value=""
        />
      </label>
      <label
        for="email"
      >
        Email
        <input
          aria-errormessage="email1"
          aria-invalid="false"
          id="email"
          type="text"
          value=""
        />
      </label>
      <label
        for="password"
      >
        password
        <input
          aria-errormessage="password1"
          aria-invalid="false"
          id="password"
          type="password"
          value=""
        />
      </label>
      <label
        for="confirmPassword"
      >
        confirm password
        <input
          aria-errormessage="confirmPassword1"
          aria-invalid="false"
          id="confirmPassword"
          type="password"
          value=""
        />
      </label>
      <button
        type="submit"
      >
        Sign Up
      </button>
    </form>
  </section>
</DocumentFragment>
`);
  });

  test('It should validate empty touched fields', function () {
    render(<FormFormik />);
    const field = screen.getAllByLabelText(/name/i).length;
    console.log(field);
  });
});
