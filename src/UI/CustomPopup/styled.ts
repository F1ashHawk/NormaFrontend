import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const StyledPopup = styled.div<IThemeProvider>`
  position: absolute;
  right: 0;

  padding: 16px 32px 16px 16px;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey_semi};
  border-radius: ${props => props.theme.format.main_md_border_radius};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  & a {
    font-family: ${props => props.theme.font_style.font_family};
    font-weight: ${props => props.theme.font_style.font_weight.regular};
    font-size: ${props => props.theme.font_sizes.content};
    color: ${props => props.theme.colors.black};

    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;