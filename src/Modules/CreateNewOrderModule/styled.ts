import styled from'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme.ts';
import {BasicContentSpan} from '../../Theme/basicElements.ts';

export const NewOrderComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;

  z-index: 5;
  
  top: 0;
  left: 0;
  background-color: #fff;
`;

export const NewOrderCloseButton = styled.div`
position: absolute;
  top: 32px;
  right: 32px;
  
  
`;

export const NewOrderWrapper = styled.div`
  padding: 48px 16px;
  display: flex;
  flex-direction: column;
`;

export const NewOrderSearch = styled.div`
  width: 100%;
  
  margin-bottom: 16px;
`;

export const NewOrderInput  = styled.input<IThemeProvider>`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.grey};
  padding: 8px;
  font-size: 36px;
  font-family: ${props => props.theme.font_style.font_family};
`;

export const NewOrderPopularList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NewOrderPopularItem  = styled.div`
  font-size: 18px;
  font-family: ${props => props.theme.font_style.font_family};
  padding: 8px;
`;

export const NewOrderSubmitHeading = styled(BasicContentSpan)`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const NewOrderSubmitButton = styled.button`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 32px 32px;
  background-color: ${props => props.theme.colors.brand_blue};
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
  border: 0;
  border-radius: 19px 19px 0 0;
`;

export const NewOrderSubmitItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  margin-bottom: 32px;
`;

export const NewOrderSubmitLabel = styled(BasicContentSpan)`
  color: ${props => props.theme.colors.grey};
  font-size: 18px;
`;

export const NewOrderSubmitText = styled(BasicContentSpan)`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
`;