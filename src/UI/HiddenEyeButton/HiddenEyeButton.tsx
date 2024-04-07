import React from 'react';
import {HiddenButton} from './styled';

interface IHiddenButton {
  isHidden: boolean;
  handle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}

const HiddenEyeButton = ({isHidden, handle, title}: IHiddenButton) => {
  return (
    <HiddenButton onClick={handle} title={title}>
      {!isHidden ?
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.1083 7.896L7.8916 12.1127C7.34994 11.571 7.0166 10.8293 7.0166 10.0043C7.0166 8.35433 8.34993 7.021 9.99993 7.021C10.8249 7.021 11.5666 7.35433 12.1083 7.896Z"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M14.8499 4.81279C13.3915 3.71279 11.7249 3.11279 9.99987 3.11279C7.0582 3.11279 4.31654 4.84613 2.4082 7.84613C1.6582 9.02113 1.6582 10.9961 2.4082 12.1711C3.06654 13.2045 3.8332 14.0961 4.66654 14.8128"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M7.0166 16.2795C7.9666 16.6795 8.97493 16.8961 9.99993 16.8961C12.9416 16.8961 15.6833 15.1628 17.5916 12.1628C18.3416 10.9878 18.3416 9.01279 17.5916 7.83779C17.3166 7.40446 17.0166 6.99613 16.7083 6.61279"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.9252 10.5879C12.7085 11.7629 11.7502 12.7212 10.5752 12.9379" stroke="currentColor"
                strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.89199 12.1128L1.66699 18.3378" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M18.3334 1.6709L12.1084 7.8959" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> :
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9833 10.0043C12.9833 11.6543 11.6499 12.9877 9.99993 12.9877C8.34993 12.9877 7.0166 11.6543 7.0166 10.0043C7.0166 8.35433 8.34993 7.021 9.99993 7.021C11.6499 7.021 12.9833 8.35433 12.9833 10.0043Z"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M9.99987 16.8962C12.9415 16.8962 15.6832 15.1628 17.5915 12.1628C18.3415 10.9878 18.3415 9.01283 17.5915 7.83783C15.6832 4.83783 12.9415 3.10449 9.99987 3.10449C7.0582 3.10449 4.31654 4.83783 2.4082 7.83783C1.6582 9.01283 1.6582 10.9878 2.4082 12.1628C4.31654 15.1628 7.0582 16.8962 9.99987 16.8962Z"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
    </HiddenButton>
  );
};

export default HiddenEyeButton;