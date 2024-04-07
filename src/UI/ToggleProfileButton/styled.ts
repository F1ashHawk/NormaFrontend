import styled, {IDefaultTheme} from 'styled-components';

interface IStyledButton {
  theme :IDefaultTheme;
  variant :'active' | 'nonActive';
}

export const StyledButton = styled.button<IStyledButton>`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: 14px;
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  color: ${props => props.variant === 'active' ? props.theme.colors.brand_blue : props.theme.colors.white};

  background-color: ${props => props.variant === 'active' ? props.theme.colors.white : props.theme.colors.brand_blue};
  border: ${props => props.variant === 'nonActive' ? `0` : `1px solid ${props.theme.colors.brand_blue}`};

  box-sizing: border-box;

  cursor: pointer;

  padding: 20px 30px;
  width: 154px;
  height: 64px;
`;