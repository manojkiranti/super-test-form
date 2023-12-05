import React from 'react';
import { InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';
import { ErrorComponent } from '../Elements';

import ERROR_ICON from "../../../src/assets/images/errorIcon.svg";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  placeholder?: string;
  register?: any;
  errors?: FieldErrors;
  rows?: string | number;
  defaultValue?: string | number;
  options?: { [key: string]: any }[];
  selectKey?: string;
  selectValue?: string;
}

const TextInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  register,
  errors,
  rows,
  ...otherProps
}) => {
  const registerField = register ? register(name) : {};

  return (
    <>
      <div className="form-input">
        <input
          type={type}
          className="input-control"
          placeholder={placeholder}
          id={name}
          name={name}
          {...registerField}
          rows={rows}
          {...otherProps}
        />
        {errors?.[name] && (
          <div className="error-wrapper">
            <ErrorComponent>{errors?.[name]?.message as string}</ErrorComponent>
            <img src={ERROR_ICON} alt="Error" className="error-icon" />
          </div>
        )}
      </div>

    </>
  );
};

export const Input: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  rows,
  ...otherProps
}: FormInputProps) => (
  <div className="form-group">
    {label && <label htmlFor={name}>{label}</label>}
    <TextInput
      type={type}
      name={name}
      placeholder={placeholder}
      errors={errors}
      register={register}
      rows={rows}
      {...otherProps}
    />
  </div>
);
