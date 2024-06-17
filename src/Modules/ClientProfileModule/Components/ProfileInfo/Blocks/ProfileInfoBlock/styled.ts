import styled from 'styled-components';
import {BasicContentSpan} from '../../../../../../Theme/basicElements.ts';

export const InfoBlock = styled.div`
  margin-top: 30px;
  
  display: flex;
  flex-direction: column;
  
  gap: 12px;
`;

export const InfoRow = styled.div``;

export const InfoGreySpan = styled(BasicContentSpan)`
  color: ${props => props.theme.colors.grey};
  font-size: 14px;
  margin-right: 8px;
`;

export const InfoMainSpan = styled(BasicContentSpan)`
  font-size: 18px;
`;