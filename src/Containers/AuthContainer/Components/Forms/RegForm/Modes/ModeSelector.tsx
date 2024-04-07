import React from 'react';
import BasicButton from '../../../../../../UI/BasicButton';
import {RegButtonsBlock} from '../../Styles';

interface ModeSelectorProps {
  handleSetRegMode: (mode: 'client' |'master') => void
}

const ModeSelector :React.FC<ModeSelectorProps> = ({handleSetRegMode}) => {
  return (
    <RegButtonsBlock>
      <BasicButton
        onClick={(event) => {
          event.preventDefault();
          handleSetRegMode('client');
        }}
        size={'lg'}
        text={'Регистрация для клиентов'}
        variant={'blue'}/>
      <BasicButton
        onClick={(event) => {
          event.preventDefault();
          handleSetRegMode('master');
        }}
        size={'lg'}
        text={'Регистрация для мастеров'}
        variant={'blue'}/>
    </RegButtonsBlock>
  );
};

export default ModeSelector;