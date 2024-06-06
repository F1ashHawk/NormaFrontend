import {
  NewOrderInput,
  NewOrderPopularItem,
  NewOrderPopularList,
  NewOrderSearch,
  NewOrderWrapper
} from '../../styled.ts';
import {useState} from 'react';
import {orderActions} from '../../Slices/newOrder.slice.ts';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../../../Hooks/redux/useAppDispatch.ts';

const NewOrderSearchStep = () => {
  const [searchValue, setSearchValue]  =  useState('');

  const dispatch  =  useAppDispatch();

  const {setTitle} = orderActions;

  const navigate  = useNavigate();

  const handleChoose = (value: string) => {
    dispatch(setTitle(value))

    navigate('/new-order/step-2')
  }

  return (
    <NewOrderWrapper>
      <NewOrderSearch>
        <NewOrderInput placeholder={'Сантехник'} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      </NewOrderSearch>
      <NewOrderPopularList>
        <NewOrderPopularItem onClick={()=>handleChoose('Сантехник')}>Электрик</NewOrderPopularItem>
        <NewOrderPopularItem>Электрическое оборудование</NewOrderPopularItem>
        <NewOrderPopularItem>Электрический чайник ремонт</NewOrderPopularItem>
        <NewOrderPopularItem></NewOrderPopularItem>
      </NewOrderPopularList>
    </NewOrderWrapper>
  );
};

export default NewOrderSearchStep;