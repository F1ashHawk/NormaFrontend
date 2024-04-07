import styled from'styled-components'
import {IThemeProvider} from '../../../../Theme/defaultTheme.ts';

export const AuthWindowWrapper = styled.div<IThemeProvider>`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  

  padding: ${props => props.theme.format.main_md_padding};
  border-radius: ${props => props.theme.format.main_md_border_radius};
`;

export const AuthSelector = styled.div`
  display: flex;
  gap: 8px;
  width: max-content;
  margin-bottom: 32px;
`;

export const AuthSelectorButton = styled.button<IThemeProvider>`
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.black};
  border: 0;

  background-color: transparent;
  border-radius: ${props => props.theme.format.main_md_border_radius};
  padding: ${props => props.theme.format.main_md_padding} ${props => props.theme.format.main_lg_padding};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary_purple};
  }

  &:focus-visible {
    background-color: ${props => props.theme.colors.primary_purple};
    outline: 0;
  }

  &:disabled {
    outline: 1px solid ${props => props.theme.colors.secondary_btn};
    cursor: auto;
    background-color: transparent;
  }
`;