import styled from'styled-components'
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';

export const PopularContainer = styled.div<IThemeProvider>`
  width: 100%;
  overflow: hidden;
  padding: 16px 0;
  font-family: ${props => props.theme.font_style.font_family};
  
`;

export const PopularHeading = styled.h2`
  font-size: 18px;
  font-weight: 400;
  padding: 0 16px;
`;

export const PopularList = styled.ul`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  
  margin: 0;
  padding: 0 16px;
`;

export const PopularItem = styled.li<IThemeProvider>`
  min-width: 150px;
  background-color: ${props => props.theme.colors.brand_blue};
  height: 200px;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;

export const PopularItemSpan = styled.span`
  font-size: 12px;
  color: #ffffff;
`;

export const PopularItemImg = styled.img``;