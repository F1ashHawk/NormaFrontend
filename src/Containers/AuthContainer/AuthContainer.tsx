import React from 'react';
import {AuthPageWrapper} from './styled.ts';
import AuthModule from './Modules/AuthModule/AuthModule.tsx';

const AuthContainer :React.FC = () => {
  return (
    <AuthPageWrapper>
      <AuthModule />
    </AuthPageWrapper>
  );
};

export default AuthContainer;