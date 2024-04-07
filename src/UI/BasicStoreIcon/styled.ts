import styled from 'styled-components';
import appStoreIcon from '../../Images/svg/appstore-logo.svg';
import playMarketIcon from '../../Images/png/playmarket-icon.png';

export const StoreIcon = styled.a`
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;

  &[data-store='apple'] {
    background-image: url(${appStoreIcon});
  }

  &[data-store='google'] {
    background-image: url(${playMarketIcon});
  }
`;