import React, {forwardRef, Ref} from 'react';
import {StyledErrorText, StyledInput, StyledLabel} from './styled';

interface IBasicInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value: string | number;
  size: 'lg';
  label: string;
  placeholder?: string;
  inError?: boolean;
  inErrorText?: string;
  type?: string;
}

const BasicInput = forwardRef(({
                                 onChange,
                                 value,
                                 size,
                                 label,
                                 placeholder,
                                 inError,
                                 type = 'text',
                                 inErrorText,
                                 onBlur,
                                 onFocus
                               }: IBasicInput, ref: Ref<HTMLLabelElement>) => (
  <StyledLabel ref={ref} size={size}>
    {label}
    <StyledInput
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      data-in-error={inError}
      onBlur={onBlur}
      onFocus={onFocus}
    />
    <StyledErrorText data-in-error={inError}>{inErrorText}</StyledErrorText>
  </StyledLabel>
));


export default React.memo(BasicInput);