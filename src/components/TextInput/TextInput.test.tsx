import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextInput } from './TextInput';
import { TextInputProps } from '../../utils/types';

describe('<TextInput /> tests', function () {
  test('It should match with the component snapshot', function () {
    const props = {
      name: 'email',
      label: 'Email',
      validation: {
        isActive: true,
        message: 'Email is required',
      },
    };
    const { asFragment } = render(<TextInput {...props} />);
    expect(asFragment).toMatchInlineSnapshot(`[Function]`);
  });

  test('It should call the provided event handler', function () {
    const props: TextInputProps = {
      name: 'email',
      label: 'Email',
      onChange: jest.fn(),
      onFocus: jest.fn(),
      validation: {
        isActive: false,
        message: '',
      },
    };

    render(<TextInput {...props} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'Hello World' },
    });

    expect(props.onChange).toHaveBeenCalled();

    fireEvent.focus(screen.getByLabelText('Email'));

    expect(props.onFocus).toHaveBeenCalled();
  });

  test('It should be focusable through the label', function () {
    const props: TextInputProps = {
      name: 'email',
      label: 'Email',
      validation: {
        isActive: false,
        message: '',
      },
    };

    render(<TextInput {...props} />);
    expect(screen.getByLabelText(/Email/i)).toHaveAccessibleName();
  });

  test('It should show the error if the validation failed', function () {
    const props: TextInputProps = {
      name: 'email',
      label: 'Email',
      validation: {
        isActive: true,
        message: 'Invalid email',
      },
    };

    render(<TextInput {...props} />);

    expect(screen.getByLabelText(/Email/i)).toHaveErrorMessage(
      /Invalid email/i
    );
  });
});
