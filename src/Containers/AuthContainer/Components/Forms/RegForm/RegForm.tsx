import React, {useState} from 'react';
import {StyledForm} from '../Styles';
import ModeSelector from './Modes/ModeSelector.tsx';
import RegFormData from './Modes/RegFormData.tsx';
import BasicButton from '../../../../../UI/BasicButton';

const RegForm :React.FC = () => {
  const [regMode, setRegMode] = useState<'client' | 'master' | null>(null);

  const handleSetRegMode = (mode: 'client' |'master') => {
    setRegMode(mode);
  }

  const handleSubmit = () => {}

  return (
    <StyledForm>
      {regMode === null && (
        <ModeSelector handleSetRegMode={handleSetRegMode}/>
      )}
      {(regMode === 'client' || regMode === 'master') && (
        <RegFormData regMode={regMode}/>
      )}
      <BasicButton onClick={handleSubmit} size={'lg'} text={'Войти'} variant={'blue'}/>
    </StyledForm>
  );
};

export default RegForm;