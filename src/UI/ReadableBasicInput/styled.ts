import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const ReadableInputLabel = styled.label`
  position: relative;
`;

export const ReadableInputCopyButton = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;

  transform: translateY(-50%);
  background-color: ${props => props.theme.colors.white};
`;

export const ReadableInput = styled.input<IThemeProvider>`
  padding: ${props => props.theme.format.main_md_padding};
  border: 1px solid ${props => props.theme.colors.grey_semi};
  background-color: ${props => props.theme.colors.white};

  border-radius: ${props => props.theme.format.main_md_border_radius};
  color: ${props => props.theme.colors.black};

  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};

  &[data-size='lg'] {
    width: 100%;
  }

  &[data-size='md'] {
    width: 420px;
  }
`;