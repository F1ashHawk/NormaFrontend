import React from 'react';
import {AuthPageWrapper} from './styled.ts';
import {AuthFormBlock, AuthLogo, AuthLogoBlock, StyledAuthPage} from './styled.ts';
import AuthWindow from './Components/AuthWindow/AuthWindow.tsx';

export interface IUserData {
  username: string,
  password: string,
  retryPassword?: string,
  authMode: 'singIn' | 'singUp'
}

const AuthContainer :React.FC = () => {
  return (
    <AuthPageWrapper>
      <StyledAuthPage>
        <AuthLogoBlock>
          <AuthLogo>
          </AuthLogo>
        </AuthLogoBlock>
        <AuthFormBlock>
          <AuthWindow/>
        </AuthFormBlock>
      </StyledAuthPage>
    </AuthPageWrapper>
  );
};

export default AuthContainer;