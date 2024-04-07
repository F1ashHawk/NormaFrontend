import styled from 'styled-components';

export const RadioButtonBlock = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioButtonLabel = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.black};
  user-select: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    height: 19px;
    width: 19px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.black_40};
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);

    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${props => props.theme.colors.brand_blue};
    display: none;
  }
`;

export const RadioButtonInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked + ${RadioButtonLabel}::before {
    border: 2px solid ${props => props.theme.colors.brand_blue};
  }

  &:checked + ${RadioButtonLabel}::after {
    display: block;
  }
`;

