import styled from 'styled-components';
import {IThemeProvider} from './defaultTheme';
import {Backdrop} from '@mui/material';

export const BasicModalWrapper = styled.div<IThemeProvider>`
  position: absolute;
  padding: 64px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.white};
  min-width: 512px;
  max-width: 1044px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: border-box;
  border-radius: ${props => props.theme.format.main_lg_border_radius};
  max-height: 800px;
`;

export const CustomBackdrop = styled(Backdrop)`
  backdrop-filter: blur(8px);
`;


export const BasicModalTitle = styled.h3<IThemeProvider>`
  margin: 0 0 32px 0;
  padding: 0;

  font-family: ${props => props.theme.font_style.font_family};
  font-weight: ${props => props.theme.font_style.font_weight.bold};
  font-size: ${props => props.theme.font_sizes.title};
  text-align: start;

  color: ${props => props.theme.colors.black};
`;

export const ModalInputBlock = styled.div<IThemeProvider>`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  gap: ${props => props.theme.format.main_lg_gap};

  margin-bottom: 4px;
`;

export const CloseButtonBlock = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 32px;
  right: 36px;
`;