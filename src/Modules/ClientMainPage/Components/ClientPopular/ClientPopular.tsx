import {PopularContainer, PopularHeading, PopularItem, PopularItemSpan, PopularList} from './styled.ts';

const ClientPopular = () => {
  return (
    <PopularContainer>
      <PopularHeading>Популярные запросы</PopularHeading>
      <PopularList>
        <PopularItem>
          <PopularItemSpan>2392</PopularItemSpan>
          <PopularItemSpan>Психологи</PopularItemSpan>
        </PopularItem>
        <PopularItem>
          <PopularItemSpan>30 103</PopularItemSpan>
          <PopularItemSpan>Репетиторы по математике</PopularItemSpan>
        </PopularItem>
        <PopularItem>
          <PopularItemSpan>47 359</PopularItemSpan>
          <PopularItemSpan>Репетиторы по английскому</PopularItemSpan>
        </PopularItem>
        <PopularItem>
          <PopularItemSpan>761</PopularItemSpan>
          <PopularItemSpan>Сантехники</PopularItemSpan>
        </PopularItem>
      </PopularList>
    </PopularContainer>
  );
};

export default ClientPopular;