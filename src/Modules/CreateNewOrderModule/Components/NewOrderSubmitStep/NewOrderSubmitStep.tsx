import React from 'react';
import {
  NewOrderSubmitButton,
  NewOrderSubmitHeading,
  NewOrderSubmitItem,
  NewOrderSubmitLabel,
  NewOrderSubmitText,
  NewOrderWrapper
} from '../../styled.ts';
import {useAppSelector} from '../../../../Hooks/redux/useAppSelector.ts';

const NewOrderSubmitStep :React.FC = () => {
  const {title, info, date, address, cost, comment} = useAppSelector(state => state.orderSlice)


  return (
    <NewOrderWrapper>
      <NewOrderSubmitHeading>Подтверждение заказа</NewOrderSubmitHeading>
      <NewOrderSubmitItem>
        <NewOrderSubmitLabel>Название заказа:</NewOrderSubmitLabel>
        <NewOrderSubmitText>{title}</NewOrderSubmitText>
      </NewOrderSubmitItem>
      <NewOrderSubmitItem>
        <NewOrderSubmitLabel>Задача:</NewOrderSubmitLabel>
        <NewOrderSubmitText>{info}</NewOrderSubmitText>
      </NewOrderSubmitItem>
      <NewOrderSubmitItem>
        <NewOrderSubmitLabel>Удобная дата:</NewOrderSubmitLabel>
        <NewOrderSubmitText>{date}</NewOrderSubmitText>
      </NewOrderSubmitItem>
      <NewOrderSubmitItem>
        <NewOrderSubmitLabel>Адрес:</NewOrderSubmitLabel>
        <NewOrderSubmitText>{address}</NewOrderSubmitText>
      </NewOrderSubmitItem>
      <NewOrderSubmitItem>
        <NewOrderSubmitLabel>Предлагаемая оплата:</NewOrderSubmitLabel>
        <NewOrderSubmitText>{cost}</NewOrderSubmitText>
      </NewOrderSubmitItem>
      {comment &&
        <NewOrderSubmitItem>
          <NewOrderSubmitLabel>Комментарий</NewOrderSubmitLabel>
          <NewOrderSubmitText>{comment}</NewOrderSubmitText>
        </NewOrderSubmitItem>
      }
      <NewOrderSubmitButton>Подтвердить</NewOrderSubmitButton>
    </NewOrderWrapper>
  );
};

export default NewOrderSubmitStep;