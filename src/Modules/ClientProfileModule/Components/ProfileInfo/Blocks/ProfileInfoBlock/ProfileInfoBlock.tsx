import React from 'react';
import {InfoBlock, InfoGreySpan, InfoMainSpan, InfoRow} from './styled.ts';

const ProfileInfoBlock :React.FC = () => {
  return (
    <InfoBlock>
      <InfoRow>
        <InfoGreySpan>Зарегистрирован</InfoGreySpan>
        <InfoMainSpan>06.06.2024</InfoMainSpan>
      </InfoRow>
      <InfoRow>
        <InfoGreySpan>Номер телефона</InfoGreySpan>
        <InfoMainSpan>Не подтвержден</InfoMainSpan>
      </InfoRow>
      <InfoRow>
        <InfoGreySpan>Электронная почта</InfoGreySpan>
        <InfoMainSpan>Подтверждена</InfoMainSpan>
      </InfoRow>
    </InfoBlock>
  );
};

export default ProfileInfoBlock;