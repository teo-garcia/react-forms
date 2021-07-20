import './TextInput.scss';
import * as React from 'react';
import { TextInputProps } from '../../utils/types';

function TextInput(props: TextInputProps) {
  const { name, label, validation, register = () => [], ...rest } = props;

  return (
    <label htmlFor={name}>
      {label}
      <input
        aria-errormessage={name.concat('1')}
        aria-invalid={validation.isActive ? 'true' : 'false'}
        id={name}
        {...register()}
        {...rest}
      />
      {validation.isActive && (
        <p id={name.concat('1')} aria-live="assertive">
          {validation.message}
          <span role="img" aria-labelledby="alert">
            ⚠️
          </span>
        </p>
      )}
    </label>
  );
}

export { TextInput };
