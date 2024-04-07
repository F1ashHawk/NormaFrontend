import React from 'react';
import BasicCopyButton from '../BasicCopyButton';
import {ReadableInput, ReadableInputCopyButton, ReadableInputLabel} from './styled';
import {throwNewToastSuccess} from '../../Utils/MainUtils';

interface IReadableBasicInputProps {
  inputValue: string;
  size?: 'md' | 'lg';
}

const ReadableBasicInput: React.FC<IReadableBasicInputProps> = ({inputValue, size = 'lg'}) => {
  const handleSelectWalletKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      event.target.select();
    }
  };

  const handleCopyClick = () => {
    if (inputValue) {
      navigator.clipboard.writeText(inputValue)
        .then(() => {
          throwNewToastSuccess('Referral link copied successfully');
        })
        .catch((error) => {
          console.error('Не удалось скопировать текст: ', error);
        });
    }
  };

  return (
    <ReadableInputLabel>
      <ReadableInput value={inputValue} readOnly onFocus={handleSelectWalletKey} data-size={size}/>
      <ReadableInputCopyButton><BasicCopyButton onClick={handleCopyClick}/></ReadableInputCopyButton>
    </ReadableInputLabel>
  );
};

export default ReadableBasicInput;