import styled from "styled-components";
import {IThemeProvider} from "../../Theme/defaultTheme";

export const CheckboxButtonLabel = styled.label<IThemeProvider>`
  display: block;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid ${props => props.theme.colors.brand_blue};
  border-radius: 4px;

  position: relative;
`;

export const CheckboxButtonMark = styled.div<IThemeProvider>`
  width: 11px;
  height: 8px;

  position: absolute;
  color: ${props => props.theme.colors.brand_blue};
  left: 3px;
  top: 5px;
  display: none;

  & svg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const CheckboxButtonBlock = styled.div<IThemeProvider>`
  &[data-is-disabled='true'] {
    & ${CheckboxButtonLabel} {
      border: 2px solid ${props => props.theme.colors.black_40};

      ${CheckboxButtonMark} {
        color: ${props => props.theme.colors.black_80};
      }
    }
  }
`;

export const CheckboxButtonInput = styled.input<IThemeProvider>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${CheckboxButtonLabel} {
    border: 2px solid ${props => props.theme.colors.brand_blue};
  }

  &:checked + ${CheckboxButtonLabel} ${CheckboxButtonMark} {
    display: block;
  }

  &:disabled + ${CheckboxButtonLabel} {
    border: 2px solid ${props => props.theme.colors.black_40};
  }

  &:disabled + ${CheckboxButtonLabel} ${CheckboxButtonMark} {
    color: ${props => props.theme.colors.black_80};
  }
`;