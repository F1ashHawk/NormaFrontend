import styled from'styled-components'

export const SelectContainer = styled.div`
  width: 100%;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
`;

export const SelectLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Select = styled.select`
  padding: ${props => props.theme.format.main_md_padding};
  background-color: transparent;
  width: 100%;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  font-size: ${props => props.theme.font_sizes.content};
  color: ${props => props.theme.colors.black};

  border: 1px solid ${props => props.theme.colors.grey_semi};
  border-radius: ${props => props.theme.format.small_border_radius};
  box-sizing: border-box;
`;

export const SelectOption = styled.option``;