import React from 'react';
import {RemoveButton} from './styled';

interface IRemoveCrossButton {
  onClick: () => void;
  title?: string;
}

const RemoveCrossButton = ({onClick, title}: IRemoveCrossButton) => {
  return (
    <RemoveButton onClick={onClick} title={title}>
      <svg width="16" height="16" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M20.1532 1.95713C20.5437 1.5666 20.5437 0.933429 20.1532 0.542898C19.7627 0.152367 19.1295 0.152367 18.739 0.542898L10.6972 8.58494L2.65546 0.542898C2.26495 0.152367 1.63179 0.152367 1.24127 0.542898C0.850755 0.933429 0.850755 1.5666 1.24127 1.95713L9.28305 9.99918L1.24015 18.0423C0.849637 18.4329 0.849637 19.066 1.24015 19.4566C1.63067 19.8471 2.26383 19.8471 2.65434 19.4566L10.6972 11.4134L18.7401 19.4566C19.1307 19.8471 19.7638 19.8471 20.1543 19.4566C20.5448 19.066 20.5448 18.4329 20.1543 18.0423L12.1114 9.99918L20.1532 1.95713Z"
              fill="currentColor"/>
      </svg>
    </RemoveButton>
  );
};

export default RemoveCrossButton;