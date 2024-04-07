import React from 'react';
import {StyledButton} from './styled';

interface IMyButton {
  handle :(e :React.MouseEvent<HTMLButtonElement> | any) => void,
  text :string,
  disabled? :boolean,
  variant :'active' | 'nonActive';
}

const MyButton = ({handle, text, disabled, variant} :IMyButton) => {
  return (
    <StyledButton onClick={handle} disabled={disabled} variant={variant}>{text}</StyledButton>
  );
};

export default MyButton;