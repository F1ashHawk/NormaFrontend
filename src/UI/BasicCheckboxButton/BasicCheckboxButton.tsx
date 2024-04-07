import React from 'react';
import {CheckboxButtonBlock, CheckboxButtonInput, CheckboxButtonLabel, CheckboxButtonMark} from './styled';

interface IBasicCheckboxButton {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  id?: string;
}

const BasicCheckboxButton: React.FC<IBasicCheckboxButton> = ({
                                                               name,
                                                               checked,
                                                               value,
                                                               onChange,
                                                               isDisabled,
                                                               id = name + value
                                                             }) => {
  return (
    <CheckboxButtonBlock data-is-disabled={isDisabled}>
      <CheckboxButtonInput
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        id={id}
        disabled={isDisabled}
      />
      <CheckboxButtonLabel htmlFor={id}>
        <CheckboxButtonMark>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8" fill="none">
            <path d="M9.62922 1.40145L4.67947 6.3512C4.28895 6.74172 3.65578 6.74172 3.26526 6.3512L0.5 3.58594"
                  stroke="currentColor" strokeLinecap="round"/>
          </svg>
        </CheckboxButtonMark>
      </CheckboxButtonLabel>
    </CheckboxButtonBlock>
  );
};

export default BasicCheckboxButton;