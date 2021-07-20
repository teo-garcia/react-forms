import { UseFormRegisterReturn } from 'react-hook-form';

export type LayoutProps = {
  children?: React.ReactNode;
};

export type SignUpData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type TextInputProps = {
  name: string;
  label: string;
  validation: {
    isActive: boolean;
    message: string;
  };
  register?: () => UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
