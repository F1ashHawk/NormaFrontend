import styled from 'styled-components';
import {IThemeProvider} from '../../Theme/defaultTheme';

export const StyledStatisticBtn = styled.button<IThemeProvider>`
  width: 24px;
  height: 20px;
  object-fit: contain;
  background-color: transparent;
  border: 0;
  padding: 0;

  cursor: pointer;

  color: ${props => props.theme.colors.black_40};

  &:hover {
    color: ${props => props.theme.colors.black_60};
  }
`;