import * as React from 'react';
import { useForm } from 'react-hook-form';
import { SignUpData } from '../../utils/types';
import { Button } from '../Button/Buttton';
import { TextInput } from '../TextInput/TextInput';

const initialValues: SignUpData = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function FormHook() {
  const { register, handleSubmit, formState } = useForm<SignUpData>({
    defaultValues: initialValues,
    mode: 'onTouched',
  });

  const onSubmit = () => {
    console.log(formState);
  };

  const registerFields = {
    name: () =>
      register('name', {
        required: 'Name is required',
      }),
    lastName: () =>
      register('lastName', {
        required: 'Last Name is required',
      }),
    email: () =>
      register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Invalid email',
        },
      }),
    password: () =>
      register('password', {
        required: 'Password is required',
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
          message: 'Password must be stronger',
        },
      }),
    confirmPassword: () =>
      register('confirmPassword', {
        required: 'Confirm Password is required',
        validate: {
          isMatchingWithPassword: (confirmPassword) =>
            confirmPassword === '' || 'HEY',
        },
      }),
  };

  const fieldsValidation = {
    name: {
      isActive: Boolean(
        formState.errors['name'] && formState.touchedFields['name']
      ),
      message: formState.errors['name']?.message ?? '',
    },
    lastName: {
      isActive: Boolean(
        formState.errors['lastName'] && formState.touchedFields['lastName']
      ),
      message: formState.errors['lastName']?.message ?? '',
    },
    email: {
      isActive: Boolean(
        formState.errors['email'] && formState.touchedFields['email']
      ),
      message: formState.errors['email']?.message ?? '',
    },
    password: {
      isActive: Boolean(
        formState.errors['password'] && formState.touchedFields['password']
      ),
      message: formState.errors['password']?.message ?? '',
    },
    confirmPassword: {
      isActive: Boolean(
        formState.errors['confirmPassword'] &&
          formState.touchedFields['confirmPassword']
      ),
      message: formState.errors['confirmPassword']?.message ?? '',
    },
  };

  return (
    <section>
      <h2>Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="name"
          name="name"
          validation={fieldsValidation.name}
          register={registerFields.name}
        />
        <TextInput
          label="last name"
          name="lastName"
          validation={fieldsValidation.lastName}
          register={registerFields.lastName}
        />
        <TextInput
          label="email"
          name="email"
          validation={fieldsValidation.email}
          register={registerFields.email}
        />
        <TextInput
          label="password"
          name="password"
          type="password"
          validation={fieldsValidation.password}
          register={registerFields.password}
        />
        <TextInput
          label="confirm password"
          name="confirmPassword"
          type="password"
          validation={fieldsValidation.confirmPassword}
          register={registerFields.confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </section>
  );
}

export { FormHook };
