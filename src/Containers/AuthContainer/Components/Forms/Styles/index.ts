import styled from 'styled-components';
import {IThemeProvider} from '../../../../../Theme/defaultTheme';

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;

export const AuthInputsBlock = styled.div<IThemeProvider>`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 32px;
`;

export const AuthInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 16px;
`;

export const AuthButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
`;

export const AuthInputErrorText = styled.span<IThemeProvider>`
  display: none;
  position: absolute;
  width: max-content;

  bottom: -24px;
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

export const AuthFormErrorText = styled(AuthInputErrorText)`
  bottom: 32px;
`;

export const ForgotSpan = styled.span<IThemeProvider>`
  display: block;
  width: max-content;
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.small};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  align-self: end;
  cursor: pointer;
  margin-top: 16px;

  & a {
    color: ${props => props.theme.colors.brand_blue};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.brand_purple};
      text-decoration: underline;
    }
  }
`;


export const RegButtonsBlock = styled.div<IThemeProvider>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;