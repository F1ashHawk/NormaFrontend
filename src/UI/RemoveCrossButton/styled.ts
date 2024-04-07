import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const RemoveButton = styled.button<IThemeProvider>`
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.grey_semi};
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:hover {
    color: ${props => props.theme.colors.grey};
  }
`;