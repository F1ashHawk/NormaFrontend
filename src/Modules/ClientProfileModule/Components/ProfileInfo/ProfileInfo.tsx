import React from 'react';
import ProfileAvatarBlock from './Blocks/ProfileAvatarBlock/ProfileAvatarBlock.tsx';
import ProfileInfoBlock from './Blocks/ProfileInfoBlock/ProfileInfoBlock.tsx';
import ProfileOrders from './Blocks/ProfileOrders/ProfileOrders.tsx';
import ProfileReviews from './Blocks/ProfileReviews/ProfileReviews.tsx';

const ProfileInfo :React.FC = () => {


  return (
    <>
      <ProfileAvatarBlock />
      <ProfileInfoBlock />
      <ProfileOrders />
      <ProfileReviews />
    </>
  );
};

export default ProfileInfo;