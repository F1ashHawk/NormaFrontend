import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const ClearButton = styled.button<IThemeProvider>`
  border: 0;
  width: 24px;
  height: 24px;
  padding: 0;

  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);

  color: ${props => props.theme.colors.grey};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    color: ${props => props.theme.colors.black};
  }

  &[data-type='select'] {
    right: 32px;
  }
`;