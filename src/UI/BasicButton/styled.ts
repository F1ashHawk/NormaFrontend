import styled, {IDefaultTheme} from 'styled-components';

interface IStyledButton {
  theme: IDefaultTheme;
  'data-size': string;
  'data-variant': 'blue' | 'white' | 'red';
}

export const StyledButton = styled.button<IStyledButton>`
  font-family: ${props => props.theme.font_style.font_family};
  font-size: ${props => props.theme.font_sizes.content};
  font-weight: ${props => props.theme.font_style.font_weight.regular};
  border-radius: ${props => props.theme.format.small_border_radius};
  cursor: pointer;
  padding: ${props => props.theme.format.main_md_padding} ${props => props.theme.format.main_md_padding};
  width: 175px;
  height: min-content;
  border: 1px solid transparent;

  &[data-size='sm'] {
    padding: ${props => `${props.theme.format.main_sm_padding} ${props.theme.format.main_md_padding}`};
    width: max-content;
    font-size: 12px;
  }

  &[data-size='md'] {
    padding: ${props => `${props.theme.format.main_md_padding} ${props.theme.format.main_lg_padding}`};
    width: max-content;
  }

  &[data-size='lg'] {
    width: 100%;
  }

  &[data-variant='blue'] {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary_btn};
    border: 0;

    &:hover {
      background-color: ${props => props.theme.colors.brand_blue};
    }

    &:disabled {
      background-color: ${props => props.theme.colors.grey_semi};
      color: ${props => props.theme.colors.black_40};
    }
  }

  &[data-variant='white'] {
    color: ${props => props.theme.colors.black};
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.secondary_btn};

    &:hover {
      background-color: ${props => props.theme.colors.primary_blue};
    }
  }

  &[data-variant='red'] {
    color: ${props => props.theme.colors.secondary_red};
    background-color: transparent;
    border: 0;

    &:hover {
      background-color: ${props => props.theme.colors.black_5};
    }
  }

  &:disabled {
    background-color: ${props => props.theme.colors.grey_semi};
    color: ${props => props.theme.colors.black_40};
  }
`;