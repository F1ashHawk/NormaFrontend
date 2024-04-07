import React from 'react';
import {StyledStatisticBtn} from './styled';

interface IStatisticButtonProps {
  onClick: () => void;
}

const StatisticButton = ({onClick}: IStatisticButtonProps) => {
  return (
    <StyledStatisticBtn onClick={onClick} title={'Statistic'}>
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="6.60547" width="5.92581" height="14.3732" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
        <rect x="8.88867" y="0.979492" width="5.92581" height="19.9995" rx="1.5" fill="currentColor"
              fillOpacity="0.6"/>
        <rect x="17.7773" y="10.9241" width="5.92581" height="10.0554" rx="1.5" fill="currentColor" fillOpacity="0.6"/>
      </svg>
    </StyledStatisticBtn>
  );
};

export default StatisticButton;