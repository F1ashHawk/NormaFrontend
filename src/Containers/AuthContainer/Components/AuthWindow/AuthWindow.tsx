import React from 'react';
import {AuthSelector, AuthSelectorButton, AuthWindowWrapper} from './styled.ts';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import AuthForm from '../Forms/AuthForm/AuthForm.tsx';
import RegForm from '../Forms/RegForm/RegForm.tsx';

interface AuthWindowProps {

}

const AuthWindow :React.FC<AuthWindowProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const AuthRoutes = [
    {
      path: '/login',
      element: <AuthForm/>
    },
    {
      path: '/register',
      element: <RegForm/>
    }
  ]

  const handleChangeAuthMode = (mode :string) => {
    switch (mode) {
      case 'signIn' :{
        navigate('/login')
        break
      }
      case 'signUp' :{
        navigate('/register')
        break
      }
    }
  }

  return (
    <AuthWindowWrapper>
      <AuthSelector>
        <AuthSelectorButton disabled={location.pathname === '/login'} onClick={() => handleChangeAuthMode('signIn')}>Вход</AuthSelectorButton>
        <AuthSelectorButton disabled={location.pathname === '/register'} onClick={() => handleChangeAuthMode('signUp')}>Регистрация</AuthSelectorButton>
      </AuthSelector>
      <Routes>
        {AuthRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}/>
        ))}
      </Routes>
    </AuthWindowWrapper>
  );
};

export default AuthWindow;