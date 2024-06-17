import styled from'styled-components';
import {BasicContentSpan} from '../../../../Theme/basicElements.ts';
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';
import {NewOrderWrapper} from '../../styled.ts';

export const DataOrderData = styled(NewOrderWrapper)`
  padding: 30px 0 0;
  height: 100%;
`;

export const DataTitleInputBlock = styled.div`
  width: 100%;
  padding: 40px 30px 30px;
`;

export const DataTitleInput = styled.input<IThemeProvider>`
  background-color: transparent;
  font-family: ${props => props.theme.font_style.font_family};
  font-size: 32px;
  padding: 0;
  border: 0;
  width: 100%;
  
`;

export const DataContainer = styled.div<IThemeProvider>`
  border-radius: 50px 50px 0 0;
  background-color: ${props => props.theme.colors.grey_lightest};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 40px;
  
  & button {
    margin-top: 40px;
  }
`;

export const DataSpan = styled(BasicContentSpan)`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const DataInput  = styled.input<IThemeProvider>`
  border: 0;
  
  background-color: ${props => props.theme.colors.white};
  padding: 24px 16px;

  font-family: ${props => props.theme.font_style.font_family};
  font-size: 18px;
  
  border-radius: 19px;
  
  &[data-in-error='true'] {
    outline: 1px solid ${props => props.theme.colors.secondary_red};
  }
`;

export const DataTextArea  = styled.textarea`
  border: 0;

  background-color: ${props => props.theme.colors.white};
  padding: 24px 16px;

  font-family: ${props => props.theme.font_style.font_family};
  font-size: 18px;

  border-radius: 19px;
`;

export const DataMainInfoBlock = styled.div`
  padding: 24px 0;
  
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  
  & input:first-child {
    border-radius: 19px 19px 8px 8px;
  }
  
  & input:nth-child(2) {
    border-radius: 8px;
  }

  & input:last-child {
    border-radius: 8px 8px 19px 19px;
  }
`;