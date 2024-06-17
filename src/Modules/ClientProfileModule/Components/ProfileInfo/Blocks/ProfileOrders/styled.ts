import styled from 'styled-components';
import {BasicContentSpan} from '../../../../../../Theme/basicElements.ts';
import {IThemeProvider} from '../../../../../../Theme/defaultTheme.ts';

export const OrdersBlock = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const OrdersTitle = styled(BasicContentSpan)`
  font-size: 28px;
  text-transform: uppercase;
  padding-left: 16px;
`;

export const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 20px;
`;

export const OrdersItem = styled.div`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: min-content min-content;
  align-content: space-between;
  justify-content: space-between;
  
  padding: 16px;
  border-radius: 19px;

  background-color: ${props => props.theme.colors.white};
`;

export const OrdersItemTitle = styled(BasicContentSpan)`
  font-size: 24px;
`;

export const OrdersItemStatus = styled(BasicContentSpan)<IThemeProvider>`
  padding-right: 15px;
  font-size: 18px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    
    width: 10px;
    height: 10px;
    border-radius: 50%;

    background-color: ${props => props.theme.colors.secondary_green_a};
  }
`;

export const OrdersItemDate = styled(BasicContentSpan)`
  font-size: 18px;
  color: ${props => props.theme.colors.grey};
`;