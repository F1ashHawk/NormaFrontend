import React from 'react';
import {AuthInput, AuthInputErrorText, BasicAuthInputLabel} from './styled';
import HiddenEyeButton from '../../../../UI/HiddenEyeButton';

interface IAuthInputProps {
  fieldType: 'email' | 'password';
  fieldError: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  errorText?: string;
  isVisible?: boolean;
  handleSetVisible?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const BasicAuthInput: React.FC<IAuthInputProps> = ({
                                                     fieldType,
                                                     fieldError,
                                                     value,
                                                     onChange,
                                                     placeholder,
                                                     type,
                                                     errorText,
                                                     isVisible = true,
                                                     handleSetVisible,
                                                     onFocus,
                                                     onBlur
                                                   }) => {
  return (
    <BasicAuthInputLabel data-field={fieldType} data-in-error={fieldError}>
      <AuthInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <AuthInputErrorText data-in-error={fieldError}>{errorText}</AuthInputErrorText>
      {fieldType === 'password' && handleSetVisible &&
        <HiddenEyeButton isHidden={isVisible} handle={handleSetVisible} title={'Show password'}/>}
    </BasicAuthInputLabel>
  );
};

export default BasicAuthInput;