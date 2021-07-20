import './Button.scss';
import * as React from 'react';
import { ButtonProps } from '../../utils/types';

function Button(props: ButtonProps) {
  return <button {...props} />;
}

export { Button };
