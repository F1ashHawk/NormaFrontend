import React from 'react';
import {SpecNavigation, SpecNavLink, SpecNavWrapper} from './styled.ts';

const SpecialistNavigation :React.FC = () => {
  return (
    <SpecNavigation>
      <SpecNavWrapper>
        <SpecNavLink></SpecNavLink>
        <SpecNavLink></SpecNavLink>
        <SpecNavLink></SpecNavLink>
      </SpecNavWrapper>
    </SpecNavigation>
  );
};

export default SpecialistNavigation;