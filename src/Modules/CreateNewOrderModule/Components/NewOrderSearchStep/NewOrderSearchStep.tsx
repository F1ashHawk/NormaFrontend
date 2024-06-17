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
import {useGetTagsQuery} from '../../../../Store/API/order.api.ts';
import useDebounce from '../../../../Hooks/useDebounce/useDebounce.ts';

const NewOrderSearchStep = () => {
  const [searchValue, setSearchValue]  =  useState('');

  const debouncedSearch = useDebounce(searchValue, 1000);

  const dispatch  =  useAppDispatch();

  const {setTitle} = orderActions;

  const navigate  = useNavigate();

  const {data, isLoading} = useGetTagsQuery({search: debouncedSearch});

  const handleChoose = (value: string) => {
    dispatch(setTitle(value))

    navigate('/new-order/step-2')
  }

  return (
    <NewOrderWrapper>
      <NewOrderSearch>
        <NewOrderInput placeholder={'Сантехник'} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
      </NewOrderSearch>
      {isLoading && <h1>Loading...</h1>}
      {(data && data.length) &&
        <NewOrderPopularList>
          {data.map((popular) =>
            <NewOrderPopularItem key={popular.id} onClick={() => handleChoose(popular.name)}>{popular.name}</NewOrderPopularItem>
          )}
        </NewOrderPopularList>
      }

    </NewOrderWrapper>
  );
};

export default NewOrderSearchStep;