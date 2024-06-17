import React from 'react';
import {ProfileWrapper} from './styled.ts';
import {Route, Routes} from 'react-router-dom';
import ProfileInfo from './Components/ProfileInfo/ProfileInfo.tsx';
import ProfileEdit from './Components/ProfileEdit/ProfileEdit.tsx';
import ProfileOrder from './Components/ProfileOrder/ProfileOrder.tsx';

const ClientProfileModule :React.FC = () => {

  return (
    <ProfileWrapper>
      <Routes>
        <Route path={'/'} element={<ProfileInfo/>}/>
        <Route path={'/edit'} element={<ProfileEdit/>}/>
        <Route path={'/order/:id'} element={<ProfileOrder/>}/>
      </Routes>
    </ProfileWrapper>
  );
};

export default ClientProfileModule;