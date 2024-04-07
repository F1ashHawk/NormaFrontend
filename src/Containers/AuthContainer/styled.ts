import styled from'styled-components'
import {IThemeProvider} from '../../Theme/defaultTheme.ts';

export const AuthPageWrapper = styled.div<IThemeProvider>`
  background-color: ${props => props.theme.colors.primary_light};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;