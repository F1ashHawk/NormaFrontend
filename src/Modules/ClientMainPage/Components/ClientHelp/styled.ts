import styled from'styled-components';
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';

export const HelpContainer = styled.div`
  padding: 24px 16px;
`;

export const HelpList = styled.div`
  width: 100%;
  font-family: ${props => props.theme.font_style.font_family};
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const HelpItem = styled.div<IThemeProvider>`
  min-height: 150px;
  flex: 1 0 150px;
  display: flex;
  flex-direction: column;
  
  padding: 12px;
  background-color: ${props => props.theme.colors.grey_lightest};
  border-radius: 12px;
`;

export const HelpItemTitle = styled.h4`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`;

export const HelpItemIcon = styled.div``;