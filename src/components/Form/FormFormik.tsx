import * as React from 'react';
import { useFormik } from 'formik';
import { SignUpData } from '../../utils/types';
import { TextInput } from '../TextInput/TextInput';
import { Button } from '../Button/Buttton';
import { validate } from '../../utils/validate';

const initialValues: SignUpData = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function FormFormik() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log('Hey');

        alert(JSON.stringify(values, null, 2));
      },
      validate,
    });

  const fieldsValidation = {
    name: {
      isActive: Boolean(errors['name'] && touched['name']),
      message: errors['name'] ?? '',
    },
    lastName: {
      isActive: Boolean(errors['lastName'] && touched['lastName']),
      message: errors['lastName'] ?? '',
    },
    email: {
      isActive: Boolean(errors['email'] && touched['email']),
      message: errors['email'] ?? '',
    },
    password: {
      isActive: Boolean(errors['password'] && touched['password']),
      message: errors['password'] ?? '',
    },
    confirmPassword: {
      isActive: Boolean(
        errors['confirmPassword'] && touched['confirmPassword']
      ),
      message: errors['confirmPassword'] ?? '',
    },
  };

  return (
    <section>
      <h2>Formik</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="name"
          name="name"
          type="text"
          validation={fieldsValidation.name}
        />
        <TextInput
          label="last name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
          type="text"
          validation={fieldsValidation.lastName}
        />
        <TextInput
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="text"
          validation={fieldsValidation.email}
        />
        <TextInput
          label="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          validation={fieldsValidation.password}
        />
        <TextInput
          label="confirm password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmPassword"
          type="password"
          validation={fieldsValidation.confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </section>
  );
}

export { FormFormik };
