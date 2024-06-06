import styled from'styled-components'
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';
import searchIcon from '../../../../Assets/svg/search.svg';


export const IntroContainer = styled.div<IThemeProvider>`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  font-family: ${props => props.theme.font_style.font_family};
`;

export const IntroHeading = styled.h1`
  font-size: 32px;
  padding: 0 18px;
  font-weight: 400;
  margin: 0;
`;

export const IntroSearchBlock = styled.div`
  position: sticky;
  top: 0;
  
  width: 100%;
  padding: 24px 18px;
`;

export const IntroSearchButton = styled.button<IThemeProvider>`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  padding: 18px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  text-align: left;
  color: ${props => props.theme.colors.grey};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 24px;
    height:24px;

    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const IntroSearchPicture = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.grey_semi};
`;