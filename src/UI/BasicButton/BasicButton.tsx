import React from 'react';
import {StyledButton} from './styled';

interface IMyButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  size: 'sm' | 'md' | 'lg',
  text: string,
  disabled?: boolean,
  variant: 'blue' | 'white' | 'red';
  title?: string
}
const BasicButton = ({onClick, text, size, disabled, variant, title}: IMyButton) => {
  return (
    <StyledButton
      onClick={onClick}
      data-size={size}
      disabled={disabled}
      data-variant={variant}
      title={title}>
      {text}
    </StyledButton>
  );
};

export default BasicButton;