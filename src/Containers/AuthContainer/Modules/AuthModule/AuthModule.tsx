import React from 'react';
import {
  AuthFormBlock,
  AuthLogo,
  AuthLogoBlock,
  StyledAuthPage
} from './styled.ts';
import AuthWindow from '../../Components/AuthWindow/AuthWindow.tsx';

export interface IUserData {
  username: string,
  password: string,
  retryPassword?: string,
  authMode: 'singIn' | 'singUp'
}

const AuthModule :React.FC = () => {
  return (
    <StyledAuthPage>
      <AuthLogoBlock>
        <AuthLogo>
        </AuthLogo>
      </AuthLogoBlock>
      <AuthFormBlock>
        <AuthWindow/>
      </AuthFormBlock>
    </StyledAuthPage>
  );
};

export default AuthModule;