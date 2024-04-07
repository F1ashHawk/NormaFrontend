import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const CopyButton = styled.button<IThemeProvider>`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${props => props.theme.colors.grey};
  background-color: transparent;
  border: 0;

  &:hover {
    color: ${props => props.theme.colors.black_60};
  }
`;