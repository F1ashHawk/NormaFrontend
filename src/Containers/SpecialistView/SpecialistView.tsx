import React from 'react';
import {SpecialistViewContainer} from './styled.ts';
import SpecialistNavigation from './Components/SpecialistNavigation/SpecialistNavigation.tsx';
import OrdersListModule from '../../Modules/OrdersListModule/OrdersListModule.tsx';
import OrderModule from '../../Modules/OrderModule/OrderModule.tsx';
import SpecialistProfileModule from '../../Modules/SpecialistProfileModule/SpecialistProfileModule.tsx';
import {Route, Routes} from 'react-router-dom';

const SpecialistView :React.FC = () => {
  const SPECIALIST_ROUTES = [
    {
      path: '/',
      component: <OrdersListModule />,
    },
    {
      path: '/order/:id',
      component: <OrderModule />
    },
    {
      path: '/profile',
      component: <SpecialistProfileModule />
    }
  ]

  return (
    <SpecialistViewContainer>
      <Routes>
        {SPECIALIST_ROUTES.map((route) => (
           <Route  key={route.path}  path={route.path}  element={route.component}  />
         ))}
      </Routes>
      <SpecialistNavigation />
    </SpecialistViewContainer>
  );
};

export default SpecialistView;