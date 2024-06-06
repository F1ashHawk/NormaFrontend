import React from 'react';
import {RadioButtonBlock, RadioButtonInput, RadioButtonLabel} from './styled';
import HelpButton from '../../Modules/CreateCampaignPage/Components/HelpButton';

interface IBasicRadioRowProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  checked: boolean;
  prompt?: string;
}

const BasicRadioRow: React.FC<IBasicRadioRowProps> = ({name, value, onChange, text, checked, prompt}) => {
  return (
    <RadioButtonBlock>
      <RadioButtonInput type={'radio'} name={name} value={value} onChange={onChange} id={value} checked={checked}/>
      <RadioButtonLabel htmlFor={value}>{text}</RadioButtonLabel>
      {prompt && <HelpButton popupText={prompt}/>}
    </RadioButtonBlock>
  );
};

export default BasicRadioRow;