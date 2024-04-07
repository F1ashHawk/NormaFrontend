import React, {useCallback, useState} from 'react';
import {AuthInputs, AuthInputsBlock} from '../../Styles';
import BasicInput from '../../../../../../UI/BasicInput';
import BasicSelect from '../../../../../../UI/BasicSelect';

interface RegFormDataProps {
  regMode: 'client' | 'master';
}

const MASTERS_TYPES : {label: string, value: string}[] = [{label: 'ИП', value: 'individual'}, {label: 'Самозанятый', value: 'self-employed'}, {label: 'Компания', value: 'company'}]

const RegFormData :React.FC<RegFormDataProps> = ({regMode}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [masterType, setMasterType] = useState('self-employed');

  const handleSetEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, [setEmail])

  const handleSetPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, [setPassword])

  const handleSetConfirmPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  }, [setConfirmPassword])

  const handleSetName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, [setName])

  const handleSetSurname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  }, [setSurname])

  const handleSetMasterType = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setMasterType(event.target.value);
  },[setMasterType])

  return (
    <AuthInputsBlock>
      <AuthInputs>
        {regMode === 'master' &&
          <BasicSelect
            options={MASTERS_TYPES}
            label={'Тип предпринемателя'}
            onChange={handleSetMasterType}
            value={masterType}
          />

        }
        <BasicInput onChange={handleSetEmail} value={email} size={'lg'} label={'Email'}/>
        <BasicInput onChange={handleSetPassword} value={password} size={'lg'} label={'Пароль'} type={"password"}/>
        <BasicInput onChange={handleSetConfirmPassword} value={confirmPassword} size={'lg'} label={'Подтверждение пароля'} type={"password"}/>
        <BasicInput onChange={handleSetName} value={name} size={'lg'} label={'Имя'}/>
        <BasicInput onChange={handleSetSurname} value={surname} size={'lg'} label={'Фамилия'}/>
      </AuthInputs>

    </AuthInputsBlock>
  );
};

export default RegFormData;