import React from 'react';
import {
  DataContainer,
  DataInput,
  DataMainInfoBlock,
  DataOrderData,
  DataSpan,
  DataTextArea,
  DataTitleInput, DataTitleInputBlock
} from './styled.ts';
import {useAppSelector} from '../../../../Hooks/redux/useAppSelector.ts';
import {orderActions} from '../../Slices/newOrder.slice.ts';
import {useAppDispatch} from '../../../../Hooks/redux/useAppDispatch.ts';
import BasicButton from '../../../../UI/BasicButton';
import {useNavigate} from 'react-router-dom';

const NewOrderDataStep :React.FC = () => {
  const {title, info, date, address, cost, comment} = useAppSelector(state => state.orderSlice)

  const {setTitle, setInfo, setAddress, setDate, setCost, setComment} = orderActions

  const dispatch = useAppDispatch();

  const navigate  = useNavigate();

  return (
    <DataOrderData>
      <DataTitleInputBlock>
        <DataTitleInput value={title} onChange={(e)   => dispatch(setTitle(e.target.value))}/>
      </DataTitleInputBlock>
      <DataContainer>
        <DataSpan>Главное о задаче</DataSpan>
        <DataInput
          placeholder={'Что требуется сделать?'}
          value={info}
          onChange={(e) => dispatch(setInfo(e.target.value))}
        />
        <DataMainInfoBlock>
          <DataInput
            placeholder={'Когда нужна услуга?'}
            value={date}
            onChange={(e)  => dispatch(setDate(e.target.value))}
          />
          <DataInput
            placeholder={'Ваш адрес'}
            value={address}
            onChange={(e)   => dispatch(setAddress(e.target.value))}
          />
          <DataInput
            placeholder={'Подходящая стоимость'}
            value={cost}
            type={'number'}
            onChange={(e)  => dispatch(setCost(e.target.value))}
          />
        </DataMainInfoBlock>
        <DataSpan>Дополнительно</DataSpan>
        <DataTextArea
          placeholder={'Пожелания и особенности'}
          rows={3}
          value={comment}
          onChange={(e)  => dispatch(setComment(e.target.value))}
        />
        <BasicButton onClick={() => navigate('/new-order/step-3')} size={'lg'} text={'Далее'} variant={'blue'}/>
      </DataContainer>
    </DataOrderData>
  );
};

export default NewOrderDataStep;