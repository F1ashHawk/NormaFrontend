import {
  HeaderGeoBlock,
  HeaderGeoIconBlock,
  HeaderGeoSpan, HeaderHelloBlock,
  HeaderLeftContent,
  HeaderWrapper,
  StyledHeader
} from './styled.ts';
import GeoIcon from '../../../../UI/GeoIcon/GeoIcon.tsx';
import UserButton from '../../../../UI/UserButton';

const ClientHeader = () => {
  const handleLogOut = () => {}

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderLeftContent>
          <HeaderGeoBlock>
            <HeaderGeoIconBlock>
              <GeoIcon />
            </HeaderGeoIconBlock>
            <HeaderGeoSpan>Ростов-на-Дону</HeaderGeoSpan>
          </HeaderGeoBlock>
          <HeaderHelloBlock>Добрый день, Никита</HeaderHelloBlock>
        </HeaderLeftContent>
        <UserButton handleLogOut={handleLogOut}/>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default ClientHeader;