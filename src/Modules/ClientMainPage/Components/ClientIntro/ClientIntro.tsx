import {IntroContainer, IntroHeading, IntroSearchBlock, IntroSearchButton, IntroSearchPicture} from './styled.ts';
import {useNavigate} from 'react-router-dom';

const ClientIntro = () => {
  const navigate  =  useNavigate();

  const handleOpenOrder = () => {
    navigate('/new-order/step-1')
  }

  return (
    <IntroContainer>
      <IntroHeading>Расскажите о&#160;задаче, и&#160;специалист найдется</IntroHeading>
      <IntroSearchBlock>
        <IntroSearchButton onClick={handleOpenOrder}>Специалист или услуга</IntroSearchButton>
      </IntroSearchBlock>
      <IntroSearchPicture/>
    </IntroContainer>
  );
};

export default ClientIntro;