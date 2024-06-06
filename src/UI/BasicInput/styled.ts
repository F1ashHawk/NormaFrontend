import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

interface IStyledInput {
  size?: string;
}

export const StyledLabel = styled.label<IThemeProvider & IStyledInput>`
  width: ${props => props.size === 'lg' ? '100%' : ''};
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: 18px;
`;

export const StyledInput = styled.input<IThemeProvider & IStyledInput>`
  padding: ${props => props.theme.format.main_md_padding};
  background-color: transparent;
  width: 100%;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: 18px;
  color: ${props => props.theme.colors.black};

  border: 1px solid ${props => props.theme.colors.grey_semi};
  border-radius: ${props => props.theme.format.small_border_radius};
  box-sizing: border-box;

  &[data-in-error='true'] {
    border: 1px solid ${props => props.theme.colors.secondary_red};
  }
`;

export const StyledErrorText = styled.span<IThemeProvider & IStyledInput>`
  display: none;
  position: absolute;
  width: 100%;

  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.small};

  color: ${props => props.theme.colors.secondary_red};

  &[data-in-error='true'] {
    display: block;
  }
`;