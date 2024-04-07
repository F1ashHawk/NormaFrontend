import React from 'react';
import {StoreIcon} from './styled';

interface IBasicStoreIconProps {
  store: 'google' | 'apple';
  href?: string;
  target?: string;
}

const BasicStoreIcon: React.FC<IBasicStoreIconProps> = ({store, href, target}) => {
  return (
    <StoreIcon data-store={store} href={href} target={target}/>
  );
};

export default BasicStoreIcon;