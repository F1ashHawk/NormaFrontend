import React from 'react';
import {StyledIcon} from "./styled";

interface IApplicationStoreIconProps {
  store: 'apple' | 'google';
}

const ApplicationStoreIcon: React.FC<IApplicationStoreIconProps> = React.memo(({store}) => {
  return (
    <StyledIcon>
      {store === 'apple' ?
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M12.8331 1.77856C12.9998 2.69523 12.5831 3.6119 12.0831 4.27856C11.5831 4.94523 10.6665 5.52856 9.74979 5.44523C9.58313 4.52856 9.99979 3.69523 10.4998 3.02856C11.0831 2.3619 11.9998 1.8619 12.8331 1.77856ZM15.4998 16.2786C15.9165 15.6119 16.1665 15.1952 16.4998 14.4452C13.9165 13.4452 13.4998 9.77856 16.0831 8.44523C15.3331 7.44523 14.2498 6.94523 13.1665 6.94523C12.4165 6.94523 11.9165 7.1119 11.4165 7.27856C10.9998 7.44523 10.6665 7.52856 10.2498 7.52856C9.74979 7.52856 9.41646 7.3619 8.91646 7.19523C8.41646 7.02856 7.91646 6.8619 7.33313 6.8619C6.16646 6.8619 4.91646 7.52856 4.16646 8.77856C3.08313 10.4452 3.24979 13.6952 4.99979 16.3619C5.74979 17.3619 6.58313 18.4452 7.66646 18.4452C8.16646 18.4452 8.41646 18.2786 8.74979 18.1952C9.16646 18.0286 9.58313 17.8619 10.2498 17.8619C10.9998 17.8619 11.3331 18.0286 11.7498 18.1952C12.0831 18.3619 12.3331 18.4452 12.8331 18.4452C13.9998 18.4452 14.8331 17.1952 15.4998 16.2786Z"
                stroke="#A7A7A7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          <path
            d="M17.8337 10.862L14.0837 12.7786L11.417 10.112L14.0837 7.44531L17.8337 9.27865C18.5003 9.61198 18.5003 10.612 17.8337 10.862Z"
            stroke="#A7A7A7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M14.0837 7.44524L11.417 10.1119L3.41699 18.1119L2.91699 18.3619C2.33366 18.6952 1.66699 18.1952 1.66699 17.5286V2.69524C1.66699 2.02857 2.33366 1.61191 2.91699 1.86191L14.0837 7.44524Z"
            stroke="#A7A7A7" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0837 12.7785L3.41699 18.1118L11.417 10.1118L14.0837 12.7785Z" stroke="#A7A7A7"
                strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.417 10.1118L3.41699 2.11182" stroke="#A7A7A7" strokeMiterlimit="10" strokeLinecap="round"
                strokeLinejoin="round"/>
        </svg>
      }
    </StyledIcon>
  );
});

export default ApplicationStoreIcon;