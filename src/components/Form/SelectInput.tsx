import React from 'react';
import { FormInputProps } from '.';
import { ErrorComponent } from '../Elements';

export const SelectInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder = 'Select an option',
  register,
  errors,
  options = [],
  selectKey = 'key',
  selectValue = 'value',
  ...otherProps
}) => {
  const registerField = register ? register(name) : {};

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select
        className="form-control form-select"
        name={name}
        id={name}
        placeholder={placeholder}
        {...registerField}
        {...otherProps}
      >
        <option value="">{placeholder}</option>
        {options?.map(option => (
          <option key={option[selectKey]} value={option[selectValue]}>
            {option[selectKey]}
          </option>
        ))}
      </select>
      {errors?.[name] && <ErrorComponent>{errors?.[name]?.message as string}</ErrorComponent>}
    </div>
  );
};