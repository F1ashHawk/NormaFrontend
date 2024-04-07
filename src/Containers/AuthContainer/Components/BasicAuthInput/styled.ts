import styled from 'styled-components';
import {IThemeProvider} from '../../../../Theme/defaultTheme';
import emailIcon from '../../../../Assets/svg/email-icon.svg';
import passwordIcon from '../../../../Assets/svg/password-icon.svg';

export const BasicAuthInputLabel = styled.label<IThemeProvider>`
  width: 100%;
  padding: ${props => props.theme.format.main_md_padding};
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.grey_semi};
  border-radius: ${props => props.theme.format.main_md_border_radius};
  display: inline-flex;
  gap: ${props => props.theme.format.main_sm_gap};
  position: relative;

  &:focus-within {
    border: 1px solid ${props => props.theme.colors.secondary_btn};
  }

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;

    background-repeat: no-repeat;
    background-size: contain;
  }

  &[data-field='email'] {
    &::before {
      background-image: url(${emailIcon});
      opacity: 0.7;
    }
  }

  &[data-field='password'] {
    &::before {
      background-image: url(${passwordIcon});
    }
  }

  &[data-in-error='true'] {
    border: 1px solid ${props => props.theme.colors.secondary_red};
  }
`;


export const AuthInput = styled.input<IThemeProvider>`
  border: 0;
  background-color: transparent;
  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.black};

  width: calc(100% - 34px);

  &:focus-visible {
    outline: 0;
  }

  &::placeholder {
    color: ${props => props.theme.colors.grey_semi};
  }
`;

export const AuthInputErrorText = styled.span<IThemeProvider>`
  display: none;
  position: absolute;
  width: max-content;

  bottom: -16px;
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