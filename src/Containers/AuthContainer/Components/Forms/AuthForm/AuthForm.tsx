import React, {useState} from 'react';
import {AuthInputs, AuthInputsBlock, StyledForm} from '../Styles';
import BasicAuthInput from '../../BasicAuthInput';
import BasicButton from '../../../../../UI/BasicButton';
import {useAuthorizationMutation} from '../../../../../Store/API/auth.api.ts';
import {useNavigate} from 'react-router-dom';
import {throwNewToastError} from '../../../../../Helpers/MainUtils.ts';

const AuthForm :React.FC= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [authorization] = useAuthorizationMutation();

  const navigate = useNavigate()

  const handleSetEmail = (event :React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleSetPassword = (event :React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSetVisible = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setPasswordVisibility(!passwordVisibility);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (!email.length) return;

    if (!password.length) return;

    if (!!email.length && !!password.length) {
      authorization({email, password})
        .unwrap()
        .then((result) => {
          if (result.access) {
            navigate('/')
          }
        }).catch((error) => {
        console.log(error);

        if ('data' in error && error.data && 'non_field_errors' in error.data && error.data.non_field_errors) {
          console.log(error.data.non_field_errors);
          error.data.non_field_errors?.forEach((error :string) => {
            throwNewToastError(error)
          })
        }
      })
    }
  }

  return (
    <StyledForm>
      <AuthInputsBlock>
        <AuthInputs>
          <BasicAuthInput
            type="text"
            fieldType={'email'}
            fieldError={false}
            value={email}
            onChange={handleSetEmail}
            placeholder={'Адрес эл.почты'}
          />
          <BasicAuthInput
            type="password"
            placeholder={"Пароль"}
            onChange={handleSetPassword}
            value={password}
            fieldError={false}
            fieldType={'password'}
            handleSetVisible={handleSetVisible}
            isVisible={passwordVisibility}
          />
        </AuthInputs>
      </AuthInputsBlock>
      <BasicButton onClick={handleSubmit} size={'lg'} text={'Войти'} variant={'blue'}/>
    </StyledForm>
  );
};

export default AuthForm;