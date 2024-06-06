import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme.ts';

export const StyledUserButton = styled.button<IThemeProvider>`
  color: ${props => props.theme.colors.brand_blue};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  display: block;
  
  width: 48px;
  height: 32px;
  
  & svg {
    width: 100%;
    height: 100%;
    
    object-fit: cover;
  }

  // &:hover {
  //   color: ${props => props.theme.colors.brand_hover};
  // }
`;

export const LogOutButton = styled.a`
  width: max-content;
`;