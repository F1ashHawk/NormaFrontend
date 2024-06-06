import styled from'styled-components'
import {IThemeProvider} from '../../Theme/defaultTheme.ts';

export const AuthPageWrapper = styled.div<IThemeProvider>`
  background-color: ${props => props.theme.colors.primary_light};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledAuthPage = styled.div<IThemeProvider>`
  position: relative;
  width: 100%;
  height: 100vh;

  background: #BFC7EF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  padding: 20px;

  &::before {
    content: '';
    width: 3480px;
    height: 3146px;
    border-radius: 3480.865px;
    background: linear-gradient(309deg, #E5E9FC 17.66%, rgba(232, 234, 249, 0.00) 100%);
    filter: blur(5px);

    position: absolute;
    right: -277px;
    bottom: -77px;
  }

  &::after {
    content: '';
    width: 1731.433px;
    height: 1731.433px;
    border-radius: 1731.433px;
    background: linear-gradient(101deg, #C4CDF9 0%, rgba(232, 234, 249, 0.00) 100%);
    filter: blur(5px);

    position: absolute;
    top: -1223px;
    right: -90px;
  }
`;

export const AuthLogoBlock = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: max-content;
`;

export const AuthLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;


export const AuthFormBlock = styled.div`
  position: relative;
  z-index: 2;
  
  min-height:300px;
  
  width: 100%;
  max-width: 550px;
`;