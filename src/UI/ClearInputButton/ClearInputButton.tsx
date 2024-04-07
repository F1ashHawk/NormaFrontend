import React from 'react';
import {ClearButton} from "./styled";

interface ClearInputButtonProps {
  onClick: () => void;
  fieldType?: 'input' | 'select';
}

const ClearInputButton: React.FC<ClearInputButtonProps> = ({onClick, fieldType}) => {
  return (
    <ClearButton onClick={onClick} data-type={fieldType}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M12 4.17188C7.58172 4.17188 4 7.7536 4 12.1719C4 16.5902 7.58172 20.1719 12 20.1719C16.4183 20.1719 20 16.5902 20 12.1719C20 7.7536 16.4183 4.17188 12 4.17188ZM14.6094 14.7798C14.4142 14.9751 14.0976 14.9751 13.9023 14.7798L12.001 12.8785L10.0996 14.7798C9.90438 14.9751 9.5878 14.9751 9.39254 14.7798C9.19728 14.5846 9.19728 14.268 9.39254 14.0727L11.2939 12.1714L9.39382 10.2713C9.19856 10.0761 9.19856 9.75949 9.39382 9.56423C9.58908 9.36897 9.90566 9.36897 10.1009 9.56423L12.001 11.4643L13.9012 9.56407C14.0965 9.3688 14.413 9.3688 14.6083 9.56407C14.8036 9.75933 14.8036 10.0759 14.6083 10.2712L12.7081 12.1714L14.6094 14.0727C14.8047 14.268 14.8047 14.5846 14.6094 14.7798Z"
              fill="currentColor"/>
      </svg>
    </ClearButton>
  );
};

export default ClearInputButton;