import React from 'react';
import {CopyButton} from './styled';

interface IBasicCopyButtonProps {
  onClick: () => void;
}

const BasicCopyButton: React.FC<IBasicCopyButtonProps> = ({onClick}) => {
  return (
    <CopyButton onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M14.167 11.1663V13.6663C14.167 16.9997 12.8337 18.333 9.50033 18.333H6.33366C3.00033 18.333 1.66699 16.9997 1.66699 13.6663V10.4997C1.66699 7.16634 3.00033 5.83301 6.33366 5.83301H8.83366"
          stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1663 11.1663H11.4997C9.49967 11.1663 8.83301 10.4997 8.83301 8.49967V5.83301L14.1663 11.1663Z"
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.66699 1.66699H13.0003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.83301 4.16699C5.83301 2.78366 6.94967 1.66699 8.33301 1.66699H10.5163" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3329 6.66699V11.8253C18.3329 13.117 17.2829 14.167 15.9912 14.167" stroke="currentColor"
              strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.333 6.66699H15.833C13.958 6.66699 13.333 6.04199 13.333 4.16699V1.66699L18.333 6.66699Z"
              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </CopyButton>
  );
};

export default BasicCopyButton;