import styled from'styled-components';
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';

export const StyledHeader = styled.header<IThemeProvider>`
  font-family: ${props => props.theme.font_style.font_family};
  background-color: ${props => props.theme.colors.grey_lightest};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 16px;
`;

export const HeaderLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeaderGeoBlock = styled.div<IThemeProvider>`
  display: flex;
  align-items: center;
  gap: 8px;
  
  color: ${props => props.theme.colors.grey};
`;

export const HeaderGeoIconBlock = styled.div`
  width: 20px;
  height: 20px;
  
  & svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const HeaderGeoSpan = styled.span<IThemeProvider>`
  font-size: 1rem;
`;

export const HeaderHelloBlock = styled.span`
  
`;