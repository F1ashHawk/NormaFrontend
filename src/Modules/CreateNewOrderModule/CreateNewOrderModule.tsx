import React from 'react';
import {
  NewOrderCloseButton,
  NewOrderComponent,
} from './styled.ts';
import RemoveCrossButton from '../../UI/RemoveCrossButton';
import {useNavigate, useParams} from 'react-router-dom';
import NewOrderSearchStep from './Components/NewOrderSearchStep/NewOrderSearchStep.tsx';
import NewOrderDataStep from './Components/NewOrderDataStep/NewOrderDataStep.tsx';
import NewOrderSubmitStep from './Components/NewOrderSubmitStep/NewOrderSubmitStep.tsx';

const CreateNewOrderModule :React.FC = () => {
  const navigate = useNavigate();
  const {step} = useParams();

  const onClose = () => {
    navigate('/')
  }

  return (
    <NewOrderComponent>
      <NewOrderCloseButton>
        <RemoveCrossButton onClick={onClose}/>
      </NewOrderCloseButton>
      {(step && step === 'step-1') && <NewOrderSearchStep/>}
      {(step && step === 'step-2') && <NewOrderDataStep />}
      {(step && step === 'step-3') && <NewOrderSubmitStep />}
    </NewOrderComponent>
  );
};

export default CreateNewOrderModule;