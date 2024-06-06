import React, {forwardRef, ReactNode, Ref, RefObject} from 'react';
import {StyledPopup} from './styled';

interface IComponentProps {
  children :ReactNode[] | ReactNode;
  ref :RefObject<HTMLDivElement>;
}

const CustomPopup = forwardRef((props :IComponentProps, ref :Ref<HTMLDivElement>) => (
  <StyledPopup ref={ref}>
    {props.children}
  </StyledPopup>
));


export default CustomPopup;