import styled from'styled-components';
import {IThemeProvider} from '../../../../../../Theme/defaultTheme.ts';

export const AvatarBlock = styled.div`
  position: relative;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 150px;
  height: 200px;
  
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const AvatarName = styled.span<IThemeProvider>`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: 34px;
  text-align: center;
`;

export const AvatarEditButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 40px;
  height: 40px;
  
  background-color: transparent;
  border: 0;
  padding: 0;
  
  & svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;