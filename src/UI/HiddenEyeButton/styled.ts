import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const HiddenButton = styled.button<IThemeProvider>`
  border: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;

  width: 20px;
  height: 20px;
  object-fit: contain;

  cursor: pointer;

  color: ${props => props.theme.colors.grey};

  &:hover {
    color: ${props => props.theme.colors.black_80};
  }
`;
