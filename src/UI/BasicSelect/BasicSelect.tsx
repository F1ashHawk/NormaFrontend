import React from 'react';
import {Select, SelectContainer, SelectLabel, SelectOption} from './styled.ts';

interface BasicSelectProps {
  label: string;
  options: Array<{value: string; label: string}>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

const BasicSelect :React.FC<BasicSelectProps> = ({label, options, onChange, value}) => {
  return (
    <SelectContainer>
      <SelectLabel>
        {label}
        <Select onChange={onChange} value={value}>
          {options.map(option => (
            <SelectOption key={option.value} value={option.value}>{option.label}</SelectOption>
            ))}
        </Select>
      </SelectLabel>
    </SelectContainer>
  );
};

export default BasicSelect;